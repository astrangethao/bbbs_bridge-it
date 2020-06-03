import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import LogOutButton from "../../components/LogOutButton/LogOutButton";

import {
  Button,
  Container,
  Paper,
  withStyles,
  createStyles,
} from "@material-ui/core";

const customStyles = (theme) =>
  createStyles({
    paper: {
      maxWidth: "45%",
      backgroundColor: "black",
      color: "white",
      padding: "4%",
      margin: "4%",
    },
    btn: {
      backgroundColor: "green",
      color: "#fff",
      margin: "5.5%",
      fontFamily: "Trebuchet",
      "&:hover": {
        background: "red",
      },
    },
    font: {
      fontFamily: "Trebuchet",
    },
  });

class AdminPage extends Component {
  state = {
    username: "",
    password: "",
  };

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };
  componentDidUpdate() {
    if (this.props.store.resetReducer) {
      this.props.dispatch({ type: "CLEAR_RESET" });
    }
  }

  // Need to RESET USER with USERNAME AND PASSWORD RESET!!
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.roots}>
        <center>
          <Paper className={classes.paper}>
            <Container>
              <h1 className={classes.font}>Admin</h1>
              <div>
                <label htmlFor="username" className={classes.font}>
                  Username:
                  <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChangeFor("username")}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="password">
                  Password:
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChangeFor("password")}
                  />
                </label>
              </div>
              <div>
                <Button
                  className={classes.btn}
                  type="submit"
                  name="submit"
                  value="Reset User"
                  onClick={() => {
                    this.props.dispatch({
                      type: "RESET_PASSWORD",
                      payload: {
                        ...this.props.match.params,
                        newUsername: this.state.username,
                        newPassword: this.state.password,
                      },
                    });
                  }}
                >
                  Reset User
                </Button>
              </div>
              <div>
                <LogOutButton className="log-out" />
              </div>
            </Container>
          </Paper>
        </center>
      </div>
    );
  }
}
export default withStyles(customStyles)(connect(mapStoreToProps)(AdminPage));