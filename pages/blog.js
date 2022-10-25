import Head from "next/head";
import { Stripe, TopNav } from ".";

export default function Blog() {
  return (
    <div className="bg-[#C5aB8c] min-h-screen min-w-screen">
      <Head>
        <title>Ev Bennett</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-row w-screen min-h-screen">
        <div className="flex flex-1 flex-col">
          <TopNav selected="blog" />
          {/* <div className="text-2xl text-center pt-28">title</div> */}
          <div className="flex flex-col p-5 gap-5 lg:pt-28 lg:font-title">
            <div className="border-solid border-4 blog-style text-xl lg:text-2xl hover:bg-[#A88170]">
              <a className="block p-2 lg:p-10 " href="./blog/3d-app-homepage">3D App Homepage</a>
            </div>
            <div className="border-solid border-4 blog-style text-xl lg:text-2xl hover:bg-[#A88170]">
              <a className="block p-2 lg:p-10 " href="./blog/diner-restaurant">Redesigning a Popular Diner Website</a>
            </div>
          </div>
        </div>
        <Stripe />
      </div>
    </div>
  );
}
