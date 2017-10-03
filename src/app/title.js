import React, {Component} from 'react';
import jump from 'jump.js';

const styles = {
  title: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem 1rem',
    backgroundColor: '#cf4646',
    color: 'white',
    height: '100vh',
    boxSizing: 'border-box'
  },
  h1: {
    fontWeight: 300,
    fontSize: '4rem',
    margin: '1rem'
  },
  logo: {
    height: '12rem',
    backgroundColor: 'white',
    borderRadius: '1rem',
    margin: '1rem'
  },
  h2: {
    fontWeight: 300,
    fontSize: '2rem',
    margin: '.5rem'
  }
//   scroll: {
//     position: 'absolute',
//     bottom: '20px',
//     left: '50%',
//     display: 'inline-block',
//     transform: 'translate(0, -50%)',
//     paddingTop: '60px'
//
// // z-index: 2;
// // -webkit-transform: translate(0, -50%);
// // color: #fff;
// // font: normal 400 20px/1 'Josefin Sans', sans-serif;
// // letter-spacing: .1em;
// // text-decoration: none;
// // transition: opacity .3s,
//   },
//   icon: {
//     position: 'absolute',
//     top: 0,
//     left: '50%',
//     width: '30px',
//     height: '50px',
//     marginLeft: '-15px',
//     border: '2px solid #fff',
//     borderRadius: '50px',
//     boxSizing: 'border-box',
//     ':before': {
//       position: 'absolute',
//       top: '10px',
//       left: '50%',
//       content: '',
//       width: '6px',
//       height: '6px',
//       marginLeft: '-3px',
//       backgroundColor: '#fff',
//       borderRadius: '100%',
//       animation: 'sdb10 2s infinite',
//       boxSizing: 'border-box'
//     }
//   }
};

export class Title extends Component {

  handleJumpToTechs() {
    console.log('jump to techs');
    jump('#techs');
  }

  render() {
    return (
      <section style={styles.title}>
        <h1 style={styles.h1}>Ryan Sibbaluca</h1>
        <h2 style={styles.h2}>Full-Stack Web Developer</h2>
        <a href="#techs" style={styles.scroll} className="scroll" onClick={this.handleJumpToTechs}>
          <span style={styles.icon} className="icon"/>
          Scroll</a>
      </section>
    );
  }
}

