import React, { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import Pagination from "react-js-pagination";
import { Box } from "@mui/material";

const TableComp = ({ data, columns }) => {
  const [sorting, setSorting] = useState([]);

  const styles = {
    tableHeader: {
      //   border: "4px solid #06538A",
      //   background: "#E8ECF4",
      //   color: "#06538F",
    },
  };

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });

  const displayPaginationJs = (
    <Box display="flex" justifyContent="flex-end">
      <Pagination
        activePage={table.getState().pagination.pageIndex + 1}
        itemsCountPerPage={table.getState().pagination.pageSize}
        totalItemsCount={data.length}
        pageRangeDisplayed={5}
        onChange={(pageNumber) => table.setPageIndex(pageNumber - 1)}
        itemClass="page-item"
        linkClass="page-link"
        nextPageText="ถัดไป"
        prevPageText="ก่อนหน้า"
      />
    </Box>
  );

  //   const displaylimitResults = (
  //     <Box display="flex" alignItems="center">
  //       <span>แสดง</span>
  //       <select
  //         onChange={(e) => {
  //           table.setPageSize(Number(e.target.value));
  //         }}
  //         value={table.getState().pagination.pageSize}
  //         className="mx-2 form-select"
  //         style={{ width: "fit-content" }}
  //       >
  //         <option value={10}>10</option>
  //         <option value={20}>20</option>
  //         <option value={30}>30</option>
  //         <option value={40}>40</option>
  //         <option value={50}>50</option>
  //       </select>

  //       <span>แถว</span>
  //     </Box>
  //   );

  return (
    <div>
      {/* {displaylimitResults} */}
      <Box
        sx={{
          overflowX: "auto",
        }}
      >
        <table className="table">
          <thead style={styles.tableHeader}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id}>
                      {header.isPlaceholder ? null : (
                        <>
                          {header.column.columnDef.sort ? (
                            <div
                              {...{
                                className: header.column.getCanSort()
                                  ? "cursor-pointer select-none"
                                  : "",
                                onClick:
                                  header.column.getToggleSortingHandler(),
                              }}
                            >
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                              {{
                                asc: "⬆",
                                desc: "⬇",
                              }[header.column.getIsSorted()] ?? null}
                            </div>
                          ) : (
                            <div>
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                            </div>
                          )}
                        </>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} style={{ whiteSpace: "nowrap" }}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
      {displayPaginationJs}
    </div>
  );
};

export default TableComp;
