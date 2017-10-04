import React, {Component} from 'react';

const styles = {
  section: {
    background: '#34e39a',
    textAlign: 'center',
    padding: '2rem 0'
  },
  container: {
    maxWidth: '960px',
    margin: '0 auto'
  }
};

export class Summary extends Component {
  render() {
    return (
      <section id="summary" style={styles.section}>
        <div style={styles.container}>
          <h1 className="animate-enter-text">
            Hi Fam! {'I\'m'} Ryan Sibbaluca.
          </h1>

          <p>
            {'I\'m'} a full-stack web developer based in Singapore.
          </p>
          <p>
            I have 5 years of full-stack software engineering experience.
            I specialize in front end development and I am very keen in producing great products. I stay on top of my work and I deliver more than what is expected of me.
          </p>
          <p>
            Self-managing, accountable, team player.
          </p>
          <p>
            I love living a holistic life. Playing Basketball, Video games, Board games. TV series - the Flash, Silicon Valley. Working out, eating out, going out of country.
            Listening to almost all genres - Paramore, John Mayer, Chance the Rapper, Coldplay, Anderson .Paak.
          </p>

          <h1>
            I love learning. Life is a forever learning process.
          </h1>
        </div>
      </section>
    );
  }
}
