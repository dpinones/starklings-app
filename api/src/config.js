export const PORT = process.env.PORT || 3000;

export const PG_PORT = process.env.PG_PORT || 5432;
export const PG_HOST = process.env.PG_HOST || "localhost";
export const PG_USER = process.env.PG_USER || "postgres";
export const PG_PASSWORD = process.env.PG_PASSWORD || "postgres";
export const PG_DATABASE = process.env.PG_DATABASE || "starklings-db";
export const PG_DATABASE_SSL = process.env.PG_DATABASE_SSL === `true`;

export const ORIGIN = process.env.ORIGIN || "http://localhost:5173";

export const URL_GITHUB_STARKLINGS = process.env.URL_GITHUB_STARKLINGS;