import React, {Component} from 'react';

const styles = {
  header: {
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
    width: '100%'
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
  }
};

export class Header extends Component {
  render() {
    return (
      <header style={styles.header}>
        <p style={styles.title}>
          <a href="#">
            <img height="100px" src="../rrs-logo.png"/>
          </a>
        </p>
        <ul>
          <li>
            Intro
          </li>
          <li>
            Skills
          </li>
          <li>
            Work History
          </li>
        </ul>
      </header>
    );
  }
}
