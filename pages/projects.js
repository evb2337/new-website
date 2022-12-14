import Head from "next/head";
import { Stripe, TopNav } from ".";

export default function Projects() {
  return (
    <div className="bg-[#C5aB8c] min-h-screen min-w-screen">
      <Head>
        <title>Ev Bennett</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-row w-screen min-h-screen">
        <div className="flex flex-1 flex-col">
          <TopNav selected="projects" />
          <div className="text-2xl text-center pt-28"></div>
          <div className="flex flex-col">
            <div className="flex flex-col lg:flex-row justify-center gap-10">
              <div className="flex flex-col items-center">
                <a href="/blog/3d-app-homepage">
                  <img className="h-48 lg:h-56 shadow-lg " src="daccord.png" alt="Product home page with top-nav and 3D model of app interface."/>
                  <h3 className="text-2xl text-center font-title">
                    3D App Homepage
                  </h3>
                </a>
              </div>
              <div className="flex flex-col items-center">
                <a href="/blog/diner-restaurant">
                  <img className="h-48 lg:h-56 shadow-lg " src="borger.png" alt="Project home page with top-nav and a large picture of a burger."/>
                  <h3 className="text-2xl text-center font-title">
                    Diner Restaurant Redesign
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Stripe />
      </div>
    </div>
  );
}
