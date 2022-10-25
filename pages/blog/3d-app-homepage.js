import Head from "next/head";
import { Stripe, TopNav } from "..";

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
          <div>
            <div className="text-3xl text-center pt-28 font-title ">
              3D App Homepage
            </div>
            <div className="flex flex-col gap-6 text-lg lg:text-xl py-8 px-10 lg:py-16 lg:px-36">
              <p>
                <a className="underline" href="https://csb-s3qqqy.vercel.app/">
                  My deployed project
                </a>
              </p>
              <p>
                I've spent the past six months learning Spline. My inital draw
                to the software was purely based on my love of art and interest
                to try new mediums. So I've spent most of the past months
                focused on creating 3D worlds, or should I say rooms? (You can
                check out an example of an interactive room of mine{" "}
                <a
                  className="underline"
                  href="https://my.spline.design/loft-efdfcb7d0cc4f5a5b955455f733e2dd2/"
                >
                  here.)
                </a>{" "}
                As I've learned more and more about how to use Spline and 3D art
                in general it has slowly crept into my web development journey.
                Always eager to give myself a reason to open Spline, I created
                this 3D App Homepage.
              </p>
              <p>
                The main visual focus of this website is the 3D Spline
                component. The use of slow moving, yet, brightly covered blobs
                in the background of the semi-transparent app UI conveys this
                theoretical product in an aesthetic way. Visual interest is
                maintained by the interactive 3D components. The component,
                which pivots foward, and images that glow on hover can give
                potential users a brief experience of this app. This is
                accompanied by minimal text and a thin italized font for the
                main statement which lets the 3D component take center stage.
                Part of the appeal of this website is how modern and up-to-date
                with the current design trends it is (like skeumorphism,
                gradients, and 3D assets).
              </p>
              <p>
                My project is based on{" "}
                <a
                  className="underline"
                  href="https://www.youtube.com/watch?v=EJxeMbDTkVI&t=283s"
                >
                  this tutorial.
                </a>{" "}
                My website certainly draws a bit from the original tutorial,
                mainly the layout and backdrop of the 3D component. However,
                I've recreated most of the images used in the Spline 3D
                component to show my own personal flair. I've also changed the
                fonts to better reflect my concept for the website.
              </p>
            </div>
          </div>
        </div>
        <Stripe />
      </div>
    </div>
  );
}
