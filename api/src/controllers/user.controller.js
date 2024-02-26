import util from 'util';
import fs from 'fs';
import { exec } from 'child_process';
import path from 'path';
import { pool } from "../db.js";

const accessAsync = util.promisify(fs.access);
const writeFileAsync = util.promisify(fs.writeFile);

export const resolveExercise = async (req, res, next) => {
    const content = req.body;
    const user = req.params.user;
    const exercise_id = req.params.exercise;

    console.log("exercise_id: ", exercise_id);

    if (Object.keys(content).length == 0) {
        return res.status(500).json({ statusCode: 500, message: 'Error body is empty' });
    }

    const result = await pool.query("SELECT * FROM exercises WHERE id = $1", [
        exercise_id,
    ]);
    if (result.rowCount === 0) {
        return res.status(404).json({
            message: "No Exercise exists with that id",
        });
    }
    // TODO: move to Parser
    const exercise = result.rows[0];
    console.log("exercise: ", exercise);
    console.log("exercise.mode: ", exercise.mode);
    
    const rootDir = process.cwd();
    const tempFolder = path.join(rootDir, 'temp');
    const destinationFolder = path.join(tempFolder, user);

    try {
        if (!await existFolder(destinationFolder)) {
            await executeScarbNew(user, tempFolder);
        }
        await replaceCode(destinationFolder, content);
        let log;
        if (exercise.mode === 'build') {
            log = await executeScarbBuild(destinationFolder);
        } else {
            log = await executeScarbTest(destinationFolder);
        }
        
        await pool.query("INSERT INTO Resolutions (user_name, exercise_id) VALUES ($1, $2)", [
            user, exercise_id
        ]);

        return res.status(200).json({ message: log });
    } catch (error) {
        return next(error);
    }
};

async function existFolder(folderName) {
    try {
        await accessAsync(folderName, fs.constants.F_OK);
        return true;
    } catch (err) {
        return false;
    }
}

async function executeScarbNew(folderName, tempFolder) {
    try {
        await util.promisify(exec)(`scarb new ${folderName}`, { cwd: tempFolder });
    } catch (error) {
        throw { statusCode: 500, message: 'Error executing scarb new' };
    }
}

async function replaceCode(destinationFolder, content) {
    const srcFolder = path.join(destinationFolder, 'src');
    const libCairoFile = path.join(srcFolder, 'lib.cairo');
    try {
        await writeFileAsync(libCairoFile, content);
    } catch (error) {
        throw { statusCode: 500, message: 'Error writing to file' };
    }
}

async function executeScarbBuild(destinationFolder) {
    try {
        const { stdout } = await util.promisify(exec)(`scarb build`, { cwd: destinationFolder });
        return stdout;
    } catch (error) {
        throw { statusCode: 500, message: error.stdout };
    }
}

async function executeScarbTest(destinationFolder) {
    try {
        const { stdout } = await util.promisify(exec)(`scarb test`, { cwd: destinationFolder });
        return stdout;
    } catch (error) {
        throw { statusCode: 500, message: error.stdout };
    }
}
