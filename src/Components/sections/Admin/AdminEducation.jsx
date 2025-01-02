import React, { useEffect, useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { PORTFOLIOPOINTS } from "../../../Api/Endpoints";
import { hideLoading, ReloadData, showLoading } from "../../../redux/rootSlice";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Card, Row, Col } from "antd";
import { Modal } from "antd";
import useConfirmationModal from "./useConfirmationModal";
import TextArea from "antd/es/input/TextArea";

const AdminEducation = () => {
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
          `${PORTFOLIOPOINTS.ApiBaseUrl}update-education`,
          {
            ...values,
            _id: selectedItemEdit._id,
          }
        );
      } else {
        response = await axios.post(
          `${PORTFOLIOPOINTS.ApiBaseUrl}add-education`,
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

  const showDeleteConfirmation = (item) => {
    showConfirm({
      title: 'Delete Confirmation',
      content: `Are you sure you want to delete "${item?.school}" with ID: ${item?._id}?`,
      onConfirm: () => deleteExperice(item?._id),
    });
  };

  const deleteExperice = async (id) => {
    try {
      dispatch(showLoading());
      const response = await axios.post(`${PORTFOLIOPOINTS.ApiBaseUrl}delete-education`, {
        _id: id,
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
        Education
      </Button>

      {(type == "add" || selectedItemEdit) && (
        <Modal
          title={selectedItemEdit ? "Edit Education" : "Add Education"}
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
              <Form.Item name="school" label="School Clg Name">
                <input placeholder="School Name" />
              </Form.Item>

              <Form.Item name="img" label="Company Logo Pic">
                <input placeholder="Company profile" />
              </Form.Item>

              <Form.Item name="date" label="Date">
                <input placeholder="Date" />
              </Form.Item>

              <Form.Item name="desc" label="Description">
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

              <Form.Item name="grade" label="Grade">
                <input placeholder="Grade " />
              </Form.Item>

              <Form.Item name="degree" label="Degree Profile">
                <input placeholder="Degree Profile" />
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
          {portfolioData.education.map((card, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <Card
                style={{
                  borderRadius: 10,
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
                cover={
                  <img
                    alt="project Imges"
                    src={card?.img}
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
                    onClick={() => showDeleteConfirmation(card)}
                    style={{ borderRadius: 5 }}
                  >
                    Delete
                  </Button>,
                ]}
              >
                <Card.Meta
                  title={card.company}
                  description={card.desc?.slice(0, 70) + "..."}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default AdminEducation;
