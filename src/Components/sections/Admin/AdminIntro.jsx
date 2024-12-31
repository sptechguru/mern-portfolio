import React, { useEffect } from "react";
import { Form, Input, Button, message } from "antd"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { PORTFOLIOPOINTS } from "../../../Api/Endpoints";
import { hideLoading, showLoading } from "../../../redux/rootSlice";
import TextArea from "antd/es/input/TextArea";

const AdminIntro = () => {

  const { loading, portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  useEffect(()=>{
  //  console.log("Admin intro data", portfolioData)
  },[])


 const  onFinish = async (values) =>{
    try {
      dispatch(showLoading());
       const response = await axios.post(`${PORTFOLIOPOINTS.ApiBaseUrl}update-intro`,{
        ...values,
        _id:portfolioData.intro._id
       });
      dispatch(hideLoading());
      if(response.data.success){
        message.success(response.data.message)
      }
      else{
        message.error(response.data.message)
      }
    } catch (error) {
      dispatch(hideLoading());
        message.error(error.message)

    }
  }

  return (
    <>
      <div>
        <Form onFinish={onFinish} layout="vertical" initialValues={portfolioData.intro} >
          <Form.Item name="name" label="Username">
            <input placeholder="UserName" />
          </Form.Item>
          <Form.Item name="profile_url" label="User profile">
            <input placeholder="User profile" />
          </Form.Item>

          <Form.Item name="resume" label="Resume">
            <input placeholder="Resume" />
          </Form.Item>

          <Form.Item name="description" label="Description">
                <TextArea
                  placeholder="Enter your text here..."
                  autoSize={{ minRows: 5, maxRows: 15 }} 
                  style={{
                    width: "100%",
                    height: "100%",
                    resize: "none", 
                  }}
                />
              </Form.Item>

          <Form.Item name="github" label="Github Profile">
            <input placeholder="Github Profile" disabled readOnly />
          </Form.Item>

          <Form.Item name="linkedin" label="Linkdin Profile">
            <input placeholder="Linkdin Profile" disabled readOnly  />
          </Form.Item>

          <Form.Item name="roles" label="Roles">
            <input placeholder="Roles" disabled readOnly  />
          </Form.Item>

          <Form.Item >
          <Button type="primary" htmlType="submit">
          Submit
        </Button>
        </Form.Item>
        </Form>
      </div>

    </>
  );
};

export default AdminIntro;
