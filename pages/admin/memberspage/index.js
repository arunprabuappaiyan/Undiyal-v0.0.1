import React, { useMemo } from 'react';

import { getSession } from 'next-auth/react';

import MainLayout from '@thinxview/ui/layout/MainLayout';
import BreadCrumb from '@thinxview/ui/BreadCrumb';
import { Card, Col, Row } from 'reactstrap';
import MembersTable from '../../../thinxview/components/MembersTable';

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
              title: 'AdminHomePage',
              path: '/admin',
            },
            {
              title: 'MembersPage',
              path: null,
            },
          ]}
        />

        <section className="content">
          <div className="container">
            <MembersTable columns={columns} data={data} />
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
