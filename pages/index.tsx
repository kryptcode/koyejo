import Left from "@/components/Left";
import Navbar from "@/components/Navbar";
import Right from "@/components/Right";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import AnimatedCursor from "react-animated-cursor";


export default function Home() {
  return (
    <>
    <Head>
      <title>Koyejo | Dev</title>
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </Head>
    <AnimatedCursor
          innerSize={8}
          outerSize={35}
          color='255, 255, 255'
          outerAlpha={0.1}
          innerScale={1}
          outerScale={2}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link',
          ]}
          // hasBlendMode={true}
          innerStyle={{
            backgroundColor: '#111'
          }}
          outerStyle={{
            border: '3px solid #555'
          }}
        />
    <div className=" md:h-screen w-screen flex flex-col md:flex-row ">
      <Left />
      <Right />
    </div>
    </>
  )
}
