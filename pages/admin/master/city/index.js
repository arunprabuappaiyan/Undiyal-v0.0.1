import React, { useMemo } from 'react';

import { Columns } from '../../../../data/Columns';
import { Members } from '../../../../data/Members';

import MainLayout from '@thinxview/ui/layout/MainLayout';
import BreadCrumb from '@thinxview/ui/BreadCrumb';
import CommonTable from '../../../../thinxview/components/CommonTable';
import { getSession } from 'next-auth/react';

export default function City({ data }) {
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
        Header: 'State Name',
        accessor: 'state',
      },
      {
        Header: 'City Name',
        accessor: 'city',
      },
    ],
    []
  );
  // const data = useMemo(
  //   () => [
  //     {
  //       id: 1,
  //       country: 'INDIA',
  //       statename: 'TamilNadu',
  //       cityname: 'Salem',
  //     },
  //     {
  //       id: 2,
  //       country: 'INDIA',
  //       statename: 'TamilNadu',
  //       cityname: 'Chennai',
  //     },
  //   ],
  //   []
  // );

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
  const response = await fetch('http://localhost:4000/members');
  const data = await response.json();

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
    props: {
      data,
    },
  };
}
