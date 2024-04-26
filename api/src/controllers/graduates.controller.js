import { pool } from "../db.js";

export const getGraduates = async (req, res, next) => {
  const result = await pool.query(
    "SELECT user_name FROM resolutions GROUP BY user_name HAVING COUNT(DISTINCT exercise_id) = 54;"
  );
  return res.json(result.rows);
};
