import React from 'react';
import { Row, Col, Button, Typography } from 'antd';

import firebase, { auth } from '../../firebase/config';
import { addDocument } from '../../firebase/services';

import { useHistory } from 'react-router-dom';

const Title = Typography;
const fbProvider = new firebase.auth.FacebookAuthProvider();

export default function Login() {
  const handleFacebookLogin = async () => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(fbProvider);
    if (additionalUserInfo?.isNewUser) {
      addDocument('user', {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        provider: additionalUserInfo.providerId,
      });
    }
  };
  const history = useHistory();
  auth.onAuthStateChanged((user) => {
    console.log('user', user);
    if (user) {
      history.push('/');
    }
  });

  return (
    <div>
      <Row style={{ justifyContent: 'center' }}>
        <Col span={8}>
          <Title style={{ textAlign: 'center', fontSize: '30px' }} level={3}>
            Login
          </Title>
          <Button
            style={{
              width: '100%',
              marginTop: '10px',
              backgroundColor: '#fe6d73',
            }}
          >
            Login with Google
          </Button>
          <Button
            style={{
              width: '100%',
              marginTop: '10px',
              backgroundColor: '#3f37c9',
            }}
            onClick={handleFacebookLogin}
          >
            Login with Facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
}
