import React, { Component } from 'react';
import axios from 'axios';
import Fade from 'react-reveal';

import '../css/game.css';
import ArrowW from '../images/arrow-w.png';
import ArrowN from '../images/arrow-n.png';
import ArrowS from '../images/arrow-s.png';
import ArrowE from '../images/arrow-e.png';

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
                <div className= 'main-container'>
                    <div className= 'map-container'>   
                        <div id= 'map'>
                            <div className= 'player'>
                                <img className= 'player-icon' alt= 'Player Icon' src= 'https://media.giphy.com/media/1wpOBJ3x8uqclnClZv/giphy.gif' />
                            </div>
                        </div>
                    </div>
                    <div className= 'right-container'>
                        <div className= 'top-container'> 
                            {this.state.errorMsg ? this.errorE(): ""}
                            <p>top container</p>
                            {/* here goes the screen with the messages */}
                        </div>    
                        <div className= 'bottom-container'>
                            <div className= 'arrows-cont'>
                                <img id= 'arrow-w' alt= 'Arrow West' src= {ArrowW} />
                                <img id= 'arrow-n' alt= 'Arrow North' src= {ArrowN} />
                                <img id= 'arrow-s' alt= 'Arrow South' src= {ArrowS} />
                                <img id= 'arrow-e' alt= 'Arrow East' src= {ArrowE} />
                            </div> 
                        </div>
                    </div>
                </div>
            </Fade>
        )
    }
};

export default Game;