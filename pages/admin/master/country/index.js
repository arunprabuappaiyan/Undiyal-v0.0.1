import React, { useMemo } from 'react';

import { Columns } from '../../../../data/Columns';
import { Members } from '../../../../data/Members';

import MainLayout from '@thinxview/ui/layout/MainLayout';
import BreadCrumb from '@thinxview/ui/BreadCrumb';

import { getSession } from 'next-auth/react';
import CommonTable from '../../../../thinxview/components/CommonTable';

export default function Country() {
  const columns = useMemo(
    () => [
      {
        Header: 'Id',
        accessor: 'id',
      },
      {
        Header: 'Country Name',
        accessor: 'country',
      },
      {
        Header: 'Country Code',
        accessor: 'countrycode',
      },
      {
        Header: 'Phone Code',
        accessor: 'phonecode',
      },
    ],
    []
  );
  const data = useMemo(
    () => [
      {
        id: 1,
        country: 'INDIA',
        countrycode: 'IND',
        phonecode: '+91',
      },
      {
        id: 2,
        country: 'Germany',
        countrycode: 'GER',
        phonecode: '+123',
      },
    ],
    []
  );

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
