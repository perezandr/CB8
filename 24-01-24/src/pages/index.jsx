import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Homepage.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.Homepage}`}>
        <h1>Pokemon!</h1>
        <Image
          src="https://images.unsplash.com/photo-1638613067237-b1127ef06c00?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background"
          width="1000"
          height="600"
        />
      </div>
    </>
  );
}
