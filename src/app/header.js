import React, {Component} from 'react';

const styles = {
  header: {
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
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
          <a href="https://github.com/FountainJS/generator-fountain-webapp" target="_blank" rel="noopener noreferrer">
            Razer
          </a>
        </p>
        <p style={styles.date}>
          Generated with FountainJS v1.0.0 on Tue Oct 03 2017 16:14:10 GMT+0800 (+08)
        </p>
      </header>
    );
  }
}
