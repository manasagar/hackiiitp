import pg from 'pg';

export const db = new pg.Client({
    connectionString: "postgresql://adiboghawala:9U6fBwTbyqXG@ep-little-pond-a1pjwobh.ap-southeast-1.aws.neon.tech/NutriPlan?sslmode=require"
});

