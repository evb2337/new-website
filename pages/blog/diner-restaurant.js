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
              Redesigning a Popular Diner Website
            </div>
            <div className="flex flex-col gap-6 text-lg lg:text-xl py-8 px-10 lg:py-16 lg:px-36">
              <p>
                <a className="underline" href="https://www.valleydairy.net/">
                  Original
                </a>
              </p>
              <p>
                <a
                  className="underline"
                  href="https://diner-website.vercel.app/"
                >
                  Redesign
                </a>
              </p>
              <p>
                I was recently on the{" "}
                <a className="underline" href="https://www.valleydairy.net/">
                  website
                </a>{" "}
                of a nearby diner called Valley Dairy, but I noticed that the
                website was really difficult to navigate and find the
                information that I was looking for, like the hours and the menu.
                I'm self-learning web development and I decided it would be a
                good project to redesign and build a cleaner version of the
                website.
              </p>
              <p>
                The original diner website is quite overwhelming with lots of
                inconsistent usage of colors, fonts, and distracting graphics.
                The website also contains animations that lead to overlapping
                text and images. The hours and menu, which is the most important
                information, are very difficult to find as they're lost in a sea
                of menu items.
              </p>
              <p>
                My{" "}
                <a
                  className="underline"
                  href="https://diner-website.vercel.app/"
                >
                  redesign
                </a>{" "}
                aimed to solve the aforementioned issues by reducing visual
                noise. The first big change was to clear out most of the top
                nav-bar, so the ten original items got narrowed down to the five
                most important: the hours, menu, locations, order, and about
                pages. The items that I removed from the top nav-bar were
                relocated to the footer. Now, these less frequently used items
                are still accessible without being distracting. I also made sure
                to use a consistent set of colors and fonts and removed the
                animations which were distracting. The menu page of the original
                website also used links that looked more like static imagery. I
                replaced these with links that look clickable and provide
                traditional visual feedback on hover like underlining.
              </p>
            </div>
          </div>
        </div>
        <Stripe />
      </div>
    </div>
  );
}
