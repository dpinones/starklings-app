import { pool } from "../db.js";

export const getGraduates = async (req, res, next) => {
  const result = await pool.query(
    "SELECT user_name FROM resolutions GROUP BY user_name HAVING COUNT(DISTINCT exercise_id) = 54;"
  );
  return res.json(result.rows);
};

export const checkGraduate = async (req, res, next) => {
  let userGithub = req.params.github?.match(/^\d/) ? "gh" + req.params.github : req.params.github;
  const result = await pool.query(
    "SELECT COUNT(DISTINCT exercise_id) = 54 AS has_54_exercises FROM resolutions WHERE user_name ILIKE $1;", [userGithub]
  );
  return res.json({
    "completed": result.rows[0].has_54_exercises
  });
};

