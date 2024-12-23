import Layout from '@/Layout/Main.Layout';
import { About, Contact, Intro, Projects } from '@/components';

const Home = () => {
  return (
    <Layout>
      <Intro />
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default Home;
