import Image from "next/image";
import { Header } from "@components/Header_Login";
import { FormEvent } from 'react'
import { useRouter } from 'next/router'
import profile from "./profile";

export default function Login() {
  const router = useRouter()

  function handleSubmit(event) {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const fetchData = async () => {
    //console.log('All environment variables:Nuevo', process.env);
    //console.log('POSTGRES_URL:', process.env.POSTGRES_URL);
    try {
      console.log("Email:" + email + " Password:" + password);
      const result = await sql`SELECT * from users WHERE email = '`+ email + `' AND password = '` + password + "'";
      setRows(result.rows);
      console.log(result);
      alert("Welcome: "+email);
      router.push(profile);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
}

  return (
    <div className='layout'>
    <Header />
    <div className="flex flex-col items-center md:flex-row md:h-screen">
      <div className="flex items-center justify-center w-full md:w-1/2">
        <Image src="/login_chart.png" alt="Login Image" width={800} height={600} />
      </div>
      <div className="flex flex-col items-center justify-center w-full md:w-1/4">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-2xl font-bold">¡Bienvenido de vuelta!</h1>
            <p className="mt-2 text-gray-600">
              Por favor, inicia sesión.
            </p>
          </div>
          <form className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block font-bold text-gray-700">
                Correo Electrónico:
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block font-bold text-gray-700"
              >
                Contraseña:
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div>
            <button type="submit" className="btn btn--secondary" icon="material-symbols:arrow-forward-rounded" onClick={handleSubmit}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
}
