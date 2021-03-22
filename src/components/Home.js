import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import BlurOnIcon from "@material-ui/icons/BlurOn";
import { history } from "../helpers";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    fontFamily: "hl",
  },
  bannerImage: {
    height: "350px",
    marginTop: "15px",
    objectFit: "fill",
    backgroundPositionY: "-450px",
    backgroundRepeat: "no-repeat",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1456324463128-7ff6903988d8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80)",
  },
  banngerText: {
    width: "200px",
    margin: "auto",
    fontSize: "1.5rem",
    color: "white",
    fontWeight: "750",
    paddingTop: "70px",
    paddingLeft: "350px",
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
  cardRoot: {
    maxWidth: "350px",
    fontFamily: "Lato",
    position: "relative",
    minWidth: 275,
  },
  cardTitle: {
    fontFamily: "Lato",
    fontSize: "20px",
    position: "absolute",
    bottom: "0px",
    background: "#696364",
    width: "100%",
    color: "white",
    fontWeight: "350",
    padding: "5px 0",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  p30: {
    padding: 30,
  },
}));
function Home(props) {
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
            Walk with wise, Work with heart
          </Typography>
        </Grid>
        <Grid item sm={12}>
          <Typography
            style={{
              fontSize: "35px",
              wordSpacing: "10px",
              fontFamily: "Lato",
              fontWeight: "500",
              color: "#393430",
            }}
          >
            The crew
          </Typography>
          <Typography
            style={{
              fontFamily: "Lato",
              fontSize: "16px",
              margin: "auto",
              width: "50%",
              fontWeight: "400",
              color: "#36312d",
            }}
          >
            Pistosis is specialized in providing cost effective and high value
            IT Management and Business Solutions. We help our clients with the
            selection, installation and maintenance of their complete IT
            Infrastructure that runs their business
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
        <Grid sm={12} style={{ display: "flex", padding: "20px" }}>
          <Grid sm={5}>
            <Typography
              style={{
                fontSize: "35px",
                fontFamily: "Lato",
                fontWeight: "500",
                color: "#393430",
                fontStyle: "italic",
                margin: "auto",
                marginBottom: "10px",
              }}
            >
              Digital technology solutions
            </Typography>
            <Typography
              style={{
                fontFamily: "Lato",
                fontSize: "16px",
                margin: "auto",
                width: "90%",
                fontWeight: "300",
                textAlign: "justify",
                color: "#36312d",
              }}
            >
              Pistosis is specialized in providing cost effective and high value
              IT Management and Business Solutions. We help our clients with the
              selection, installation and maintenance of their complete IT
              Application Development and Infrastructure that runs their
              business.
            </Typography>
            <Button
              style={{
                marginTop: "20px",
                background: "#f50514",
                color: "white",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
              onClick={() => {
                history.push({
                  pathname: "/Services",
                });
              }}
            >
              Explore more solution
            </Button>
          </Grid>
          <Grid item sm={7} className={classes.root}>
            <Grid container>
              <Grid item sm={6}>
                <Card className={classes.cardRoot}>
                  <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  />
                  <Typography className={classes.cardTitle}>
                    Achieve Your Goals
                  </Typography>
                </Card>
              </Grid>
              <Grid item sm={6}>
                <Card className={classes.cardRoot}>
                  <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1582004531597-6407189db7dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  />
                  <Typography className={classes.cardTitle}>
                    Expert Guidance
                  </Typography>
                </Card>
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
        <Typography
          style={{
            fontSize: "35px",
            fontFamily: "Lato",
            fontWeight: "500",
            color: "#393430",
            fontStyle: "italic",
            margin: "auto",
            marginBottom: "10px",
            width: "100%",
          }}
        >
          We are expertise
        </Typography>
        <Grid item sm={12} style={{ display: "flex", padding: "20px" }}>
          <Grid
            item
            sm={4}
            style={{ marginRight: "10px", background: "#3a84ec" }}
          >
            <Card
              className={`${classes.cardRoot}  ${classes.p30}`}
              style={{ background: "#3a84ec" }}
            >
              <CardContent>
                <Typography
                  style={{
                    fontSize: "25px",
                    fontFamily: "Lato",
                    fontWeight: "500",
                    color: "#393430",
                    fontStyle: "italic",
                    margin: "auto",
                    width: "100%",
                    color: "white",
                  }}
                >
                  Web Technologies
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item sm={4} style={{ marginRight: "10px" }}>
            <Card
              className={`${classes.cardRoot}  ${classes.p30}`}
              style={{ background: "#ecae42" }}
            >
              <CardContent>
                <Typography
                  style={{
                    fontSize: "25px",
                    fontFamily: "Lato",
                    fontWeight: "500",
                    color: "#393430",
                    fontStyle: "italic",
                    margin: "auto",
                    width: "100%",
                    color: "white",
                  }}
                >
                  Cloud Computing
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item sm={4} style={{ marginRight: "10px" }}>
            <Card
              className={`${classes.cardRoot}  ${classes.p30}`}
              style={{ background: "#4c9141" }}
            >
              <CardContent>
                <Typography
                  style={{
                    fontSize: "25px",
                    fontFamily: "Lato",
                    fontWeight: "500",
                    color: "#393430",
                    fontStyle: "italic",
                    margin: "auto",
                    width: "100%",
                    color: "white",
                  }}
                >
                  Databases
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
