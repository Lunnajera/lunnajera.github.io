import Image from "next/image";
import { Header } from "@components/Header_Login";
import { FormEvent } from 'react'
import { useRouter } from 'next/router'

export default function profile() {
console.log("Hello");

  return (
    <div className='layout'>
    <Header />
    <div className="flex flex-col items-center md:flex-row md:h-screen">
    <iframe title="Planner_V1.0 - copia ing" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=e9b572e4-9920-4bdd-acc7-bac08370ae76&autoAuth=true&ctid=3cbcc3d3-094d-4006-9849-0d11d61f484d" frameborder="0" allowFullScreen></iframe>
    </div>
  </div>
  );
}
