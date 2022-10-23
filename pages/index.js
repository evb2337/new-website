import Head from "next/head";
import { Menu } from "@headlessui/react";
import Image from "next/image";

export function TopNavHamburger() {
  return (
    <Menu>
      <Menu.Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </Menu.Button>
      <Menu.Items className="absolute bg-[#C5aB8c]  text-2xl flex flex-col right-0 text-right pr-4">
        <Menu.Item>
          <a className={""} href="/blog">
            blog
          </a>
        </Menu.Item>
        <Menu.Item>
          <a className="" href="/projects">
            projects
          </a>
        </Menu.Item>
        <Menu.Item>
          <a className="" href="/contact">
            contact
          </a>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

export function TopNav(props) {
  const selected = props.selected;

  return (
    <div className="header flex ">
      <div className="title text-[100px] font-title mt-[5px] ml-[45px] lg:mt-[10px] lg:ml-[80px]">
        <a href="/"> ev </a>
      </div>

      <div className="spacer flex flex-grow"></div>

      <div className="flex top-nav font-title text-3xl pt-[80px] gap-32 ">
        <a
          id="blog"
          className={`top-nav-link title-text-shadow pr-[5px] hidden lg:block`}
          href="/blog"
        >
          {selected === "blog" ? <s>blog</s> : "blog"}
        </a>
        <a
          id="projects"
          className="top-nav-link title-text-shadow pr-[5px] hidden lg:block"
          href="/projects"
        >
          {selected === "projects" ? <s>projects</s> : "projects"}
        </a>
        <a
          id="contact"
          className="top-nav-link title-text-shadow  pr-[46px] hidden lg:block "
          href="/contact"
        >
          {selected === "contact" ? <s>contact</s> : "contact"}
        </a>
        <div className="lg:hidden pr-4 relative">
          <TopNavHamburger />
        </div>
      </div>
    </div>
  );
}

export function Stripe() {
  return (
    <div className="bg-[#A88170] w-[60px] lg:w-[200px] flex-shrink-0 flex-grow-0"></div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#C5aB8c] min-h-screen min-w-screen">
      <Head>
        <title>Ev Bennett</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-row w-screen min-h-screen">
        <div className="flex flex-1 flex-col">
          <TopNav />
          <div className="text-4xl text-center pt-28 font-title title-text-shadow">
            Hi!
          </div>
          <div className="text-2xl text-center pt-14 font-title">
            I'm Evelyn, a self-taught web developer with an interest in 3D
            interfaces.
          </div>
        </div>
        <Stripe />
      </div>
      <div></div>
    </div>
  );
}
