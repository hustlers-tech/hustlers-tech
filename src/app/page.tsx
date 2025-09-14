import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="w-full flex flex-col gap-[10px] row-start-2 items-center sm:items-start">
        <h1 className="text-[90px] text-center w-full">Welcome to <span className="text-red-400">HustlersTech.com</span></h1>
        <p className="text-center w-full text-[40px] text-green-300">Launching Soon</p>
       </main>
    </div>
  );
}
