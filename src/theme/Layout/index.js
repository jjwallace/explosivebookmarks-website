import React from "react";
import Layout from "@theme-original/Layout";
import { Analytics } from "@vercel/analytics/react";

export default function CustomLayout(props) {
  console.log("ANALYTICS ONLINE");
  return (
    <>
      <Layout {...props} />
      <Analytics />
    </>
  );
}
