import React from 'react';
import Layout from 'components/layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      Hello.
      <br />
      <Link href="/?q=abc">
        <a>abc</a>
      </Link>
      <br />
      <Link href="/?q=123">
        <a>123</a>
      </Link>
      <br />
      <button id="primary-button" className="otherClass umami--click--primary-button" type="button">
        Button
      </button>
    </Layout>
  );
}