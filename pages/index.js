import MainLayout from '@thinxview/ui/layout/MainLayout';
import PublicLayout from '@thinxview/ui/layout/PublicLayout';
import { getSession } from 'next-auth/react';

const Home = (props) => {
  console.log('Has Sing In', props);

  return <div className={'d-flex'}>Go to Admin Panel</div>;
};

export default Home;

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
}
