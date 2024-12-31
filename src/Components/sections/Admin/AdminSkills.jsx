import React, { useEffect, useState } from "react";
import { Form, Input, Button, Typography, Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { PORTFOLIOPOINTS } from "../../../Api/Endpoints";
import { hideLoading, ReloadData, showLoading } from "../../../redux/rootSlice";
import { Modal } from "antd";
const { confirm } = Modal;
const { Title } = Typography;
import { Card, Row, Col, message } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import useConfirmationModal from "./useConfirmationModal";

const AdminSkills = () => {
  
  const { showConfirm } = useConfirmationModal();

  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedItemEdit, setSelectedItemEdit] = React.useState(null);
  const [type, setType] = React.useState("add");
  const id = "95e9t5";

  useEffect(() => {
    console.log(" Admin All Skills data", portfolioData.skills);
    console.log('SElected item', selectedItemEdit)
  }, []);

  const showDeleteConfirm = (item) => {
    showConfirm({
      title: 'Are you sure you want to delete this Skills?',
      content: `This action will permanently delete the Skills:`,
      onConfirm: () => deleteExperice(item?._id),
    });
  }

  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      let response;
      if (selectedItemEdit) {
        alert("Update Called");
        console.log("on Update called", values);
        response = await axios.post(
          `${PORTFOLIOPOINTS.ApiBaseUrl}update-skills`,
          {
            ...values,
            _id: selectedItemEdit._id,
          }
        );
      } else {
        alert("Add Called");
        console.log("Add Payload", values);
        response = await axios.post(
          `${PORTFOLIOPOINTS.ApiBaseUrl}add-skills`,
          values
        );
      }
      setIsModalOpen(false);
      if (response.data.success) {
        dispatch(hideLoading());
        dispatch(ReloadData(true));
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      setIsModalOpen(false);
      message.error(error.message);
    }
  };

  const deleteExperice = async (sKid) => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        `${PORTFOLIOPOINTS.ApiBaseUrl}delete-skills`,
        {
          _id:sKid,
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        dispatch(ReloadData(true));
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      message.error(error.message);
      console.log(error);
    }
  };

  return (
    <>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        disabled
        onClick={() => {
          setSelectedItemEdit(null);
          setIsModalOpen(true);
        }}
        style={{ borderRadius: 5, float: "right" }}
      >
        Skills
      </Button>

      {(type == "add" || selectedItemEdit) && (
        <Modal
          title={selectedItemEdit ? "Edit Skills" : "Add Skills"}
          open={isModalOpen}
          footer={null}
          onCancel={() => {
            setIsModalOpen(false);
            setSelectedItemEdit(null);
          }}
        >
          <div>
            <Form
              onFinish={onFinish}
              layout="vertical"
              initialValues={selectedItemEdit}
            >
              <Form.Item name="title" label="Skills Category Title">
                <input placeholder="Skills Category Title" />
              </Form.Item>

              <Form.Item name="image" label="Skills Logo Pic">
                <input placeholder="Skills profile" />
              </Form.Item>

              <Form.Item name="name" label="Skills Name ">
                <input placeholder="Skills Name" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  {selectedItemEdit ? "Update" : "Add"}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Modal>
      )}

      <div style={{ padding: "40px" }}>
        {portfolioData.skills.map((category, index) => (
          <Card
            key={index}
            title={category.title}
            bordered
            style={{
              marginBottom: "20px",
              borderRadius: "8px",
              background: "#f9fafb",
            }}
          >
            <Row justify="end" gutter={8}>
              <Col>
                <Button
                  type="primary"
                  disabled
                  icon={<EditOutlined />}
                  onClick={() => {
                    setSelectedItemEdit(category);
                    setIsModalOpen(true);
                    setType("edit");
                  }}
                >
                  Edit
                </Button>
              </Col>
              <Col>
                <Button
                  type="primary"
                  danger
                  icon={<DeleteOutlined />}
                  disabled
                  onClick={()=>showDeleteConfirm(category)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
            <br />
            <Row gutter={[16, 16]}>
              {category.skills.map((skill, skillIndex) => (
                <Col xs={24} sm={12} md={8} lg={6} key={skillIndex}>
                  <Card
                    hoverable
                    style={{
                      textAlign: "center",
                      borderRadius: "8px",
                      background: "#fff",
                    }}
                  >
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      preview={false}
                      style={{
                        width: "60px",
                        height: "60px",
                        marginBottom: "10px",
                      }}
                    />
                    <Title level={5}>{skill.name}</Title>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>
        ))}
      </div>
    </>
  );
};

export default AdminSkills;
