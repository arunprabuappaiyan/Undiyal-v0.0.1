import MainLayout from '@thinxview/ui/layout/MainLayout';
import BreadCrumb from '@thinxview/ui/BreadCrumb';
import SignUp from '@thinxview/ui/SignUp';

import { getSession } from 'next-auth/react';

export default function RegisterMember() {
  return (
    <>
      <MainLayout>
        <BreadCrumb
          title={'New Registration'}
          urls={[
            {
              title: 'Admin',
              path: '/admin',
            },
            {
              title: 'Members',
              path: '/admin/members',
            },
            {
              title: 'Register',
              path: null,
            },
          ]}
        />

        <section className="content text-sm">
          <div className="container-fluid">
            <SignUp />
          </div>
        </section>
      </MainLayout>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
