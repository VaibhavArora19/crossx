import Head from 'next/head';

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>CrossX</title>
        <meta
          name='description'
          content='multichain deployer'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <div>
        <p>Hello there</p>
      </div>
    </>
  );
};

export default LandingPage;
