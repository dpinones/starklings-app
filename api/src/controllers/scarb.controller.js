import util from 'util';
import fs from "fs";
import { exec } from "child_process";
import path from "path";

const accessAsync = util.promisify(fs.access);
const writeFileAsync = util.promisify(fs.writeFile);

export const scarbTest = async (req, res, next) => {
}

export const scarbBuild = async (req, res, next) => {
    const {user, content } = req.body;
    console.log("user", user);
    
    const rootDir = process.cwd();
    const tempFolder = path.join(rootDir, 'temp');
    const destinationFolder = path.join(tempFolder, user);

    try {
        if (!await existFolder(destinationFolder)) {
            await executeScarbNew(user, tempFolder);
        }
        await replaceCode(destinationFolder, content);
        await executeScarbBuild(destinationFolder);
        return res.status(200).json({ message: "ok" });
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
        throw { statusCode: 404, message: "Error executing scarb new" };
    }
}

async function replaceCode(destinationFolder, content) {
    const srcFolder = path.join(destinationFolder, 'src');
    const libCairoFile = path.join(srcFolder, 'lib.cairo');
    try {
        await writeFileAsync(libCairoFile, content);
    } catch (error) {
        throw { statusCode: 404, message: "Error writing to file" };
    }
}

async function executeScarbBuild(destinationFolder) {
    try {
        await util.promisify(exec)(`scarb build`, { cwd: destinationFolder });
    } catch (error) {
        throw { statusCode: 404, message: error.stdout };
    }
}
