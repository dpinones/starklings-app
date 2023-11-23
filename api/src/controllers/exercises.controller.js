import { pool } from "../db.js";

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

  return res.json(result.rows[0]);
};