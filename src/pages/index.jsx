import Head from "next/head";
import styles from "@/styles/page.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [voices, setVoices] = useState([]);
  const [active, setActive] = useState(0);
  const [utter, setUtter] = useState("Hello, this is the first voice.");
  useEffect(() => {
    if ("speechSynthesis" in window) {
      const voices = speechSynthesis.getVoices();

      setVoices(
        voices?.filter((v) => v?.lang === "en-US" || v?.lang === "en-GB")
      );
    } else {
      console.log("The Web Speech API is not supported on this device.");
    }
  }, []);

  const handleSpeack = () => {
    const synth1 = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(utter);
    utterance.voice = voices[active];
    synth1.speak(utterance);
  };
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
        <select onChange={(e) => setActive(e.target.value)}>
          {voices?.map((v, i) => (
            <>
              <option key={i} value={i}>
                Speech {i + 1}
              </option>
            </>
          ))}
        </select>
        <br />
        <br />
        <button onClick={handleSpeack}>Speak</button>
      </div>
    </>
  );
}
