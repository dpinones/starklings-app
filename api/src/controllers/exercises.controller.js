import fs from 'fs';
import util from 'util';

const readFileAsync = util.promisify(fs.readFile);

export const getAllExercises = async (req, res, next) => {
  let diccionario = {};

  diccionario["intro1"] = {
    id: "intro1",
    name: "Intro 1",
    path: "exercises/intro/intro1.cairo",
    mode: "run",
    exercise_group: "intro",
    exercise_order: 1,
    description: "",
    hint: "No hints this time ;)"
  };
  diccionario["intro2"] = {
    id: "intro2",
    name: "Intro 2",
    path: "exercises/intro/intro2.cairo",
    mode: "run",
    exercise_group: "intro",
    exercise_order: 2,
    description: "",
    hint: "No hints this time ;)"
  };

  let result = [];

  for (let clave in diccionario) {
    if (diccionario.hasOwnProperty(clave)) {
      result.push(diccionario[clave]);
    }
  }
  return res.json(result);
};

export const getExercise = async (req, res) => {
  let diccionario = {};

  diccionario["intro1"] = {
    id: "intro1",
    name: "Intro 1",
    path: "exercises/intro/intro1.cairo",
    mode: "run",
    exercise_group: "intro",
    exercise_order: 1,
    description: "",
    hint: "No hints this time ;)"
  };

  if (!diccionario.hasOwnProperty(req.params.id)) {
    res.status(500).json({ error: 'Error al realizar la solicitud' });
  }

  const exercise = diccionario[req.params.id];
  try {
      exercise.code = await readFileAsync(exercise.path, 'utf8');
  } catch (error) {
      throw { statusCode: 500, message: 'Error al leer el archivo' };
  }

  exercise.prev_exercise = "None";
  exercise.next_exercise = "None";
  return res.json(exercise);
};

export const getHint = async (req, res) => {
  let diccionario = {};

  diccionario["intro1"] = {
    id: "intro1",
    name: "Intro 1",
    path: "exercises/intro/intro1.cairo",
    mode: "run",
    exercise_group: "intro",
    exercise_order: 1,
    description: "",
    hint: "No hints this time ;)"
  };

  if (!diccionario.hasOwnProperty(req.params.id)) {
    res.status(500).json({ error: 'Error al realizar la solicitud' });
  }
  
  const exercise = diccionario[req.params.id];

  return res.json({ hints: exercise.hint });
};