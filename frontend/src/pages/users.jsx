import { Box, Button } from "@mui/material";
// import { alignProperty } from "@mui/material/styles/cssUtils";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
// import { useState } from "react";
function Users() {
  // const [users, setUsers] = useState();
  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "firstName",
      headerName: "First Name",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "lastName",
      headerName: "Last Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "action",
      headerName: "Actions",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <Box>
          <Link to="/update" style={{ textDecoration: "none", color: "white" }}>
            <Button style={{ margin: 5 }} variant="contained" color="primary">
              Edit
            </Button>
          </Link>

          <Button
            style={{ margin: 5 }}
            variant="contained"
            color="error"
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];

 

  const handleDelete = (id) => {
    // Handle delete action here
    console.log("Delete user with ID:", id);
  };
  const rows = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Jane", lastName: "Smith" },
  ];

  return (
    <Box>
      <Link to="/create" style={{ textDecoration: "none", color: "white" }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ textTransform: "capitalize", mb: 1, width: "100%" }}
        >
          {" "}
          + Add{" "}
        </Button>
      </Link>
      <DataGrid
        rowHeight={60}
        sx={{
          height: 500,
          width: 900,
          borderRadius: 2,
          backgroundColor: "white",
        }}
        columns={columns}
        rows={rows}
      />
    </Box>
  );
}

export default Users;
