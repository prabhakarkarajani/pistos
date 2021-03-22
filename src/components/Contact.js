import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "hl",
  },
  bannerImage: {
    height: "350px",
    // marginTop: "15px",
    objectFit: "fill",
    backgroundPositionY: "-1100px",
    backgroundRepeat: "no-repeat",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1553&q=80)",
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
}));
function Contact(props) {
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
          <Typography className={classes.banngerText}>
            Find out what we can do for you
          </Typography>
        </Grid>
        <Grid item sm={12}>
          <Grid item sm={12} className={classes.root}>
            <Grid
              container
              direction="row"
              justify="center"
              style={{ width: "80%", margin: "auto" }}
            >
              <Grid item sm={7}>
                <Typography
                  style={{
                    fontSize: "16px",
                    fontFamily: "Lato",
                    fontWeight: "500",
                    color: "#393430",
                    fontStyle: "italic",
                  }}
                >
                  Address
                </Typography>
                <ul
                  style={{
                    fontSize: "16px",
                    fontFamily: "Lato",
                    fontWeight: "400",
                    color: "#393430",
                    fontStyle: "italic",
                    listStyle: "none",
                    textAlign: "center",
                    letterSpacing: "2px",
                  }}
                >
                  <li
                    style={{
                      fontSize: "16px",
                      fontFamily: "Lato",
                      fontWeight: "400",
                      color: "#f50514",
                      fontStyle: "italic",
                      listStyle: "none",
                    }}
                  >
                    PISTOS IT SERVICES LLC,
                  </li>
                  <li
                    style={{
                      fontSize: "16px",
                      fontFamily: "Lato",
                      fontWeight: "400",
                      fontStyle: "italic",
                      listStyle: "none",
                      letterSpacing: "2px",
                    }}
                  >
                    5232 Sherwood way,
                  </li>
                  <li
                    style={{
                      fontSize: "16px",
                      fontFamily: "Lato",
                      fontWeight: "400",
                      fontStyle: "italic",
                      listStyle: "none",
                      letterSpacing: "2px",
                    }}
                  >
                    Cumming, GA, 30040.
                  </li>
                  <li
                    style={{
                      fontSize: "16px",
                      fontFamily: "Lato",
                      fontWeight: "400",
                      fontStyle: "italic",
                      listStyle: "none",
                      marginTop: "30px",
                      letterSpacing: "2px",
                    }}
                  >
                    {" "}
                    Email: info@pistosis.com
                  </li>
                  <li
                    style={{
                      fontSize: "16px",
                      fontFamily: "Lato",
                      fontWeight: "400",
                      fontStyle: "italic",
                      listStyle: "none",
                      letterSpacing: "2px",
                    }}
                  >
                    Contact: 785-250-3432,
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default Contact;
