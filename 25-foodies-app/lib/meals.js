import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Sample just to show that await/async works in server components.

  // throw new Error('Loading meals failed');
  return db.prepare('SELECT * FROM meals').all();
}