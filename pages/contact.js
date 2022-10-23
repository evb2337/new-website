import Head from "next/head";
import { Stripe, TopNav } from ".";

export default function Contact() {
  return (
    <div className="bg-[#C5aB8c] min-h-screen min-w-screen">
      <Head>
        <title>Ev Bennett</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-row w-screen min-h-screen">
        <div className="flex flex-1 flex-col">
          <TopNav selected="contact" />
          <div className="text-3xl text-center pt-28 font-title">
            <p>email: bennez2337@gmail.com</p>

            <p className="pt-16">
              twitter:{" "}
              <a href="https://twitter.com/EvBennett33" className="underline">
                @evbennett33
              </a>
            </p>
          </div>
        </div>
        <Stripe />
      </div>
    </div>
  );
}
