import React from 'react'
import { Form, Input, Button } from "antd"
const AdminEducation = () => {
 
  const  onFinish = (values) =>{
    console.log("on finish called", values)
  }

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  

  return (
    <>
<div>
        <Form onFinish={onFinish} layout="vertical"  {...layout}>
          <Form.Item name="UserName" label="Username">
            <input placeholder="UserName" />
          </Form.Item>
          <Form.Item name="UserName" label="Username">
            <input placeholder="UserName" />
          </Form.Item>

          <Form.Item name="UserName" label="Username">
            <input placeholder="UserName" />
          </Form.Item>

          <Form.Item name="UserName" label="Username">
            <input placeholder="UserName" />
          </Form.Item>

          <Form.Item name="UserName" label="Username">
            <input placeholder="UserName" />
          </Form.Item>

          <Form.Item name="UserName" label="Username">
            <input placeholder="UserName" />
          </Form.Item>

          <Form.Item name="UserName" label="Username">
            <input placeholder="UserName" />
          </Form.Item>

          <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        </Form.Item>


        </Form>
      </div>

    </>
  );
}

export default AdminEducation;