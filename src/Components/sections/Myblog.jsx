import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProjectCard from "../cards/ProjectCard";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  margin-top: 50px;
  padding: 0px 16px;
  position: rlative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.bg};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
`;

const Myblog = () => {
  const [currentPage, setCurrentPage] = useState("");
  const handleButtonClick = (url) => {
    setCurrentPage(url);
    window.open(url, "_blank");
  };
  const [toggle, setToggle] = useState("all");
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;

  return (
    <>
        <Title> My blog</Title>
      <section className="container py-5">
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => <ProjectCard project={project} />)}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} />
            ))}
        </CardContainer>
      </section>
    </>
  );
};

export default Myblog;
