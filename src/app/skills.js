import React, {Component} from 'react';
import WorkExperienceList from './work-experience.json';

const styles = {
  workExperience: {
    borderBottom: '1px solid #dfdfdf'
  }
};

export class Skills extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.setState({workExperience: WorkExperienceList});
  }

  render() {
    return (
      <section id="skills">
        <h1>Skills</h1>

        <ul>
          <li>
            html / css / javascript / es6
          </li>
          <li>
            angular / react
          </li>
          <li>
            sass / less
          </li>
          <li>
            webpack / gulp / grunt
          </li>
          <li>
            cordova / ionic
          </li>
          <li>
            nodeJS / expressJS / swagger
          </li>
          <li>
            IBM Bluemix / CloudantDB / MySQL
          </li>
          <li>
            git / travis
          </li>
        </ul>

        <h1>Work Experience</h1>

        <div>
          {this.state.workExperience.map(object =>
            <div style={styles.workExperience} key={object.company + object.role}>
              <h2>{object.company}</h2>
              <h3>{object.role}</h3>
              <p>{object.duration} | {object.location}</p>
            </div>
          )}
        </div>
      </section>
    );
  }
}
