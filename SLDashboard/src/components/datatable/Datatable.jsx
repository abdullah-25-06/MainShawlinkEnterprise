import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import Poppin from "../loginform/Poppin";
import Poppin from "../Clockinform/Poppin";

const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };


  return (
    <div className="datatable">
      <div className="datatableTitle">
        <Stack spacing={2} direction="row">
          <br />
         <a href="/poppin"><Button  variant="contained" style={{ color: "white", fontSize: "24px", backgroundColor: 'purple' }}>Clock In</Button></a> 

        </Stack>

      </div>
      <DataGrid
        className="datagrid"
        style={{ fontSize: "23px", color: "white", lineHeight: "150px" }}
        rows={data}
        columns={userColumns.concat()}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div >
  );
};

export default Datatable;
