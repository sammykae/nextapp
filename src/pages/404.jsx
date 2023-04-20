import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    const redirectInt = setTimeout(() => {
      router.push("/");
    }, [10000]);
    return () => {
      clearTimeout(redirectInt);
    };
  }, [router]);
  return (
    <>
      <Head>
        <title>Not Found</title>
        <meta name="description" content="This page does not exist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="not-found">
        <h1>Ooooops....</h1>
        <h2>This page does not exist</h2>
        <p>
          Go back to{" "}
          <Link className="back-home" href={"/"}>
            Homepage
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
