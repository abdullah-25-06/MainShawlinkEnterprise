import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { TColumns, userRows } from "../../datatablesourceT";
import { Link } from "react-router-dom";
import { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



const DatatableT = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };


  return (
    <div className="datatable">
      <div className="datatableTitle">
        <Stack spacing={2} direction="row">

        <a href="/poppin"><Button variant="contained" style={{ color: "white", fontSize: "24px", backgroundColor: 'purple' }}>Clock Out</Button></a>

        </Stack>

      </div>
      <DataGrid
        className="datagrid"
        style={{ fontSize: "23px", color: "white", lineHeight: "150px" }}
        rows={data}
        columns={TColumns.concat()}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DatatableT;
