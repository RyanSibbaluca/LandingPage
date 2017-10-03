import React, {Component} from 'react';

const styles = {
  section: {
    background: '#34e39a'
  }
};

export class Summary extends Component {
  render() {
    return (
      <section id="summary" style={styles.section}>
        <h1 className="animate-enter-text">
          About
        </h1>

        <p>
          I do this, I do that.
        </p>
        <p>
          {'I\'m'} a full-stack web developer based in Singapore.
        </p>
        <p>
          Colin Grist is a freelance designer and developer and for the past eight years he`s worked for some of the UK`s best digital agencies; producing award–winning work wherever he`s been.
        </p>
        <p>
          Working at the very highest level as both a senior developer and senior designer, Colin provides his experience, knowledge and expertise to clients offering them something more than your average freelancer.
        </p>

        <h1>
          I love learning. Life is a forever learning process.
        </h1>
      </section>
    );
  }
}
