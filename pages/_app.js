import "@/styles/globals.css";
import { Manrope } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';

const manrope = Manrope({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={manrope.className}>
        <Component {...pageProps} />
         <Analytics />
      </main>
    </>
  );
}
