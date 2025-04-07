import React from "react";
import Layout from "../layout";
import { Hero, Portals } from "../components";

const Index = () => {
  return (
    <Layout hideApplication={true}>
      {/*  Hero section*/}
      <Hero />

      {/*    Portals section   */}
      <Portals />
    </Layout>
  );
};

export default Index;
