import React, { Component } from 'react';
import axios from 'axios';
import Fade from 'react-reveal';

// import './css/game.css';

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
          direction: "",
          movePlayer: false,
          errorMsg:"",
          rooms: []
        };
    };
    
    componentDidMount() {
        this.init();
        this.startE();

        const herokurl = 'https://team5-mud.herokuapp.com';

        axios({
            url: `${herokurl}/api/adv/rooms`,
            method: 'GET'
        })
        .then(res => {
            console.log('rooms: ', res.data);
            this.setState({
                rooms: res.data.rooms
            });
        })
        .catch(err => {
            console.log('rooms catch: ', err.response)
        });
    };

    pauseG = () => {
        this.clickE();
        this.pauseE();

        document.addEventListener('click', this.resumeE())
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
        const herokurl = 'https://team5-mud.herokuapp.com';  // whats wrong here???

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
            });

           if(!res.data.errorMsg){
                this.state.rooms.forEach(room => {
                    if(room.title === this.state.roomTitle){
                        this.moveE();
                    }
                })
            }
    
        })
        .catch(err => {
            console.log('handleMove catch: ', err.response)
        });
    };

    clickE = () => {
        document.getElementById('click');
    };

    moveE = () => {
        document.getElementById('move');
    };

    ejectE = () => {
        document.getElementById('eject');
    };

    startE = () => {
        document.getElementById('start');
    };

    errorE = () => {
        document.getElementById('error');
    };

    pauseE = () => {
        document.getElementById('pause');
    };

    resumeE = () => {
        document.getElementById('resume');
    };
    
    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        // const room = this.state.rooms;

        return (
            <Fade>
                {this.state.errorMsg ? this.errorE(): ""}

                <div className= 'main-container'>
                    <div className= 'top-container'>
                    
                    </div>
                    <div className= 'map-container'>
                        <div className= 'map'>
                            <div className= 'room-name'>

                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        )
    }
};

export default Game;