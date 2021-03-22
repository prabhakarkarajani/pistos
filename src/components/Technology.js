import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import BlurOnIcon from "@material-ui/icons/BlurOn";
import cloudComputingImg from "../images/cloucomputing.jpg";
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
      "url(https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80)",
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
}));
function Technology(props) {
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
            IT Management and Business Solutions
          </Typography>
        </Grid>
        <Grid item sm={12}>
          <Typography
            style={{
              fontSize: "25px",
              fontFamily: "Lato",
              fontWeight: "550",
              color: "#393430",
              textAlign: "left",
              marginLeft: "135px",
              fontStyle: "italic",
            }}
          >
            Technology
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
            Application Development and Infrastructure that runs their business.
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
          <Grid item sm={12} className={classes.root}>
            <Grid
              container
              direction="row"
              justify="center"
              style={{ width: "80%", margin: "auto" }}
            >
              <Grid item sm={5}>
                <img
                  src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item sm={7}>
                <Typography
                  style={{
                    fontSize: "20px",
                    fontFamily: "Lato",
                    fontWeight: "550",
                    color: "#393430",
                    textAlign: "left",
                    marginLeft: "135px",
                    fontStyle: "italic",
                  }}
                >
                  Web Technologies
                  <ul
                    style={{
                      fontSize: "16px",
                      fontFamily: "Lato",
                      fontWeight: "400",
                      color: "#393430",
                      textAlign: "left",
                      fontStyle: "italic",
                    }}
                  >
                    <li>MicroSoft.Net</li>
                    <li>ASP.NET 4.0</li>
                    <li>SQL Server 2012</li>
                    <li> C, C#,</li>
                    <li>HTML, CSS5</li>
                    <li>JavaScript, Ajax, Jquery, Reactjs, Angular, JSON</li>
                    <li>Telerik Reports</li>
                    <li>IIS 8.5, </li>
                    <li>webservices</li>
                    <li>AWS, cloud,AZURE,</li>
                    <li>Crystal Reporting</li>
                  </ul>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={12} className={classes.root}>
            <Grid
              container
              direction="row"
              justify="center"
              style={{ width: "80%", margin: "auto" }}
            >
              <Grid item sm={6}>
                <Typography
                  style={{
                    fontSize: "20px",
                    fontFamily: "Lato",
                    fontWeight: "550",
                    color: "#393430",
                    textAlign: "left",
                    fontStyle: "italic",
                  }}
                >
                  Cloud Computing
                  <ul
                    style={{
                      fontSize: "16px",
                      fontFamily: "Lato",
                      fontWeight: "400",
                      color: "#393430",
                      textAlign: "left",
                      fontStyle: "italic",
                    }}
                  >
                    <li>MicrosoftAzure</li>
                    <li>AWS</li>
                    <li>SalesForce</li>
                    <li>Microservices</li>
                    <li>Dockers</li>
                    <li>Kubernetes</li>
                  </ul>
                </Typography>
              </Grid>
              <Grid item sm={5}>
                <img src={cloudComputingImg} style={{ width: "100%" }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={12} className={classes.customDivider}>
          <BlurOnIcon className={classes.dividerIcon} />
          <BlurOnIcon className={classes.dividerIcon} />
          <BlurOnIcon className={classes.dividerIcon} />
          <BlurOnIcon className={classes.dividerIcon} />
          <BlurOnIcon className={classes.dividerIcon} />
          <BlurOnIcon className={classes.dividerIcon} />
        </Grid>
        <Grid item sm={12} className={classes.root}>
          <Grid
            container
            direction="row"
            justify="center"
            style={{ width: "80%", margin: "auto" }}
          >
            <Grid item sm={3}>
              <Typography
                style={{
                  fontSize: "20px",
                  fontFamily: "Lato",
                  fontWeight: "550",
                  color: "#393430",
                  textAlign: "left",
                  fontStyle: "italic",
                }}
              >
                Database
                <ul
                  style={{
                    fontSize: "16px",
                    fontFamily: "Lato",
                    fontWeight: "400",
                    color: "#393430",
                    textAlign: "left",
                    fontStyle: "italic",
                  }}
                >
                  <li>Oracle</li>
                  <li>Microsoft SQLServer</li>
                  <li>Mongo DB</li>
                  <li>Microservices</li>
                  <li>Microsoft Access</li>
                  <li>Cassandra</li>
                </ul>
              </Typography>
            </Grid>
            <Grid item sm={3}>
              <Typography
                style={{
                  fontSize: "20px",
                  fontFamily: "Lato",
                  fontWeight: "550",
                  color: "#393430",
                  textAlign: "left",
                  fontStyle: "italic",
                }}
              >
                Build, Deployment and Testing
                <ul
                  style={{
                    fontSize: "16px",
                    fontFamily: "Lato",
                    fontWeight: "400",
                    color: "#393430",
                    textAlign: "left",
                    fontStyle: "italic",
                  }}
                >
                  <li>GIT</li>
                  <li>Maven</li>
                  <li>Jenkins</li>
                  <li>Junit</li>
                  <li>REST assured</li>
                  <li>Jira</li>
                  <li>Selenium</li>
                </ul>
              </Typography>
            </Grid>
            <Grid item sm={3}>
              <Typography
                style={{
                  fontSize: "20px",
                  fontFamily: "Lato",
                  fontWeight: "550",
                  color: "#393430",
                  textAlign: "left",
                  fontStyle: "italic",
                }}
              >
                Operating Systems
                <ul
                  style={{
                    fontSize: "16px",
                    fontFamily: "Lato",
                    fontWeight: "400",
                    color: "#393430",
                    textAlign: "left",
                    fontStyle: "italic",
                  }}
                >
                  <li>Window</li>
                  <li>Mac</li>
                  <li>Linux</li>
                  <li>Android</li>
                </ul>
              </Typography>
            </Grid>

            <Grid item sm={3}>
              <Typography
                style={{
                  fontSize: "20px",
                  fontFamily: "Lato",
                  fontWeight: "550",
                  color: "#393430",
                  textAlign: "left",
                  fontStyle: "italic",
                }}
              >
                Project Management and SDLC
                <ul
                  style={{
                    fontSize: "16px",
                    fontFamily: "Lato",
                    fontWeight: "400",
                    color: "#393430",
                    textAlign: "left",
                    fontStyle: "italic",
                  }}
                >
                  <li>AGILE</li>
                  <li>JIRA</li>
                  <li>Scrum</li>
                  <li>Lean</li>
                  <li>Devops</li>
                  <li>TDD,FDD</li>
                  <li>PMP</li>
                  <li>Kanban</li>
                  <li>Microsoft Project Plan</li>
                </ul>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default Technology;
