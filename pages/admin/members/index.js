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

export default function MembersPage() {
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
    ],
    []
  );
  const data = useMemo(
    () => [
      {
        id: 1,
        name: 'mfarndon0',
        email: 'mbalderston0@bbc.co.uk',
        mobileNumber: '129-279-2043',
        city: 'Nunutba',
        state: null,
        country: 'Indonesia',
        date: '17/04/1941',
      },
      {
        id: 2,
        name: 'dleidl1',
        email: 'lpaule1@oakley.com',
        mobileNumber: '987-363-8250',
        city: 'Yur’yev-Pol’skiy',
        state: null,
        country: 'Russia',
        date: '08/01/1923',
      },
      {
        id: 3,
        name: 'ngouny2',
        email: 'cmcfee2@mozilla.org',
        mobileNumber: '820-596-5095',
        city: 'Bayt ‘Adhāqah',
        state: null,
        country: 'Yemen',
        date: '10/09/1926',
      },
      {
        id: 4,
        name: 'nbreheny3',
        email: 'bsterley3@flavors.me',
        mobileNumber: '176-851-3964',
        city: 'Cieplice Śląskie Zdrój',
        state: null,
        country: 'Poland',
        date: '08/09/1966',
      },
      {
        id: 5,
        name: 'gacome4',
        email: 'dharsum4@edublogs.org',
        mobileNumber: '333-218-4097',
        city: 'Jonava',
        state: null,
        country: 'Lithuania',
        date: '03/11/1904',
      },
      {
        id: 6,
        name: 'reager5',
        email: 'aclashe5@baidu.com',
        mobileNumber: '612-521-4930',
        city: 'Ulyanovsk',
        state: null,
        country: 'Russia',
        date: '18/02/1944',
      },
      {
        id: 7,
        name: 'cledstone6',
        email: 'ogopsell6@utexas.edu',
        mobileNumber: '221-178-8470',
        city: 'Velenje',
        state: null,
        country: 'Slovenia',
        date: '14/08/1983',
      },
      {
        id: 8,
        name: 'tdeneve7',
        email: 'afarfoot7@nationalgeographic.com',
        mobileNumber: '555-688-6142',
        city: 'Sumbuya',
        state: null,
        country: 'Sierra Leone',
        date: '14/07/1920',
      },
      {
        id: 9,
        name: 'drowbottom8',
        email: 'gclericoates8@gnu.org',
        mobileNumber: '648-885-9663',
        city: 'Paris 17',
        state: 'A8',
        country: 'France',
        date: '21/12/2007',
      },
      {
        id: 10,
        name: 'dmoncrefe9',
        email: 'bdipietro9@forbes.com',
        mobileNumber: '465-490-3025',
        city: 'Stockholm',
        state: 'AB',
        country: 'Sweden',
        date: '18/06/1918',
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
