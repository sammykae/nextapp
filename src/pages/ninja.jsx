import Head from "next/head";
import stylesn from "@/styles/ninja.module.css";
import styles from "@/styles/page.module.css";
import Link from "next/link";

const ninja = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja</title>
        <meta name="description" content="This is the Ninja page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Ninja" />
        <meta property="og:description" content="This is the Ninja page" />
        <meta property="og:image" content={"/logo.png"} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Next app" />
      </Head>
      <div>
        <h1 className={styles.title}>Ninja Page</h1>
        <div>
          {ninjas?.map((nin) => (
            <div key={nin.id}>
              <Link href={`/ninja/${nin.id}`} className={stylesn.single}>
                <h3>{nin.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ninja;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};
