import React from 'react';
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import {
  Button,
  Table,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Row,
  Col,
  Card,
} from 'reactstrap';
import GlobalFilter from './GlobalFilter';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CommonTable({ columns, data, href }) {
  const router = useRouter();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );

  const { pageIndex, globalFilter } = state;

  return (
    <>
      <Row>
        <Col sm="12">
          <Card style={{ height: 580 }}>
            <CardHeader>
              <CardTitle>
                <Link href={href} passHref>
                  <Button size="sm" outline>
                    Create
                  </Button>
                </Link>
              </CardTitle>
              <div className="card-tools">
                <GlobalFilter
                  filter={globalFilter}
                  setFilter={setGlobalFilter}
                />
              </div>
            </CardHeader>

            <CardBody className="table-responsive p-0">
              <Table
                {...getTableProps()}
                className="table-head-fixed text-nowrap table-hover"
              >
                <thead>
                  {headerGroups.map((headerGroup, i) => (
                    <tr key={i} {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column, k) => (
                        <th key={k} {...column.getHeaderProps()}>
                          {column.render('Header')}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {page.map((row, index) => {
                    prepareRow(row);
                    return (
                      <tr
                        key={index}
                        {...row.getRowProps()}
                        onClick={() => {
                          router.push(
                            `${router.pathname}/id=${row.values.id}`,
                            undefined,
                            {
                              shallow: true,
                            }
                          );
                        }}
                      >
                        {row.cells.map((cell, j) => (
                          <td key={j} {...cell.getCellProps()}>
                            {cell.render('Cell')}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </CardBody>

            <CardFooter>
              <div className="d-flex d-grid gap-2 justify-content-end">
                <span className="my-3">
                  Page{' '}
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>{' '}
                </span>

                <Button
                  color="primary"
                  className="my-2"
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  Previous
                </Button>
                <Button
                  color="primary"
                  className="my-2"
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                >
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </>
  );
}
