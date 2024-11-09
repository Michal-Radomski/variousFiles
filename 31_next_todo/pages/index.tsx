import React from "react";

import Head from "next/head";

const HomeComponent = (): JSX.Element => {
  return (
    <React.Fragment>
      <Head>
        <title>Next App with Mongo Exercise</title>
        <meta name="description" content="Next App with Mongo Exercise" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>NextApp</main>
    </React.Fragment>
  );
};

export default HomeComponent;
