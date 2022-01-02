import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Link href="/home">
      <a>Home</a>
    </Link>
  );
};

export default Home;
