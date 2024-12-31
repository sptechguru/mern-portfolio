import React, { useEffect } from "react";
import AdminIntro from "./AdminIntro";
import AdminExperince from "./AdminExperince";
import AdminSkills from "./AdminSkills";
import AdminProjects from "./AdminProjects";
import AdminEducation from "./AdminEducation";
import { useSelector } from "react-redux";
import { Tabs } from "antd";
import Spin_loader from "../../Spin-loader";
const { TabPane } = Tabs;
import { Layout, Button } from "antd";
const { Header } = Layout;
import { PoweroffOutlined } from '@ant-design/icons';


const Admin = () => {
  useEffect(() => {
    if (!localStorage.getItem("USER")) window.location.href = "/login";
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("USER");
    localStorage.clear();
    window.location.href = "/login";
  };

  const { loading, portfolioData } = useSelector((state) => state.root);
  return (
    <>
      <Layout>
        <Header className="header">
          <div className="logo">SP-ADMIN</div>
          <div className="logout">
            <Button type="primary" danger icon={<PoweroffOutlined />}  onClick={handleLogout}>
            </Button>
          </div>
        </Header>
      </Layout>
      {loading ? <Spin_loader /> : null}

      {portfolioData && (
        <div className="container-fluid bg-light py-5">
          <Tabs defaultActiveKey="1" tabPosition="left" size="large" animated>
            <TabPane tab="Intro Profile " key="1">
              <AdminIntro />
            </TabPane>

            <TabPane tab="Experiences" key="3">
              <AdminExperince />
            </TabPane>

            <TabPane tab="Projects" key="4">
              <AdminProjects />
            </TabPane>

            <TabPane tab="Skills" key="2">
              <AdminSkills />
            </TabPane>
            
            <TabPane tab="Education" key="5">
              <AdminEducation />
            </TabPane>
          </Tabs>
        </div>
      )}
    </>
  );
};

export default Admin;
