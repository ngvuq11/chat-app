import React from 'react';
import Message from './Message';
import { Avatar, Button, Tooltip, Form, Input } from 'antd';
import styled from 'styled-components';
import { UserAddOutlined } from '@ant-design/icons';

const WrapperStyled = styled.div`
  height: 100vh;
`;
const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 57px;
  padding: 0 16px;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;

  .header {
    &-infor {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &-title {
      margin: 0;
      font-weight: bold;
    }
    &-desc {
      font-size: 12px;
    }
  }
`;
const ContentStyled = styled.div`
  height: calc(100vh - 57px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`;
const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0;
  border: 1px solid #e8e8e8;
  border-radius: 4px;

  .ant-form-item {
    flex: 1;
    margin-bottom: 0;
  }
`;
const ButtonGroupStyled = styled.div`
  display: flex;
  align-items: center;
`;
const MessageListStyled = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;

export default function ChatWindow() {
  return (
    <WrapperStyled>
      <HeaderStyled>
        <div className='header-infor'>
          <p className='header-title'>Room 1</p>
          <span className='header-desc'>This is room 1</span>
        </div>
        <ButtonGroupStyled>
          <Button
            icon={<UserAddOutlined />}
            type='text'
            style={{ textTransform: 'uppercase' }}
          >
            invite
          </Button>
          <Avatar.Group size='small' maxCount={2}>
            <Tooltip title='Quoc day ne'>
              <Avatar>Q</Avatar>
            </Tooltip>
            <Tooltip title='Quoc day ne'>
              <Avatar>Q</Avatar>
            </Tooltip>
            <Tooltip title='Quoc day ne'>
              <Avatar>Q</Avatar>
            </Tooltip>
            <Tooltip title='Quoc day ne'>
              <Avatar>Q</Avatar>
            </Tooltip>
            <Tooltip title='Quoc day ne'>
              <Avatar>Q</Avatar>
            </Tooltip>
          </Avatar.Group>
        </ButtonGroupStyled>
      </HeaderStyled>
      <ContentStyled>
        <MessageListStyled>
          <Message
            text='Test'
            photoURL={null}
            displayName='Quoc'
            createdAt={321313213123}
          />
          <Message
            text='Test'
            photoURL={null}
            displayName='Quoc'
            createdAt={321313213123}
          />
          <Message
            text='Test'
            photoURL={null}
            displayName='Quoc'
            createdAt={321313213123}
          />
          <Message
            text='Test'
            photoURL={null}
            displayName='Quoc'
            createdAt={321313213123}
          />
        </MessageListStyled>
        <FormStyled>
          <Form.Item>
            <Input
              autoComplete='off'
              bordered={false}
              placeholder='Type your message...'
            />
          </Form.Item>
          <Button type='primary'>Send</Button>
        </FormStyled>
      </ContentStyled>
    </WrapperStyled>
  );
}
