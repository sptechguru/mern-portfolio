import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Styled Components
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #1e293b, #0f172a);
  color: #fff;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 120px;
  margin: 0;
  font-weight: bold;
`;

const Subtitle = styled.h2`
  margin: 10px 0;
  font-size: 28px;
`;

const Text = styled.p`
  margin: 10px 0 20px;
  color: #cbd5f5;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
`;

const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Title>404</Title>
            <Subtitle>Page Not Found</Subtitle>
            <Text>The page you are looking for does not exist.</Text>
            <Button onClick={() => navigate("/")}>Go Home</Button>
        </Container>
    );
};

export default PageNotFound;