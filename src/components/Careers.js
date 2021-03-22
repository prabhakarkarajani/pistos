import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "hl",
  },
  bannerImage: {
    height: "350px",
    // marginTop: "15px",
    objectFit: "fill",
    backgroundPositionY: "-450px",
    backgroundRepeat: "no-repeat",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1511984804822-e16ba72f5848?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80)",
  },
  banngerText: {
    margin: "auto",
    fontSize: "1.5rem",
    color: "white",
    fontWeight: "750",
    marginTop: "258px",
    fontStyle: "italic",
    fontFamily: "Lato",
    background: "rgba(0, 0, 0, 0.5)",
  },
  customDivider: {
    color: "#dbdbdb",
    margin: "20px 0",
  },
  dividerIcon: {
    fontSize: "3rem",
    margin: "0 10px",
  },
  table: {
    minWidth: 650,
  },
}));

function createData(name, experience, location) {
  return { name, experience, location };
}
const rows = [
  createData("Business Systems Analyst", "2-4 years", "Dallas, Texas"),
  createData(
    "Senior Software Developer (SSE)",
    "5-9 years",
    "New York, New York"
  ),
  createData(
    "Junior Software Developer (JSE)",
    "2-4 years",
    "Hyderabad, India"
  ),
  createData("Colud Architech", "8 Years or Above", "New York, New York"),
  createData("Network Engineer", "5 years", "Columbus, Ohio"),
];
function Careers(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          style={{ paddingTop: "20px", marginBottom: "10px" }}
          className={classes.bannerImage}
        >
          <Typography className={classes.banngerText}>Join Our Team</Typography>
        </Grid>
        <Grid item sm={12}>
          <Typography
            style={{
              fontFamily: "Lato",
              fontSize: "20px",
              margin: "auto",
              width: "80%",
              fontWeight: "350",
              color: "#36312d",
              fontStyle: "italic",
              marginBottom: "30px",
              textAlign: "justify",
            }}
          >
            pistosis provides a unique opportunity to participate in a
            world-class candidate experience. Their career page gives a look
            inside office life, benefits and employee activities.
          </Typography>
        </Grid>
        <Grid item sm={12}>
          <Typography
            style={{
              fontSize: "20px",
              fontFamily: "Lato",
              fontWeight: "550",
              color: "#393430",
              textAlign: "left",
              marginLeft: "135px",
              fontStyle: "italic",
              marginBottom: "20px",
            }}
          >
            Open positions
          </Typography>
          <TableContainer
            component={Paper}
            style={{
              margin: "auto",
              width: "80%",
            }}
          >
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b>Job Title</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>Experience</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>Location</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.experience}</TableCell>
                    <TableCell align="right">{row.location}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}
export default Careers;
