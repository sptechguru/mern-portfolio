import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Themes";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import StartCanvas from "./components/canvas/Stars";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Navbar from "./Components/Navbar";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { PORTFOLIOPOINTS } from "./Api/Endpoints";
import { useDispatch, useSelector } from "react-redux";
import { SetPortfolioData } from "./redux/rootSlice";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const App = () => {

  const dispatch = useDispatch();
  const { loading, portfolioData } = useSelector((state) => state.root);

  useEffect(() => {
    getAllPortFolio();
  }, []);

  useEffect(() => {
    console.log("loading app.js portfolio", portfolioData)
  }, [portfolioData]);

  const getAllPortFolio = async () => {
    try {
      const response = await axios.get(`${PORTFOLIOPOINTS.ApiBaseUrl}get-portfolio`);
      console.log('portfolio datas....', response.data);
      dispatch(SetPortfolioData(response.data));
    } catch (error) {
      setError(error.response.data.message);
      console.log('401 error ......', error.response.data.message)
    }
  }

  return (
   <>
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>

      { loading ? <span>Loader...</span> :null}

        <Navbar />
        <Body>
          <StartCanvas />
          <div>
            <Hero />
            <Wrapper>
              <Skills />
              <Experience />
            </Wrapper>
            <Projects />
            <Wrapper>
              <Education />
              <Contact />
            </Wrapper>
            <Footer />
          </div>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
   </>
  );
}

export default App;
