import { useEffect, useState } from 'react';
import { sql } from "@vercel/postgres";

export default function Cart({ params }) {
  const [rows, setRows] = useState(null);

  useEffect(() => {
    // Create an asynchronous function inside useEffect
    const fetchData = async () => {
      const connectionString = process.env.POSTGRES_URL;
      console.log('POSTGRES_URL:', connectionString);
      try {
        const result = await sql`SELECT * from users`;
        setRows(result.rows);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors accordingly
      }
    };

    // Call the async function
    fetchData();
  }, []); // The empty dependency array ensures useEffect runs only once on mount

  // Ensure you have rows before mapping
  if (!rows) return <div>Loading...</div>; // Or a placeholder
  console.log(rows);

  return (
    <div>
        Hello world!
    </div>
  );
}
