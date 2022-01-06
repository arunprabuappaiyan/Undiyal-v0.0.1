import React, { useMemo } from 'react';

import { getSession } from 'next-auth/react';

import MainLayout from '@thinxview/ui/layout/MainLayout';
import BreadCrumb from '@thinxview/ui/BreadCrumb';

import CommonTable from '../../../thinxview/components/CommonTable';

import { Columns } from '../../../thinxview/data/Columns';
import { Members } from '../../../thinxview/data/Members';

export default function MembersPage() {
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => Members, []);

  return (
    <>
      <MainLayout>
        <BreadCrumb
          title={'Members List'}
          urls={[
            {
              title: 'Admin',
              path: '/admin',
            },
            {
              title: 'Members',
              path: null,
            },
          ]}
        />

        <section className="content">
          <div className="container">
            <CommonTable
              columns={columns}
              data={data}
              href={'/admin/members/registermember'}
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
