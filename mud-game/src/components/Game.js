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
      token: '',
      playerName: '',
      roomTitle: '',
      roomDescription: '',
      roomPlayers: [],
      username: '',
      uuid: '',
      direction: '',
      movePlayer: false,
      errorMsg: '',
      rooms: []
    };
  }
  componentDidMount() {
    this.init();

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
        console.log('rooms catch: ', err.response);
      });
  }

  // pauseG = () => {
  //     this.clickE();
  //     this.pauseE();

  //     document.addEventListener('click', this.resumeE())
  // };

  // logout = () => {
  //     this.clickE();
  //     this.ejectE();

  //     setTimeout(() =>{
  //         localStorage.removeItem('token');
  //         window.location.assign('/');
  //     }, 3000);
  // };

    init = () => {
        const herokurl = 'https://team5-mud.herokuapp.com';
        const key = localStorage.getItem('token');

        axios({
            url: `${herokurl}/api/adv/init`,
            method: 'GET',
            headers: {
                Authorization: `${key}`
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
        const herokurl = 'https://team5-mud.herokuapp.com';

        axios({
            url: `${herokurl}/api/adv/move`,
            method: 'POST',
            headers: {
                Authorization: `${this.state.token}`
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
                movePlayer: true,
                roomNum: res.data.room_number
            });

        })
        .catch(err => {
            console.log('handleMove catch: ', err.response)
        });
    };
    
    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const room = this.state.roomTitle;
        const player = 'https://media.giphy.com/media/1wpOBJ3x8uqclnClZv/giphy.gif'
        return (
            <Fade>
                <div className= 'main-container'>
                    <div className= 'map-container'>   
                        <div id= 'map'>
                            <div className= 'player'>
                                {room === 'room_1' ? (
                                    <img 
                                    id= 'player-icon1' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_2' ? (
                                    <img 
                                    id= 'player-icon2' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_15' ? (
                                    <img 
                                    id= 'player-icon3' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_14' ? (
                                    <img 
                                    id= 'player-icon4' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_24' ? (
                                    <img 
                                    id= 'player-icon5' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_10' ? (
                                    <img 
                                    id= 'player-icon6' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_23' ? (
                                    <img 
                                    id= 'player-icon7' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_20' ? (
                                    <img 
                                    id= 'player-icon8' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_29' ? (
                                    <img 
                                    id= 'player-icon9' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_37' ? (
                                    <img 
                                    id= 'player-icon10' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_52' ? (
                                    <img 
                                    id= 'player-icon11' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_64' ? (
                                    <img 
                                    id= 'player-icon12' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_80' ? (
                                    <img 
                                    id= 'player-icon13' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_82' ? (
                                    <img 
                                    id= 'player-icon14' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_34' ? (
                                    <img 
                                    id= 'player-icon15' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_44' ? (
                                    <img 
                                    id= 'player-icon16' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_45' ? (
                                    <img 
                                    id= 'player-icon17' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_38' ? (
                                    <img 
                                    id= 'player-icon18' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_30' ? (
                                    <img 
                                    id= 'player-icon19' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_39' ? (
                                    <img 
                                    id= 'player-icon20' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_55' ? (
                                    <img 
                                    id= 'player-icon21' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_54' ? (
                                    <img 
                                    id= 'player-icon22' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_53' ? (
                                    <img 
                                    id= 'player-icon23' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_60' ? (
                                    <img 
                                    id= 'player-icon24' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_61' ? (
                                    <img 
                                    id= 'player-icon25' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_69' ? (
                                    <img 
                                    id= 'player-icon26' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_75' ? (
                                    <img 
                                    id= 'player-icon27' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_71' ? (
                                    <img 
                                    id= 'player-icon28' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_70' ? (
                                    <img 
                                    id= 'player-icon28' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_65' ? (
                                    <img 
                                    id= 'player-icon29' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_76' ? (
                                    <img 
                                    id= 'player-icon30' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_84' ? (
                                    <img 
                                    id= 'player-icon31' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_98' ? (
                                    <img 
                                    id= 'player-icon32' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_101' ? (
                                    <img 
                                    id= 'player-icon33' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_97' ? (
                                    <img 
                                    id= 'player-icon34' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_83' ? (
                                    <img 
                                    id= 'player-icon35' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_92' ? (
                                    <img 
                                    id= 'player-icon36' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_89' ? (
                                    <img 
                                    id= 'player-icon37' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_100' ? (
                                    <img 
                                    id= 'player-icon38' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_109' ? (
                                    <img 
                                    id= 'player-icon39' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_96' ? (
                                    <img 
                                    id= 'player-icon40' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_105' ? (
                                    <img 
                                    id= 'player-icon41' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_106' ? (
                                    <img 
                                    id= 'player-icon42' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_110' ? (
                                    <img 
                                    id= 'player-icon43' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_107' ? (
                                    <img 
                                    id= 'player-icon44' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_111' ? (
                                    <img 
                                    id= 'player-icon45' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_102' ? (
                                    <img 
                                    id= 'player-icon46' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_94' ? (
                                    <img 
                                    id= 'player-icon47' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_99' ? (
                                    <img 
                                    id= 'player-icon48' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_108' ? (
                                    <img 
                                    id= 'player-icon49' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_86' ? (
                                    <img 
                                    id= 'player-icon50' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_85' ? (
                                    <img 
                                    id= 'player-icon51' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_93' ? (
                                    <img 
                                    id= 'player-icon52' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_73' ? (
                                    <img 
                                    id= 'player-icon53' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_79' ? (
                                    <img 
                                    id= 'player-icon54' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_87' ? (
                                    <img 
                                    id= 'player-icon55' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_90' ? (
                                    <img 
                                    id= 'player-icon56' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_91' ? (
                                    <img 
                                    id= 'player-icon57' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_78' ? (
                                    <img 
                                    id= 'player-icon58' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_77' ? (
                                    <img 
                                    id= 'player-icon59' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_72' ? (
                                    <img 
                                    id= 'player-icon60' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_66' ? (
                                    <img 
                                    id= 'player-icon61' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_62' ? (
                                    <img 
                                    id= 'player-icon62' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_63' ? (
                                    <img 
                                    id= 'player-icon63' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_58' ? (
                                    <img 
                                    id= 'player-icon64' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_59' ? (
                                    <img 
                                    id= 'player-icon65' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_50' ? (
                                    <img 
                                    id= 'player-icon66' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_57' ? (
                                    <img 
                                    id= 'player-icon67' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_47' ? (
                                    <img 
                                    id= 'player-icon68' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_48' ? (
                                    <img 
                                    id= 'player-icon69' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_49' ? (
                                    <img 
                                    id= 'player-icon70' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_56' ? (
                                    <img 
                                    id= 'player-icon71' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_46' ? (
                                    <img 
                                    id= 'player-icon72' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_36' ? (
                                    <img 
                                    id= 'player-icon73' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_40' ? (
                                    <img 
                                    id= 'player-icon74' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_31' ? (
                                    <img 
                                    id= 'player-icon75' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_28' ? (
                                    <img 
                                    id= 'player-icon76' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_18' ? (
                                    <img 
                                    id= 'player-icon77' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_17' ? (
                                    <img 
                                    id= 'player-icon78' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_26' ? (
                                    <img 
                                    id= 'player-icon79' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_35' ? (
                                    <img 
                                    id= 'player-icon80' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_25' ? (
                                    <img 
                                    id= 'player-icon81' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_16' ? (
                                    <img 
                                    id= 'player-icon82' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_8' ? (
                                    <img 
                                    id= 'player-icon83' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_7' ? (
                                    <img 
                                    id= 'player-icon84' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_3' ? (
                                    <img 
                                    id= 'player-icon85' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_11' ? (
                                    <img 
                                    id= 'player-icon86' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_9' ? (
                                    <img 
                                    id= 'player-icon87' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_4' ? (
                                    <img 
                                    id= 'player-icon88' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_12' ? (
                                    <img 
                                    id= 'player-icon89' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_21' ? (
                                    <img 
                                    id= 'player-icon90' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_32' ? (
                                    <img 
                                    id= 'player-icon91' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_41' ? (
                                    <img 
                                    id= 'player-icon92' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_42' ? (
                                    <img 
                                    id= 'player-icon93' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_43' ? (
                                    <img 
                                    id= 'player-icon95' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_33' ? (
                                    <img 
                                    id= 'player-icon96' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_51' ? (
                                    <img 
                                    id= 'player-icon97' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_19' ? (
                                    <img 
                                    id= 'player-icon98' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_13' ? (
                                    <img 
                                    id= 'player-icon99' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_6' ? (
                                    <img 
                                    id= 'player-icon100' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_5' ? (
                                    <img 
                                    id= 'player-icon101' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_27' ? (
                                    <img 
                                    id= 'player-icon102' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_22' ? (
                                    <img 
                                    id= 'player-icon103' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_68' ? (
                                    <img 
                                    id= 'player-icon104' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_67' ? (
                                    <img 
                                    id= 'player-icon105' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_81' ? (
                                    <img 
                                    id= 'player-icon106' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_74' ? (
                                    <img 
                                    id= 'player-icon107' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_88' ? (
                                    <img 
                                    id= 'player-icon108' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_104' ? (
                                    <img 
                                    id= 'player-icon109' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                {room === 'room_103' ? (
                                    <img 
                                    id= 'player-icon110' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                                 {room === 'room_95' ? (
                                    <img 
                                    id= 'player-icon111' 
                                    className= 'player-icon'
                                    src= {player}
                                    width= '45px'
                                    height= 'auto' />        
                                ) : ( "" )
                                }
                            </div>
                        </div>
                    </div>
                      <div className= 'right-container'>
                        <div className='top-container'>
                            <h3>>> {this.state.roomTitle}</h3>
                            <p>>> {this.state.roomDescription}</p>
                            <p>
                              >> Players here:{' '}
                              {this.state.roomPlayers.map((item, index) => {
                                if (index === this.state.roomPlayers.length - 1) {
                                  return <>{item}</>;
                                }
                                return <>{item}, </>;
                              })}
                            </p>
                            {this.state.errorMsg ? '>> Wrong direction!!' : ''}
                        </div>  
                        <div className= 'bottom-container'>
                            <div className= 'arrows-cont'>
                                <img id= 'arrow-w' alt= 'Arrow West' src= {ArrowW} width= '130px' height= 'auto' onClick= {() => this.handleMove('w')}/>
                                <img id= 'arrow-n' alt= 'Arrow North' src= {ArrowN} width= '130px' height= 'auto' onClick= {() => this.handleMove('n')}/>
                                <img id= 'arrow-s' alt= 'Arrow South' src= {ArrowS} width= '130px' height= 'auto' onClick= {() => this.handleMove('s')}/>
                                <img id= 'arrow-e' alt= 'Arrow East' src= {ArrowE} width= '130px' height= 'auto' onClick= {() => this.handleMove('e')} />
                                <button
                                    id='logout'
                                    value='logout'
                                    onClick={() => {
                                    window.localStorage.clear();
                                    this.props.history.push('/login');
                                    }}
                                > Logout
                                </button>
                            </div> 
                        </div>
                    </div>
                </div>
            </Fade>
        )
    }
};

export default Game;
