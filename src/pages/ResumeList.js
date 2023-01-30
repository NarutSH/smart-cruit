import { Box, Container, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getResumeList } from "../api/smartcruitAPI";
import TableComp from "../components/TableComp";

const ResumeList = () => {
  const [tableData, setTableData] = useState([]);

  const tableColumn = [
    {
      accessorKey: "resumeCode",
      id: "resumeCode",
      cell: (info) => info.getValue(),
      header: "resumeCode",
      sort: true,
    },
    {
      accessorKey: "candidateName",
      id: "candidateName",
      cell: (info) => info.getValue(),
      header: "CandidateName",
      sort: true,
    },
    {
      accessorKey: "email",
      id: "email",
      cell: (info) => info.getValue(),
      header: "email",
      sort: true,
    },
    {
      accessorKey: "phone",
      id: "phone",
      cell: (info) => info.getValue(),
      header: "phone",
      sort: true,
    },
    {
      accessorKey: "createdDateDisplay",
      id: "createdDateDisplay",
      cell: (info) => info.getValue(),
      header: "createdDateDisplay",
      sort: true,
    },
    {
      accessorKey: "createdName",
      id: "createdName",
      cell: (info) => info.getValue(),
      header: "createdName",
      sort: true,
    },
    {
      accessorKey: "updatedDateDisplay",
      id: "updatedDateDisplay",
      cell: (info) => info.getValue(),
      header: "updatedDateDisplay",
      sort: true,
    },
    {
      accessorKey: "updatedName",
      id: "updatedName",
      cell: (info) => info.getValue(),
      header: "updatedName",
      sort: true,
    },
  ];

  const getTableData = () => {
    getResumeList()
      .then((res) => {
        const list = res.resumeList.map((el) => {
          return {
            resumeCode: el.resumeCode,
            candidateName: el.candidateName,
            email: el.email,
            phone: el.phone,
            createdDateDisplay: el.createdDateDisplay,
            createdName: el.createdName,
            updatedDateDisplay: el.updatedDateDisplay,
            updatedName: el.updatedName,
          };
        });

        setTableData(list);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTableData();
  }, []);

  return (
    <Container maxWidth>
      <Paper elevation={3} sx={{ p: 3 }}>
        <TableComp columns={tableColumn} data={tableData} />
      </Paper>
    </Container>
  );
};

export default ResumeList;
