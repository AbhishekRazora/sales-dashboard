import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function SalesTable({ data, columns }) {
  const columnDefs = columns.map(col => ({ headerName: col, field: col.toLowerCase().replace(/ /g, '') }));
  
  const rowData = data.map(row => ({
    // ...row,
    productname:row.name,
    category:row.category,
    quantitysold:row.quantitySold,
    salesamount:row.salesAmount,
    date1sales:row.date1Sales,
    date2sales:row.date2Sales,
    difference: row.date2Sales - row.date1Sales
  }));

  return (
    <div className="ag-theme-alpine" style={{ height: 500, width: '100%' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        pagination={true}
        paginationPageSize={10}
        domLayout="autoHeight"
        // domLayout="normal"
      />
    </div>
  );
}

export default SalesTable;
