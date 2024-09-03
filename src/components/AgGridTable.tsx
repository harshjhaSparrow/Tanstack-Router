import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import { useState } from "react";
import { makeData } from "../utils/makeData";

const AgGridTable = () => {

  const [rowData] = useState(() => makeData(5000)); // Generate sample data
  const [columnDefs]: any = useState([
    { field: "firstName", sortable: true, filter: true },
    { field: "lastName", sortable: true, filter: true },
    {
      headerName: "Full Name",
      valueGetter: (params: any) =>
        `${params.data.firstName} ${params.data.lastName}`,
      sortable: true,
      filter: true,
    },
    { field: "age", sortable: true, filter: "agNumberColumnFilter" },
    { field: "visits", sortable: true, filter: "agNumberColumnFilter" },
    {
      field: "status",
      sortable: true,
      filter: "agSetColumnFilter",
      cellRenderer: (params: any) =>
        params.value.charAt(0).toUpperCase() + params.value.slice(1),
    },
    { field: "progress", sortable: true, filter: "agNumberColumnFilter" },
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: "80vh", width: "100%" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        pagination={true}
        paginationPageSize={20}
        rowSelection="single"
        suppressRowClickSelection={true}
        domLayout="autoHeight"
      />
    </div>
  );
};

export default AgGridTable;
