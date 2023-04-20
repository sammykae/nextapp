import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="navbar">
      <div className="logo">
        <Image src={"/logo.png"} alt="logo" width={70} height={65} />
      </div>
      <div className="links">
        <Link
          className={`link ${router.pathname === "/" ? "active" : ""}`}
          href={"/"}
        >
          Home
        </Link>

        <Link
          className={`link ${router.pathname === "/about" ? "active" : ""}`}
          href={"/about"}
        >
          About
        </Link>

        <Link
          className={`link ${router.pathname === "/ninja" ? "active" : ""}`}
          href={"/ninja"}
        >
          Ninja
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
