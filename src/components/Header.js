import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Logo from "../Pistos.png";
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: "10px 20px 0",
    borderBottom: "1px solid #dbdbdb",
  },
  logo: {
    width: "100px",
  },
  slogan: {
    fontSize: "0.65rem",
    color: "#232121",
  },
  Header: {
    color: "#333",
    "& a": {
      color: "#000",
      padding: "10px 19px 20px",
      textDecoration: "none",
      letterSpacing: "-0.5px",
      borderBottom: "1px solid #dbdbdb",
      fontFamily: "Lato",
      "&:hover": {
        borderBottom: "2px solid #f50514",
      },
    },
  },
}));
function Header(props) {
  const classes = useStyles();
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(props.location.pathname);
  }, [props.location]);
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={classes.root}
    >
      <Grid item>
        <img src={Logo} className={classes.logo} alt="logo" />
        <Typography className={classes.slogan}>
          Walk with wise, work with heart
        </Typography>
      </Grid>
      <Grid item className={classes.Header}>
        <Link to="/" className={`${path === "/" ? "active" : ""}`}>
          Home
        </Link>
        <Link to="/About" className={`${path === "/About" ? "active" : ""}`}>
          Who we are
        </Link>
        <Link
          to="/Services"
          className={`${path === "/Services" ? "active" : ""}`}
        >
          IT Services
        </Link>
        <Link
          to="/Technology"
          className={`${path === "/Technology" ? "active" : ""}`}
        >
          Technology
        </Link>
        <Link
          to="/Careers"
          className={`${path === "/Careers" ? "active" : ""}`}
        >
          Careers
        </Link>
        <Link
          to="/Contact"
          className={`${path === "/Contact" ? "active" : ""}`}
        >
          Connect
        </Link>
      </Grid>
    </Grid>
  );
}

export default Header;
