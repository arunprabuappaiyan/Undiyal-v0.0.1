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

export default function MembersTable({ columns, data }) {
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
                <Link href="/admin/memberspage/registermember" passHref>
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
                  {headerGroups.map((headerGroup) => (
                    <tr key={''} {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th key={''} {...column.getHeaderProps()}>
                          {column.render('Header')}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {page.map((row) => {
                    prepareRow(row);
                    return (
                      <tr key={''} {...row.getRowProps()}>
                        {row.cells.map((cell) => (
                          <td key={''} {...cell.getCellProps()}>
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
