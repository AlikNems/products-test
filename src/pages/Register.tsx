import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { register, login } from "../api/auth";

const Register = () => {
 const [username, setUsername] = useState("");
 const [fullName, setFullName] = useState("");
 const [password, setPassword] = useState("");
 const [confirmPassword, setConfirmPassword] = useState("");

 const navigate = useNavigate();

 const handleRegister = async (e: React.FormEvent) => {
  e.preventDefault();
  if (password !== confirmPassword) {
   alert("Passwords do not match!");
   return;
  }

  try {
   await register(username, password, fullName);
   console.log("Registration successful!");

   await login(username, password);

   navigate("/home");
  } catch (error) {
   console.error("Registration error:", error);
   alert("Registration error");
  }
 };

 return (
  <div className="form-box">
   <Box
    sx={{
     display: "flex",
     flexDirection: "column",
     alignItems: "center",
     justifyContent: "center",
     minHeight: "100vh",
    }}
   >
    <Typography variant="h4" sx={{ marginBottom: "20px" }}>
     Register
    </Typography>
    <form
     onSubmit={handleRegister}
     style={{ width: "100%", maxWidth: "400px" }}
    >
     <TextField
      label="Username"
      type="text"
      fullWidth
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      sx={{
       marginBottom: "20px",
       ml: "1vw",
      }}
     />
     <TextField
      label="Full Name"
      type="text"
      fullWidth
      value={fullName}
      onChange={(e) => setFullName(e.target.value)}
      sx={{
       marginBottom: "20px",
       ml: "1vw",
      }}
     />
     <TextField
      label="Password"
      type="password"
      fullWidth
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      sx={{
       marginBottom: "20px",
       ml: "1vw",
      }}
     />
     <TextField
      label="Confirm Password"
      type="password"
      fullWidth
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      sx={{
       marginBottom: "20px",
       ml: "1vw",
      }}
     />
     <Button
      type="submit"
      variant="contained"
      fullWidth
      sx={{ marginBottom: "10px" }}
     >
      Register
     </Button>
     <div style={{ marginBottom: "10px", marginTop: "2px", fontSize: 16 }}>
      {" "}
      Already have an account?
     </div>
     <Button variant="outlined" fullWidth onClick={() => navigate("/login")}>
      Log In
     </Button>
    </form>
   </Box>
  </div>
 );
};

export default Register;
