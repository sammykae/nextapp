import styles from "@/styles/page.module.css";
import Head from "next/head";
import Link from "next/link";
import { Suspense } from "react";
const NinjaDetails = ({ ninja }) => {
  return (
    <>
      <Head>
        <title>{ninja.username}</title>
        <meta name="description" content={`This page is about ${ninja.name}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={ninja.username} />
        <meta
          property="og:description"
          content={`This page is about ${ninja.name}`}
        />
        <meta property="og:image" content={"/logo.png"} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Next app" />
      </Head>
      <Suspense fallback={<div>Loading</div>}>
        <div>
          <h1 className={styles.title}>Ninja Details</h1>
          <Link className={styles.btn} href="/ninja">
            Back to Ninja page
          </Link>
          <div className={styles.body}>
            <h2>Name: {ninja.name}</h2>
            <p>Email: {ninja.email}</p>
            <p>Website: {ninja.website}</p>
            <p>Address: {ninja.address.city}</p>
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default NinjaDetails;

// export const getStaticPaths = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   const paths = data?.map((d) => {
//     return { params: { id: d?.id?.toString() } };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};
