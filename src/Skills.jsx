import React from "react";
import { Timeline } from "antd";

const Skills = () => {
  return(
    <div className='row'>
      <Timeline className='col-5'>
        <Timeline.Item>Ruby</Timeline.Item>
        <Timeline.Item>Rails</Timeline.Item>
        <Timeline.Item>ReactJS</Timeline.Item>
        <Timeline.Item>HTML</Timeline.Item>
        <Timeline.Item>CSS</Timeline.Item>
        <Timeline.Item>SCSS</Timeline.Item>
        <Timeline.Item>JavaScript</Timeline.Item>
        <Timeline.Item>JQuery</Timeline.Item>
        <Timeline.Item>Bootstrap</Timeline.Item>
        <Timeline.Item>Docker</Timeline.Item>
        <Timeline.Item>Coffeescript</Timeline.Item>
        <Timeline.Item>ECMAScript</Timeline.Item>
      </Timeline>
      <Timeline className='col-5'>
        <Timeline.Item>RSpec</Timeline.Item>
        <Timeline.Item>Selenium-Webdriver</Timeline.Item>
        <Timeline.Item>Sidekiq</Timeline.Item>
        <Timeline.Item>DelayedJob</Timeline.Item>
        <Timeline.Item>PostgreSQL</Timeline.Item>
        <Timeline.Item>MySQL</Timeline.Item>
        <Timeline.Item>Git/Github</Timeline.Item>
        <Timeline.Item>Bitbucket</Timeline.Item>
        <Timeline.Item>JIRA (Issue Tracking Tool)</Timeline.Item>
        <Timeline.Item>RubyMine IDE</Timeline.Item>
        <Timeline.Item>Sublime Editor</Timeline.Item>
        <Timeline.Item>Commandline Editor 'Nano'</Timeline.Item>
      </Timeline>
    </div>
  )
}

export default Skills;
