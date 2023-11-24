import axios from 'axios';
import { pool } from "../db.js";
import {
  URL_GITHUB_STARKLINGS
} from "../config.js";

export const getAllExercises = async (req, res, next) => {
  const result = await pool.query("SELECT * FROM exercises");
  return res.json(result.rows);
};

export const getExercise = async (req, res) => {
  const result = await pool.query("SELECT * FROM exercises WHERE id = $1", [
    req.params.id,
  ]);

  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "No Exercise exists with that id",
    });
  }

  // TODO: move to Parser
  const exercise = result.rows[0];
  let response;
  try {
    response = await axios.get(URL_GITHUB_STARKLINGS + exercise.path);
  } catch (error) {
    res.status(500).json({ error: 'Error al realizar la solicitud' });
  }

  let data = response.data.split('// I AM NOT DONE');
  let descriptionArray = data[0].split('\n');
  let codeArray = data[1].split('\n');

  let description = '';
  descriptionArray.forEach( (line, idx) => {
    if (idx > 0) {
      description += line + '\n';
    }
  });

  let code = '';
  codeArray.forEach( line => {
    code += line + '\n';
  });

  exercise.description = description;
  exercise.code = code;

  return res.json(exercise);
};