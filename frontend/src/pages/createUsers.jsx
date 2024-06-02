import { Box, Button, TextField } from "@mui/material";
import "../App.css"
function CreateUsers() {
  return (
    <form>
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
          Add User
        </p>

        <TextField
          required
          id="standard-required"
          label="First Name"
          helperText="Required"
          variant="filled"
          sx={{ width: "300px" }}
        />
        <TextField
          required
          id="standard-required"
          label="Last Name"
          helperText="Required"
          variant="filled"
          sx={{ width: "300px" }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ width: "100%" }}
        >
          {" "}
          Add
        </Button>
      </Box>
    </form>
  );
}

export default CreateUsers