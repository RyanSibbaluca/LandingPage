import React, {Component} from 'react';

const styles = {
  header: {
    // display: 'flex',
    // flexDirection: 'column',
    position: 'fixed',
    height: '100%'
    // alignItems: 'center',
    // width: '100%'
  },
  title: {
    flex: 1,
    fontSize: '1.5rem',
    margin: '1rem'
  },
  date: {
    flex: 1,
    textAlign: 'right',
    margin: '1rem',
    color: 'white'
  },
  ul: {
    margin: 0,
    padding: 0
  },
  li: {
    display: 'block',
    padding: '20px'
  }
};

export class Header extends Component {

  render() {
    const sections = ['Intro', 'Skills', 'Work History'];

    return (
      <header style={styles.header}>
        <p style={styles.title}>
          <a href="#">
            <img height="100px" src="../rrs-logo.png"/>
          </a>
        </p>
        <ul style={styles.ul}>
          {sections.map((section, i) => <li style={styles.li} key={i}>{section}</li>)}
        </ul>
      </header>
    );
  }
}
