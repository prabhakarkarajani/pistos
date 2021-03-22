import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import BlurOnIcon from "@material-ui/icons/BlurOn";
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
      "url(https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1460&q=80)",
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
  cardRoot: {
    maxWidth: "350px",
    fontFamily: "Lato",
    position: "relative",
    minWidth: 275,
    marginBottom: "20px",
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
function Services(props) {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
    return () => {
      // cleanup;
    };
  }, []);
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
            About Our Business
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
            Solutions for Success
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
            Pistosis offers the comprehensive capabilities and deep industry
            knowledge necessary to help you solve the most complex issues of
            your organization. Since opening our doors in 2000, we’re proud to
            say that each year we have a bigger list of returning and new
            clients.
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
            Want to experience the expertise of pistosis for yourself? Give us a
            call today and let’s discuss what we can do for you
          </Typography>
          <Grid sm={12} className={classes.root}>
            <Grid
              container
              direction="row"
              justify="center"
              style={{ width: "80%", margin: "auto" }}
            >
              <Grid item sm={4}>
                <Card className={classes.cardRoot}>
                  <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1610097453820-0c3c8aac0202?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  />
                  <Typography className={classes.cardTitle}>
                    Software Development
                  </Typography>
                </Card>
              </Grid>
              <Grid item sm={4}>
                <Card className={classes.cardRoot}>
                  <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
                  />
                  <Typography className={classes.cardTitle}>
                    Security &amp; Infra Management
                  </Typography>
                </Card>
              </Grid>
              <Grid item sm={4}>
                <Card className={classes.cardRoot}>
                  <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1605907126332-53b63528ce99?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  />
                  <Typography className={classes.cardTitle}>
                    Cloud Computing
                  </Typography>
                </Card>
              </Grid>
              <Grid item sm={4}>
                <Card className={classes.cardRoot}>
                  <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  />
                  <Typography className={classes.cardTitle}>
                    Tech Support
                  </Typography>
                </Card>
              </Grid>
              <Grid item sm={4}>
                <Card className={classes.cardRoot}>
                  <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                  />
                  <Typography className={classes.cardTitle}>
                    Long-term Partnerships
                  </Typography>
                </Card>
              </Grid>
              <Grid item sm={4}>
                <Card className={classes.cardRoot}>
                  <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1573496130407-57329f01f769?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  />
                  <Typography className={classes.cardTitle}>
                    IT Talent Acquisition and Staffing
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid sm={12} className={classes.customDivider}>
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
              fontSize: "20px",
              fontFamily: "Lato",
              fontWeight: "550",
              color: "#393430",
              textAlign: "left",
              marginLeft: "135px",
              fontStyle: "italic",
            }}
          >
            Achieve Your Goals
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
            We examine what organizations are doing to stay relevant and
            competitive in this fast-paced world, and which ones are doing it
            best. We then strategize using smart tools and global resources in
            order to understand the implications of every choice our clients can
            make. Get in touch to learn more about how this service can help
            you.
          </Typography>

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
            Grow Your Business
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
            Looking to develop your business but not sure where to turn? Need
            help planning or executing your next project? Let us guide you. Any
            organization can move forward with small incremental changes, but
            building for the future in today’s rapidly evolving environment
            means taking bold chances and making insightful decisions
          </Typography>

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
            Expert Guidance
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
            With years of experience, our staff has the capabilities and
            expertise to take your business to the next level. At pistosis, we
            combine our insights and skills to transform your processes and
            strategies, and in turn, your company. We’re proud to help shape and
            improve how our clients structure and manage their business.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
export default Services;
