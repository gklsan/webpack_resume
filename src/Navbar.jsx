import React from "react";
import { Steps, Divider } from 'antd';
import AboutMe from './AboutMe'
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
const { Step } = Steps;

const SubStep = () => <h1>Hello world </h1>

const stepStyle = {
  paddingTop: '1rem',
  paddingBottom: '1rem',
  marginBottom: '4rem',
  boxShadow: '0px -1px 0 0 #e8e8e8 inset',
};

class Navbar extends React.Component {
  state = {
    current: 1,
  };

  onChange = current => {
    console.log('onChange:', current);
    this.setState({ current });
  };

  renderStep = (current) => {
    console.log(current)
    if(current === 0) {
      return <AboutMe />
    } else if(current === 1) {
      return <Education />
    } else if(current === 2) {
      return <Skills />
    } else if(current === 3) {
      return <Experience />
    }
  };

  render() {
    const { current } = this.state;

    return (
      <div>
        <Steps current={current} onChange={this.onChange} style={stepStyle}>
          <Step title="About me" />
          <Step title="Education" />
          <Step title="Skills" />
          <Step title="Experience" />
        </Steps>
        { this.renderStep(current)}
      </div>
    );
  }
}

export default Navbar;
