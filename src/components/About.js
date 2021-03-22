import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import BlurOnIcon from "@material-ui/icons/BlurOn";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "hl",
  },
  bannerImage: {
    height: "350px",
    objectFit: "fill",
    backgroundPositionY: "-450px",
    backgroundRepeat: "no-repeat",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)",
  },
  banngerText: {
    width: "200px",
    margin: "auto",
    fontSize: "1.5rem",
    color: "white",
    fontWeight: "750",
    paddingTop: "70px",
    paddingLeft: "140px",
    fontStyle: "italic",
    fontFamily: "Lato",
  },
  customDivider: {
    color: "#dbdbdb",
    margin: "20px 0",
  },
  dividerIcon: {
    fontSize: "3rem",
    margin: "0 10px",
  },
}));
function About(props) {
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
            PISTOS GLOBAL SOLUTIONS
          </Typography>
        </Grid>
        <Grid item sm={12}>
          <Typography
            style={{
              fontFamily: "Lato",
              fontSize: "16px",
              margin: "auto",
              width: "80%",
              fontWeight: "400",
              color: "#36312d",
              marginBottom: "30px",
              textAlign: "justify",
            }}
          >
            Pistosis exists to solve the critical issues facing our clients,
            both large and small. Our unique approach is not only what
            differentiates us, but also what makes us successful. We provide a
            broad range of services and solutions to help organizations
            facilitate change, achieve their vision and optimize performance and
            productivity.
          </Typography>

          <Typography
            style={{
              fontFamily: "Lato",
              fontSize: "16px",
              margin: "auto",
              width: "80%",
              fontWeight: "400",
              color: "#36312d",
              marginBottom: "30px",
              textAlign: "justify",
            }}
          >
            Established in 2013, Pistosis has maintained a strong reputation as
            an IT Solutions Provider and a Business Consulting Firm who can be
            depended upon to deliver rapid results for our clients.
          </Typography>

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
            This reputation has enabled us to build an enviable list of over 10+
            satisfied clients that includes some of the Top 100 companies in the
            country.
          </Typography>

          <Typography
            style={{
              fontFamily: "Lato",
              fontSize: "16px",
              margin: "auto",
              width: "80%",
              fontWeight: "400",
              color: "#36312d",
              marginBottom: "30px",
              textAlign: "justify",
            }}
          >
            All our Products and Services can be customized to meet diverse
            client requirements. We deliver efficiently and punctually thus
            enhancing client’s value and their IT investment return.
          </Typography>
        </Grid>

        <Grid item sm={12} className={classes.customDivider}>
          <BlurOnIcon className={classes.dividerIcon} />
          <BlurOnIcon className={classes.dividerIcon} />
          <BlurOnIcon className={classes.dividerIcon} />
          <BlurOnIcon className={classes.dividerIcon} />
          <BlurOnIcon className={classes.dividerIcon} />
          <BlurOnIcon className={classes.dividerIcon} />
        </Grid>

        <Grid item sm={12}>
          <Typography
            style={{
              fontFamily: "Lato",
              fontSize: "16px",
              margin: "auto",
              width: "80%",
              fontWeight: "400",
              color: "#36312d",
              marginBottom: "30px",
              textAlign: "justify",
            }}
          >
            Pistosis brings forward years of knowledge and experience and
            utilizes them to provide its clients with value-added benefits.
          </Typography>

          <Typography
            style={{
              fontFamily: "Lato",
              fontSize: "16px",
              margin: "auto",
              width: "80%",
              fontWeight: "400",
              color: "#36312d",
              marginBottom: "30px",
              textAlign: "justify",
            }}
          >
            Pistosis is specialized in providing cost effective and high value
            IT Management and Business Solutions. We help our clients with the
            selection, installation and maintenance of their complete IT
            Infrastructure that runs their business.
          </Typography>

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
            We have an experienced Technical and Management team, a sound
            financial base and the expertise and speed to help our clients
            achieve faster corporate growth.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
export default About;
