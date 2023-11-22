import { pool } from "../db.js";

export const getAllGroups = async (req, res, next) => {
  const result = await pool.query("SELECT * FROM groups");
  return res.json(result.rows);
};

export const getGroup = async (req, res) => {
  const result = await pool.query("SELECT * FROM groups WHERE id = $1", [
    req.params.id,
  ]);

  // if (result.rowCount === 0) {
  //   return res.status(404).json({
  //     message: "No existe un group con ese id",
  //   });
  // }

  return res.json(result.rows[0]);
};