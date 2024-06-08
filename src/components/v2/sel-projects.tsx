import React from "react";
import { StickyScroll } from "../stickyscroll";
import Image from "next/image";

const content = [
  {
    title: "QClose Inventory",
    description:
      "A feature-rich inventory website which combines cutting-edge inventory management, seamless point of sale integration, and convenient in-app chat functionality.",
    live: "https://qcloseinventory.com",
    img: "https://i.ibb.co/PGH3kt2/Screenshot-2023-12-13-at-21-08-57-QClose-Inventory.png",
    tools: [
      "https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg",
      "https://www.svgrepo.com/show/374118/tailwind.svg",
      "https://www.svgrepo.com/show/353729/fastify-icon.svg",
    ],
    content: (
      <div className="">
        <Image
          fill={true}
          className="h-full object-contain w-full"
          src="https://i.ibb.co/PGH3kt2/Screenshot-2023-12-13-at-21-08-57-QClose-Inventory.png"
          alt=""
        />
      </div>
    ),
  },
  {
    title: "LinkStack",
    description:
      "Stack your links in one place.",
    live: "",
    github: "https://github.com/kryptcode/linkstack",
    img: "https://i.ibb.co/QnpQ3m7/Screenshot-2024-06-08-at-10-22-57-Create-Next-App.png",
    tools: [
      "https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg",
      "https://www.svgrepo.com/show/374118/tailwind.svg",
      "https://www.svgrepo.com/show/353729/fastify-icon.svg",
    ],
    content: (
      <div className="">
        <Image
          fill={true}
          className="h-full object-contain w-full"
          src="https://i.ibb.co/QnpQ3m7/Screenshot-2024-06-08-at-10-22-57-Create-Next-App.png"
          alt=""
        />
      </div>
    ),
  },
  {
    title: "Panpie",
    description:
      "Multi-page website for pastry shop. lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
    img: "https://i.ibb.co/m8tVb5y/Screenshot-2023-12-13-at-21-52-58-Pan-Buddies-Home.png",
    github: "https://github.com/kryptcode/pizza-boys",
    live: "https://pizza-boys.vercel.app",
    content: (
      <div className="">
        <Image
          fill={true}
          className="h-full object-contain w-full"
          src="https://i.ibb.co/m8tVb5y/Screenshot-2023-12-13-at-21-52-58-Pan-Buddies-Home.png"
          alt=""
        />
      </div>
    ),
  },
  {
    title: "Kemi Portfolio",
    description: "Portfolio of a product manager and content writer.",
    img: "https://i.ibb.co/LhjjcJX/Screenshot-2023-12-29-at-09-22-11-Adekemi.png",
    github: "",
    live: "https://kemi-zeta.vercel.app",
    content: (
      <div className="">
        <Image
          fill={true}
          className="h-full object-contain w-full"
          src="https://i.ibb.co/LhjjcJX/Screenshot-2023-12-29-at-09-22-11-Adekemi.png"
          alt=""
        />
      </div>
    ),
  },
  {
    title: "MediVault EMR",
    description: " EMR for storing and managing patient data, ensuring robust, interoperable, and secure handling of healthcare information. ",
    img: "",
    github: "",
    live: "",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] font-grotesk flex items-center justify-center text-white">
        MediVaultEMR(In Production)
      </div>
    ),
  },
];

const SelProjects = () => {
  return (
    <div className="w-[90%] mx-auto font-grotesk group min-h-screen pb-24 ">
      <div className="flex items-center space-x-3  mb-16 ">
        <h3
          className={`text-[#d1bfa7] text-5xl lg:text-7xl font-bold flex-shrink-0`}
        >
          <span className="hidden md:inline">Selected</span>  Projects.
        </h3>
        <div
          className={`bg-[#d1bfa7] h-[3px] w-0 group-hover:w-full transition-all ease-linear duration-700`}
        />
      </div>

      <div className=" font-grotesk">
        <StickyScroll content={content} />
      </div>
    </div>
  );
};

export default SelProjects;
