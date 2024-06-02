/* eslint-disable no-unused-vars */
import { Box, Button, FormControl, FormGroup, TextField } from "@mui/material";
import "../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUsers() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  // Fetch user data based on the ID from the API
useEffect(() => {
  console.log("Fetching user data...");
  axios
    .get(`http://localhost:3000/users/${id}`)
    .then((res) => {

      console.log("User data fetched successfully:", res.data);
      const userData = res.data;
      setFirstName(userData.firstName);
      setLastName(userData.lastName);
    })
    .catch((err) => {
      console.log("Error fetching user data:", err);
    });
}, [id]);

  const submit = (e) => {
     e.preventDefault();

    // Check if first name is empty
    if (!firstName.trim()) {
      setFirstNameError(true);
      return;
    } else {
      setFirstNameError(false);
    }

    // Check if last name is empty
    if (!lastName.trim()) {
      setLastNameError(true);
      return;
    } else {
      setLastNameError(false);
    }

    // If all fields are filled, proceed with form submission
    axios
      .patch(`http://localhost:3000/users/${id}`, {
        firstName,
        lastName,
      })
      .then((res) => {
        console.log(res);
        toast.success("User updated successfully");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to update user");
      });
  };

  return (
    <>
      <ToastContainer position="bottom-center" />
      <Box
        sx={{
          backgroundColor: "white",
          pt: 10,
          pb: 10,
          pr: 10,
          pl: 10,
          borderRadius: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <p
          className="poppins-extrabold"
          style={{
            color: "purple",
            fontSize: 30,
          }}
        >
          {" "}
          Update User
        </p>

        <FormControl sx={{ width: "100%" }}>
          <FormGroup sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <TextField
              required
              id="standard-required"
              label="First Name"
              helperText={firstNameError ? "First Name is required" : ""}
              error={firstNameError}
              variant="filled"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                setFirstNameError(false); // Reset error when user types
              }}
            />
            <TextField
              required
              id="standard-required"
              label="Last Name"
              helperText={lastNameError ? "Last Name is required" : ""}
              error={lastNameError}
              variant="filled"
            
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                setLastNameError(false); // Reset error when user types
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ width: "100%" }}
              onClick={submit}
            >
              Update
            </Button>
          </FormGroup>
        </FormControl>
      </Box>
    </>
  );
}

export default UpdateUsers;
