import React from 'react';
import UserInfor from './UserInfor';
import RoomList from './RoomList';
import { Row, Col } from 'antd';
import styled from 'styled-components';

const SideBarStyled = styled.div`
  background-color: #3f0e40;
  color: white;
  height: 100vh;
`;

export default function SideBar() {
  return (
    <SideBarStyled>
      <Row>
        <Col span={24}>
          <UserInfor />
        </Col>
        <Col span={24}>
          <RoomList />
        </Col>
      </Row>
    </SideBarStyled>
  );
}
