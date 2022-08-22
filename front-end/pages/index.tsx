import type { NextPage } from "next";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout logo profile quickMenu>
      <div>
        <p> I'm Home</p>
      </div>
    </Layout>
  );
};

export default Home;
