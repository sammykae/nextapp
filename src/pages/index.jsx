import Head from "next/head";
import styles from "@/styles/page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="This is the Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Home" />
        <meta property="og:description" content="This is the Home page" />
        <meta property="og:image" content={"/logo.png"} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Next app" />
      </Head>

      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Link className={styles.btn} href={"ninja"}>
          Ninjas Page
        </Link>
      </div>
    </>
  );
}
