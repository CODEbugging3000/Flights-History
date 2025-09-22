import React from "react";
import Link from "next/link";
function notFound() {
  return (
    <div className=" flex flex-col gap-3 justify-center items-center">
      <h1 className="text-4xl font-semibold font-sora pt-2">
        Error 404 - Page Not found
      </h1>
      <Link href="/">
        <p className="text-blue-500 underline underline-offset-1"> Voltar para a tela inicial</p>
      </Link>
    </div>
  );
}

export default notFound;
