import React, { useMemo } from 'react';

import { Columns } from '../../../../thinxview/data/Columns';
import { Members } from '../../../../thinxview/data/Members';

import MainLayout from '@thinxview/ui/layout/MainLayout';
import BreadCrumb from '@thinxview/ui/BreadCrumb';
import CommonTable from '../../../../thinxview/components/CommonTable';
import { getSession } from 'next-auth/react';

export default function City() {
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => Members, []);

  return (
    <>
      <MainLayout>
        <BreadCrumb
          title={'Cities List'}
          urls={[
            {
              title: 'Admin',
              path: '/admin',
            },
            {
              title: 'City',
              path: null,
            },
          ]}
        />

        <section className="content">
          <div className="container">
            <CommonTable
              columns={columns}
              data={data}
              href={'/admin/master/city/create'}
            />
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
