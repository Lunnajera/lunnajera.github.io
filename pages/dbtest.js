import { useEffect, useState } from 'react';
import { sql } from "@vercel/postgres";

export default function Cart({ params }) {
  const [rows, setRows] = useState(null);

  useEffect(() => {
    // Create an asynchronous function inside useEffect
    const fetchData = async () => {
      console.log('All environment variables:Nuevo', process.env);
      console.log('POSTGRES_URL:', process.env.POSTGRES_URL);
      try {
        const result = await sql`SELECT * from users`;
        setRows(result.rows);
      } catch (error) {
        //console.error("Error fetching data:", error);
        // Handle errors accordingly
      }
    };

    // Call the async function
    fetchData();
  }, []); // The empty dependency array ensures useEffect runs only once on mount

  // Ensure you have rows before mappings
  if (!rows) return <div>Loading...</div>; // Or a placeholder
  console.log(rows);

  return (
    <div>
        Hello world!
    </div>
  );
}
