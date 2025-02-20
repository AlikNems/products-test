import Cookies from "js-cookie";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@mui/material";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {

    Cookies.remove("token");
    navigate("/login");
  };

  return (
    <div className="header">
      {location.pathname === "/home" && (
        <>
          <h1>Welcome  Home!</h1>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleLogout}
            sx={{
              marginRight: 5,

              backgroundColor: "#8e8e8e",
              "&:hover": {
                backgroundColor: "#656363",
              },
            }}
          >
            Log out
          </Button>
        </>
      )}
    </div>
  );
};

export default Header;
