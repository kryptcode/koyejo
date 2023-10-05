import Left from "@/components/Left";
import Navbar from "@/components/Navbar";
import Right from "@/components/Right";
import Link from "next/link";
import { useState } from "react";


export default function Home() {
  return (
    <div className="h-screen w-screen flex ">
      <Left />
      <Right />
    </div>
  )
}
