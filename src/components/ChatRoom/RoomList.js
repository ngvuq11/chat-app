import React from 'react';
import { Collapse, Typography, Button } from 'antd';
import styled from 'styled-components';
import { PlusCircleFilled } from '@ant-design/icons';
import useFireStore from '../../hooks/useFireStore';
import { authContext } from '../../Context/AuthProvider';
import { AppContext } from '../../Context/AppProvider';

const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: #fff;
    }
    .ant-collapse-content-box {
      padding: 0 40px;
    }
    .create-room-btn {
      color: #fff;
      padding: 0;
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 10px;
  color: #fff;
`;

export default function RoomList() {
  const { rooms } = React.useContext(AppContext);
  console.log('rooms', rooms);
  return (
    <Collapse ghost defaultActiveKey={['1']}>
      <PanelStyled header='Room List' key='1'>
        {rooms.map((room) => (
          <LinkStyled key={room.id}>{room.name}</LinkStyled>
        ))}
        <Button
          ghost
          className='create-room-btn'
          type='text'
          icon={<PlusCircleFilled />}
        >
          Create Room
        </Button>
      </PanelStyled>
    </Collapse>
  );
}
