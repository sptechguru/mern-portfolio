import React, { useEffect } from "react";
import { Form, Input, Button, message } from "antd"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { PORTFOLIOPOINTS } from "../../../Api/Endpoints";
import { hideLoading, showLoading } from "../../../redux/rootSlice";

const AdminProjects = () => {

  const { loading, portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  useEffect(()=>{
   console.log(" AdminProjects data", portfolioData)
  },[])


 const  onFinish = async (values) =>{
    console.log("on finish called", values)
    try {
      dispatch(showLoading());
       const response = await axios.post(`${PORTFOLIOPOINTS.ApiBaseUrl}update-intro`,{
        ...values,
        _id:portfolioData.intro._id
       });
      console.log("Admin Skills portfolio datas....", response);
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
        console.log(error)

    }
  }

  return (
    <>
    <h1>AdminProjects</h1>
      <div>
        <Form onFinish={onFinish} layout="vertical" initialValues={portfolioData.projects} >
          <Form.Item name="company" label="Company Name">
            <input placeholder="Company Name" />
          </Form.Item>
          <Form.Item name="img" label="Company profile">
            <input placeholder="Company profile" />
          </Form.Item>

          <Form.Item name="date" label="Date">
            <input placeholder="Date" />
          </Form.Item>

          <Form.Item name="desc" label="Description">
            <input placeholder="Description..." />
          </Form.Item>

          <Form.Item name="skills" label="skills Profile">
            <input placeholder="skills Profile" />
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

export default AdminProjects;

