import { sql } from "@vercel/postgres";

export default async function Cart({ params }) {
  // Fetch data within an `async` function
  const { rows } = await sql`SELECT * from users`;

  // Ensure you have rows before mapping
  if (!rows) return <div>Loading...</div>; // Or a placeholder

  return (
    <div>
        console
    </div>
  );
}
