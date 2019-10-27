import React from "react";
import { Timeline, Typography } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
const { Title } = Typography;
const Education = () => {
  return(
    <Timeline>

      <Timeline.Item>
        <Title level={4}>Master of Computer Application(2011 - 2014)</Title>
        <Paragraph level={6}>MPNMJ ENGINNERING COLLEGE</Paragraph>
        <Paragraph>Erode, India</Paragraph>
        <Paragraph>Affliated with anna university chennai</Paragraph>
      </Timeline.Item>

      <Timeline.Item>
        <Title level={4}>Bachelor of Information Technology(2007 - 2010)</Title>
        <Paragraph level={6}>MPNMJ ENGINNERING COLLEGE</Paragraph>
        <Paragraph>Erode, India</Paragraph>
        <Paragraph>Affliated with anna university Kovai</Paragraph>
      </Timeline.Item>
      <Timeline.Item dot={' '}/>


    </Timeline>
  )
}

export default Education;
