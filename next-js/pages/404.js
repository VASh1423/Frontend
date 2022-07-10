import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Heading from "../components/Heading";
import Head from "next/head";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text={"404"} />
    </>
  );
};

export default Error;
