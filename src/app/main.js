import React, {Component} from 'react';
import {Header} from './header';
import {Title} from './title';
import {Summary} from './summary';
import {Skills} from './skills';
import {Techs} from './techs/techs';
import {Footer} from './footer';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

export class Main extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header/>
        <main style={styles.main}>
          <Title/>
          <Summary/>
          <Skills/>
          <Techs/>
        </main>
        <Footer/>
      </div>
    );
  }
}
