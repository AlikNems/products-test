import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { login } from "../api/auth";

const Login = () => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState("");
 const navigate = useNavigate();
 const token = Cookies.get("token");

 useEffect(() => {
  if (!token) return;
  navigate("/home");
 }, [token]);

 const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError("");

  try {
   const data = await login(email, password);

   if (!data.token) {
    throw new Error("Token is missing in server response");
   }

   Cookies.set("token", data.token, { expires: 7, path: "/" });

   setTimeout(() => {
    navigate("/home");
   }, 500);
  } catch (error) {
   console.error("Login error:", error);
   setError("Login error. Please check your details and try again.");
  } finally {
   setLoading(false);
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
     Login
    </Typography>
    <form
     onSubmit={handleLogin}
     style={{
      width: "100%",
      maxWidth: "400px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
     }}
    >
     <TextField
      label="Email"
      type="email"
      fullWidth
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      sx={{
       marginBottom: "10px",
       height: "50px",
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
       marginBottom: "10px",
       height: "50px",
       ml: "1vw",
      }}
     />
     <Button
      type="submit"
      variant="contained"
      fullWidth
      sx={{
       marginBottom: "10px",
       height: "50px",
      }}
      disabled={loading}
     >
      {loading ? "Loading..." : "Log In"}
     </Button>

     {error && (
      <Typography color="error" sx={{ marginBottom: "10px", color: "darkRed" }}>
       {error}
      </Typography>
     )}

     <div style={{ marginBottom: "10px", marginTop: "2px", fontSize: 16 }}>
      {" "}
      Don't have an account?
     </div>
     <Button
      variant="outlined"
      fullWidth
      sx={{
       height: "50px",
      }}
      onClick={() => navigate("/register")}
     >
      Register
     </Button>
    </form>
   </Box>
  </div>
 );
};

export default Login;
