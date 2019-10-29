import React from "react";
import { Steps, Icon } from 'antd';
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
    current: 2,
  };

  onChange = current => {
    console.log('onChange:', current);
    this.setState({ current });
  };

  onIncrease = current => this.setState({current: current + 1});

  onDecrease = current => this.setState({current: current - 1});

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
        <div className='row'>
          { current >0 ? <div className='col-1 align-self-center' onClick={() => this.onDecrease(current)}> {<Icon type="left-circle" style={{fontSize: '2rem'}} theme="filled" />} </div> : <div className='col-1' /> }
          <div className='col-10'>
            { this.renderStep(current)}
          </div>
          { current < 3 && (<div className='col-1 align-self-center' onClick={() => this.onIncrease(current)}>  {<Icon type="right-circle" style={{fontSize: '2rem'}} theme="filled" />} </div>) }
        </div>
      </div>
    );
  }
}

export default Navbar;
