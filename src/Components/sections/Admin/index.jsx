
import React from "react";
import AdminIntro from "./AdminIntro";
import AdminExperince from "./AdminExperince";
import AdminSkills from "./AdminSkills";
import AdminProjects from "./AdminProjects";
import AdminEducation from "./AdminEducation";
import { useSelector } from "react-redux";
import { Tabs } from "antd";
import Spin_loader from "../../Spin-loader";
const { TabPane  } = Tabs;

const Admin = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);
  return (
    <>
    <h1>Crm Admin Panel</h1>

    {loading ? <Spin_loader/> : null}

    {
      portfolioData &&
 <div className="container-fluid bg-light py-5">
<Tabs defaultActiveKey="1"  tabPosition="left" size="large" animated>

  <TabPane tab="Intro" key="1">
    <AdminIntro />
  </TabPane>

  <TabPane tab="Skills" key="2">
    <AdminSkills />
  </TabPane>

  <TabPane tab="Experience" key="3">
    <AdminExperince />
  </TabPane>

  <TabPane tab="Projects" key="4">
    <AdminProjects />
  </TabPane>

  <TabPane tab="Education" key="5">
    <AdminEducation />
  </TabPane>

</Tabs>
</div>
}
      
    </>
  );
};

export default Admin;
