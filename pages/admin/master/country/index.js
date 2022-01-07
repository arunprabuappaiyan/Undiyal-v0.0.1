import React, { useMemo } from 'react';

import { Columns } from '../../../../thinxview/data/Columns';
import { Members } from '../../../../thinxview/data/Members';

import MainLayout from '@thinxview/ui/layout/MainLayout';
import BreadCrumb from '@thinxview/ui/BreadCrumb';

import { getSession } from 'next-auth/react';
import CommonTable from '../../../../thinxview/components/CommonTable';

export default function Country() {
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => Members, []);

  return (
    <>
      <MainLayout>
        <BreadCrumb
          title={'Countries List'}
          urls={[
            {
              title: 'Admin',
              path: '/admin',
            },
            {
              title: 'Country',
              path: null,
            },
          ]}
        />

        <section className="content">
          <div className="container">
            <CommonTable
              columns={columns}
              data={data}
              href={'/admin/master/country/create'}
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
