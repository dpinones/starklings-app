import { pool } from "../db.js";

export const getAllGroups = async (req, res, next) => {
  const result = [];
  const resultGroups = await pool.query("SELECT * FROM groups");
  const resultExercises = await pool.query("SELECT * FROM exercises");

  resultGroups.rows.forEach(group => {

    let groupRet = {};
    groupRet.id = group.id;
    groupRet.label = group.label; 
    groupRet.exercises = [];

    resultExercises.rows.forEach(exercise => {
      if (group.id === exercise.exercise_group) {
        let exerciseRet = {};
        exerciseRet.name = exercise.name;
        exerciseRet.path = exercise.path;
        exerciseRet.mode = exercise.mode;
        groupRet.exercises.push(exerciseRet);
      }
    });
    result.push(groupRet);
  });

  return res.json(result);
};

export const getGroup = async (req, res) => {
  let result = {};
  const resultGroup = await pool.query("SELECT * FROM groups WHERE id = $1", [
    req.params.id,
  ]);
  
  if (resultGroup.rowCount === 0) {
    return res.status(404).json({
      message: "No group exists with that id",
    });
  }

  const resultExercises = await pool.query("SELECT * FROM exercises WHERE exercise_group = $1", [
    req.params.id
  ]);

  result.id = resultGroup.rows[0].id; 
  result.label = resultGroup.rows[0].label;
  result.exercises = [];
  resultExercises.rows.forEach(exercise => {
    let exerciseRet = {};
    exerciseRet.name = exercise.name;
    exerciseRet.path = exercise.path;
    exerciseRet.mode = exercise.mode;
    result.exercises.push(exerciseRet);
  });

  return res.json(result);
};