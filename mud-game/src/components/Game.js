import React, { Component } from 'react';
import axios from 'axios';
import Fade from 'react-reveal';

class Game extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          token: "",
          playerName: "",
          roomTitle: "",
          roomDescription: "",
          roomPlayers: "",
          username: "",
          uuid: "",
          direction: ""
        };
    }
    
    componentDidMount() {
        this.init()
    };


    logout = () => {
        this.clickE();
        this.ejectE();

        setTimeout(() =>{
            localStorage.removeItem('token');
            window.location.assign('/');
        }, 3000);
    };

    init = () => {
        const herokurl = 'https://team5-mud.herokuapp.com';
        const key = localStorage.getItem('token');

        axios({
            url: `${herokurl}/api/adv/init`,  // confirm this is the right path
            method: 'GET',
            headers: {
                Authentication: `${key}`
            }
        })
        .then(res => {
            console.log('init: ', res.data);
            this.setState({
                playerName: res.data.name,
                roomTitle: res.data.title,
                roomDescription: res.data.description,
                roomPlayers: res.data.players,
                uuid: res.data.uuid,
                token: key
            });
        })
        .catch(err => {
            console.log('init catch: ', err.response)
        });
    };

    handleMove = direction => {
        const herokurl: 'https://team5-mud.herokuapp.com';  // whats wrong here???

        axios({
            url: `${herokurl}/api/adv/move`, // confirm this is the correct path
            method: 'POST',
            headers: {
                Authentication: `${this.state.token}`
            },
            data: {
                direction: direction 
            }  
        })
        .then(res => {
            this.setState({
                roomTitle: res.data.title,
                roomDescription: res.data.description,
                roomPlayers: res.data.players,
                errorMsg: res.data.error_msg,
                movePlayer: true
            })
        })
        .catch(err => {
            console.log('handleMove catch: ', err.response)
        })
    };

    clickE = () => {
        document.getElementById('click');
    };

    moveE = () => {
        document.getElementById('move');
    };

    ejectE = () => {
        document.getElementById('eject');
    }
    
    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
};

export default Game;