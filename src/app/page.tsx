import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex bg-black text-white justify-center items-center">
      <div className="w-1/2">
        <div className="h-[60vh] w-full bg-morph p-5">
        <h4 className="font-inter font-medium text-2xl mb-3">Hi, I'm</h4>
        <h2 className="font-grotesk text-6xl font-bold mb-7">Koye</h2>
        <p className="font-medium opacity-70 mb-7">
          A web developer and software engineer passionate about crafting elegant solutions with cutting-edge technology. I strive to deliver high-quality, scalable, and user-friendly web applications that exceed client expectations
        </p>
        <div className="flex flex-wrap items-center justify-center space-x-7">
          {/* <div className="hover:scale-105 transition-all ease-linear duration-300">Experience</div> */}
          <Link href="/" className="">Experience</Link>
          <div>Projects</div>
          <div>Stack</div>
          <div>About Me</div>
          <div>Contact</div>
        </div>
        </div>
      </div>
    </main>
  );
}
