import React, { useMemo } from 'react';

import { Columns } from '../../../../data/Columns';
import { Members } from '../../../../data/Members';

import MainLayout from '@thinxview/ui/layout/MainLayout';
import BreadCrumb from '@thinxview/ui/BreadCrumb';
import CommonTable from '../../../../thinxview/components/CommonTable';
import { getSession } from 'next-auth/react';

export default function Pending(params) {
  const columns = useMemo(() => [], []);
  const data = useMemo(() => [], []);

  return (
    <>
      <MainLayout>
        <BreadCrumb
          title={'Pending Payments'}
          urls={[
            {
              title: 'Admin',
              path: '/admin',
            },
            {
              title: 'Pending',
              path: null,
            },
          ]}
        />

        <section className="content">
          <div className="container">
            <CommonTable columns={columns} data={data} href={'#'} />
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
