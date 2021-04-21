import { useState } from 'react';
import { Col, Form, notification, Row } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Base64 } from 'js-base64';
import { setToken } from 'state';

import Input from 'microcomponents/input';
import Button from 'microcomponents/button';
import Checkbox from 'microcomponents/checkbox';
import Image from 'assets/image/loginImage.png';
import style from './style';

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function Login({ classes, history, isSetToken }) {
  let initValue = {
    username: '',
    password: '',
  };

  const [inputs, setInputs] = useState(initValue);

  const handelChangeInput = (name) => (event) => {
    setInputs({ ...inputs, [name]: event.target.value });
  };

  const onFinish = () => {
    const token =
      'Basic ' + Base64.encode(inputs.username + ':' + inputs.password);
    isSetToken(token);
    notification.success({
      message: 'عملیات با موفقیت انجام شد',
    });
    history.push('/');
  };
  const onFinishFailed = () => {};
  return (
    <div className={classes.root}>
      <Row
        style={{ width: '100%', height: '100%' }}
        align="middle"
        justify="center"
        gutter={[20, 20]}
      >
        <Col md={8}>
          <Form
            name="basic"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className={classes.fromAction}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input onChange={handelChangeInput('username')} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input type="password" onChange={handelChangeInput('password')} />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col md={8}>
          <div className={classes.imageLogin}>
            <img src={Image} alt="" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  isSetToken: (isToken) => dispatch(setToken(isToken)),
});

export default connect(null, mapDispatchToProps)(style(withRouter(Login)));
