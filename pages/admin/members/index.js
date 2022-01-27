import React, { useMemo, useState } from 'react';
// import useSWR from 'swr';
import { getSession } from 'next-auth/react';

import MainLayout from '@thinxview/ui/layout/MainLayout';
import BreadCrumb from '@thinxview/ui/BreadCrumb';

import CommonTable from '../../../thinxview/components/CommonTable';

import { columns } from '../../../data/columns.json';
import { mockData } from '../../../data/mokeData.json';

// const Columns = (...args) => fetch(...args).then((res) => res.json());
// const MokeData = (...args) => fetch(...args).then((res) => res.json());

export default function MembersPage({ data }) {
  const column = useMemo(
    () => [
      {
        Header: 'Id',
        accessor: 'id',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Mobile Number',
        accessor: 'mobileNumber',
      },
      {
        Header: 'City',
        accessor: 'city',
      },
      {
        Header: 'State',
        accessor: 'state',
      },
      {
        Header: 'Country',
        accessor: 'country',
      },
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Action',
        accessor: 'action',
      },
    ],
    []
  );

  // const column = useSWR('/data/columns', Columns);
  // const data = useSWR('/data/mokeData', MokeData);

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
              columns={column}
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

// export async function getStaticProps() {
//   const res = await fetch('/data/columns');
//   const data = await res.json();
//   console.log(data);

//   return {
//     props: {
//       columns: data,
//     },
//   };
// }

// export async function getServerSideProps(context) {
//   const session = await getSession({ req: context.req });
//   if (!session) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// }
