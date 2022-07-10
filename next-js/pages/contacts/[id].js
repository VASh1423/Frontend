import Head from "next/head";
import React from "react";
import ContactInfo from "../../components/ContactInfo";

export const getServerSideProps = async (context) => {
  const { id } = context.params
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { contact: data }
  }
}

const Contact = ({contact}) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ContactInfo contact={contact} />
    </>
  );
};

export default Contact;
