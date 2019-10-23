import React, { Component } from 'react';
import axios from 'axios';

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
          uuid: ""
        };
    }
    
    componentDidMount() {
        this.init()
    };

    init = () => {
        const herokurl = 'https://team5-mud.herokuapp.com';
        const key = localStorage.getItem('token');

        axios({
            url: `${herokurl}/api/adv/rooms`,
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
};

export default Game;