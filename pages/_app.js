import "@/styles/globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={manrope.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
