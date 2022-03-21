import React from 'react';
import { auth, db } from '../../firebase/config';
import { Button, Avatar, Typography } from 'antd';
import styled from 'styled-components';
import { authContext } from '../../Context/AuthProvider';

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid #e8e8e8;

  .user-name {
    color: white;
    margin-left: 5px;
  }
`;

export default function UserInfor() {
  const {
    user: { displayName, photoURL },
  } = React.useContext(authContext);
  return (
    <WrapperStyled>
      <div>
        <Avatar src={photoURL}>
          {photoURL ? '' : displayName?.charAt(0)?.toUpperCase()}
        </Avatar>
        <Typography.Text className='user-name'>{displayName}</Typography.Text>
      </div>
      <Button ghost onClick={() => auth.signOut()}>
        Log Out
      </Button>
    </WrapperStyled>
  );
}
