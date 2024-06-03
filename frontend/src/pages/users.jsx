/* eslint-disable no-unused-vars */
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  const columns = [
    {
      field: "_id",
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
          <Link
            to={`/update/${params.row._id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button style={{ margin: 5 }} variant="contained" color="primary">
              Edit
            </Button>
          </Link>

          <Button
            style={{ margin: 5 }}
            variant="contained"
            color="error"
            onClick={() => handleDelete(params.row._id)}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];

  const handleDelete = (id) => {
    // Send DELETE request to delete user with specified ID
    axios
      .delete(`https://mccrudhomework.onrender.com/users/${id}`)
      .then((response) => {
        // If successful, update the users state to reflect the changes
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  useEffect(() => {
    axios
      .get("https://mccrudhomework.onrender.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Link to="/create" style={{ textDecoration: "none", color: "white" }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ textTransform: "capitalize", mb: 1, width: "100%" }}
        >
          + Add{" "}
        </Button>
      </Link>
      <DataGrid
        rowHeight={60}
        sx={{
          height: 500,
          width: 800,
          borderRadius: 2,
          backgroundColor: "white",
        }}
        columns={columns}
        rows={users}
        getRowId={(row) => row._id}
      />
    </Box>
  );
}

export default Users;
