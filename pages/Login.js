import Image from "next/image";
import { Header } from "@components/Header_Login";
import { FormEvent } from 'react'
import { useRouter } from 'next/router'
import profile from "./profile";
import { sql } from "@vercel/postgres";
import { useEffect, useState } from 'react';

export default function Login() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const pass = formData.get("password");
    if(email == "guest@dataset.mx" && pass == "Dtstmx?12")
    {
      router.push('/profile')
    }
    else
    {
      alert("User or password is not correct!!");
    }
  };

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
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block font-bold text-gray-700">
                Correo Electrónico:
              </label>
              <input
                id="email"
                type="email"
                name="email"
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
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div>
            <button type="submit" className="btn btn--secondary" icon="material-symbols:arrow-forward-rounded">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
}
