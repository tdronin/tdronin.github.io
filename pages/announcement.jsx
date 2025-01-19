import React from "react";
import Head from "next/head";
import { BLOG_NAME } from "../lib/constants";
import Layout from "../components/Layout/Layout";
import Container from "../components/Layout/Container";
import PageHeading from "../components/PageHeading";

const Announcement = () => {
  // Prefilled JotForm URL
  const jotFormUrl = "https://form.jotform.com/250176064158153/prefill/678c408c303361bd72a3d945f657";

  return (
    <Layout>
      <Head>
        <title>{`Announcement | ${BLOG_NAME}`}</title>
      </Head>
      <Container>
        <PageHeading>🚀 Announcement</PageHeading>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Lunect Holdings has secured a <strong>Letter of Intent</strong> to acquire a
          leading engineering and design firm specializing in laminated wood outdoor structures.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
          If you are interested in learning more, please sign our NDA using the form below.
        </p>

        {/* JotForm Embed */}
        <div className="mt-6">
          <iframe
            src={jotFormUrl}
            width="100%"
            height="800px"
            frameBorder="0"
          ></iframe>
        </div>
      </Container>
    </Layout>
  );
};

export default Announcement;
