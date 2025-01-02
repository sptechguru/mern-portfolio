import React, { useEffect, useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { PORTFOLIOPOINTS } from "../../../Api/Endpoints";
import { hideLoading, ReloadData, showLoading } from "../../../redux/rootSlice";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Card, Row, Col } from "antd";
import { Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import useConfirmationModal from "./useConfirmationModal";

const AdminProjects = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedItemEdit, setSelectedItemEdit] = React.useState(null);
  const [type, setType] = React.useState("add");
  const { showConfirm } = useConfirmationModal();

  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      let response;
      if (selectedItemEdit) {
        response = await axios.post(
          `${PORTFOLIOPOINTS.ApiBaseUrl}update-project`,
          {
            ...values,
            _id: selectedItemEdit._id,
          }
        );
      } else {
        response = await axios.post(
          `${PORTFOLIOPOINTS.ApiBaseUrl}add-project`,
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

  const showDeleteConfirm = (item) => {
    showConfirm({
      title: `Are you sure you want to delete this Project "${item?.title}" ?`,
      content: `This action will permanently delete this Project:`,
      onConfirm: () => deleteExperice(item?._id),
    });
  }


  const deleteExperice = async (id) => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        `${PORTFOLIOPOINTS.ApiBaseUrl}delete-project`,
        {
          _id:id,
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
    }
  };



  return (
    <>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => {
          setSelectedItemEdit(null);
          setIsModalOpen(true);
        }}
        style={{ borderRadius: 5, float: "right" }}
      >
        Projects
      </Button>

      {(type == "add" || selectedItemEdit) && (
        <Modal
          title={selectedItemEdit ? "Edit Projects" : "Add Project"}
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
              <Form.Item name="title" label="Project Title">
                <input placeholder="Project Title" />
              </Form.Item>

              <Form.Item name="image" label="Project Logo Pic">
                <input placeholder="Project profile" />
              </Form.Item>

              <Form.Item name="date" label="Date">
                <input placeholder="Date" />
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

              <Form.Item name="github" label="Github">
                <input placeholder="Github " />
              </Form.Item>

              <Form.Item name="webapp" label="Project Url">
                <input placeholder="Project Url" />
              </Form.Item>

              <Form.Item name="tags" label="Tags Profile">
                <input placeholder="Tags Profile" />
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

      <div style={{ padding: "20px" }}>
        <Row gutter={[16, 16]}>
          {portfolioData.projects.map((card, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <Card
               hoverable
                style={{
                  borderRadius: 10,
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
                cover={
                  <img
                    alt="project Imges"
                    src={card?.image}
                    style={{
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      width: "150px",
                      height: "150px",
                      top: "10px",
                      margin: "auto",
                    }}
                  />
                }
                actions={[
                  <Button
                    type="primary"
                    icon={<EditOutlined />}
                    onClick={() => {
                      setSelectedItemEdit(card);
                      setIsModalOpen(true);
                      setType("edit");
                    }}
                    style={{ borderRadius: 5 }}
                  >
                    Edit
                  </Button>,
                  <Button
                    type="primary"
                    danger
                    //disabled
                    icon={<DeleteOutlined />}
                    onClick={() => showDeleteConfirm(card)}
                    style={{ borderRadius: 5 }}
                  >
                    Delete
                  </Button>,
                ]}
              >
                <Card.Meta
                  title={card.Project}
                  description={card.description?.slice(0, 70) + "..."}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default AdminProjects;
