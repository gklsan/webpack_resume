import React from "react";
import {Timeline, Typography, Icon} from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
const { Title } = Typography;

const Experience = () => {
  return(
    <div>
        <Timeline.Item>
          <Title level={4}>Infrrd(2018 - Present)</Title>
          <Paragraph>Senior Software Enginner(full)</Paragraph>
          <Timeline>
            <Timeline.Item>ROOSTIFY - Adapt</Timeline.Item>
            <Timeline.Item>ROOSTIFY - CURB Appeal</Timeline.Item>
            <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>ROOSTIFY - URLA</Timeline.Item>
          </Timeline>
        </Timeline.Item>

        <Timeline.Item>
          <Title level={4}>Mahaswami(2014 - 2018)</Title>
          <Paragraph>Senior Software Enginner(RoR)</Paragraph>
          <Timeline>
            <Timeline.Item>Fasternotes - Health agency management</Timeline.Item>
            <Timeline.Item>A2 APP - Career search</Timeline.Item>
            <Timeline.Item>A2 APP - Salary search</Timeline.Item>
            <Timeline.Item>A2 APP - Firefighter</Timeline.Item>
            <Timeline.Item>CGSCHOLAR - Educational application</Timeline.Item>
          </Timeline>
        </Timeline.Item>
    </div>
  )
}

export default Experience
