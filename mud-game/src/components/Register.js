import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
    state = {
      username: "",
      email: "",
      password: ""
    };

    inputChangeHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    submitValues = ({ username, email, password }) => {
        console.log({ username, email, password });
        this.setState({
          username: username,
          email: email,
          password1: password,
          
        });
        const herokurl = "https://lambda-mud-test.herokuapp.com/";
        console.log("this state", this.state);
    
        axios({
          url: `${herokurl}/api/registration/`,
          method: "POST",
          data: {
            username: `${this.state.username}`,
            password: `${this.state.password1}`,
            email: `${this.state.email}`
          }
        })
        .then(res => {
            console.log("response", res);
            const token = res.data["key"];
            localStorage.setItem("token", `Token ${token}`);
            this.props.history.push("/adventure");
        })
        .catch(err => {
            console.log('Axios error:', err)
        });

};