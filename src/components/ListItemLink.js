import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => {
  return createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.light,
    },
    iconHighlight: {
      color: theme.palette.secondary.light,
    },
  });
});

const ListItemLink = (props) => {
  const classes = useStyles();
  const { icon, primary, to } = props;
  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );
  return (
    <li className={`${window.location.pathname === to ? classes.root : ""}`}>
      <ListItem button component={renderLink}>
        {icon ? (
          <ListItemIcon
            className={`${
              window.location.pathname === to ? classes.iconHighlight : ""
            }`}
          >
            {icon}
          </ListItemIcon>
        ) : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
};
export default ListItemLink;
