import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Card, Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";

const AdminEducation = () => {
  const { projects, portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(" Admin Educations data", portfolioData.education);
  }, []);

  const onFinish = (values) => {
    console.log("on finish called", values);
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  return (
    <>
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
                    disabled
                    onClick={() => alert("Edit clicked!")}
                    style={{ borderRadius: 5 }}
                  >
                    Edit
                  </Button>,
                  <Button
                    type="primary"
                    danger
                    disabled
                    icon={<DeleteOutlined />}
                    onClick={() => alert("Delete clicked!")}
                    style={{ borderRadius: 5 }}
                  >
                    Delete
                  </Button>,
                ]}
              >
                <Card.Meta
                  title={card.school}
                  description={card.desc.slice(0, 70) + "..."}
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
