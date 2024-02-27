import Image from "next/image";
import { Header } from "@components/Header_Login";
import { FormEvent } from 'react'
import { useRouter } from 'next/router'

export default function profile() {
console.log("Hello");

  return (
    <div className='layout'>
    <Header />
    <div className="flex flex-col items-center justify-center md:flex-row md:h-screen">
      <iframe title="Version1_0" width="1320" height="821.7" src="https://app.powerbi.com/view?r=eyJrIjoiNDFhZDZkYTQtZDJhMi00NjE2LTg2ZTAtN2UyMDYxMjk4N2VhIiwidCI6ImJlNjk2MDQzLWNkNmMtNDlmMy04MjA5LWU0N2NjOGE4YjVkMCIsImMiOjR9" frameborder="0" allowFullScreen></iframe>
    </div>
  </div>
  );
}
