import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Themes";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { PORTFOLIOPOINTS } from "./Api/Endpoints";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, SetPortfolioData, showLoading } from "./redux/rootSlice";
import Home from "./Components/Home";
import Weather from "./Components/Weather";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const { loading, portfolioData } = useSelector((state) => state.root);

  useEffect(() => {
    if(!portfolioData){
    getAllPortFolio();
   }
  }, [portfolioData]);

  const getAllPortFolio = async () => {
    try {
      dispatch(showLoading());
       const response = await axios.get(
        `${PORTFOLIOPOINTS.ApiBaseUrl}get-portfolio`
      );
      // console.log("portfolio datas....", response.data);
      dispatch(SetPortfolioData(response.data));
      dispatch(hideLoading());
    } catch (error) {
      dispatch(hideLoading());
      console.log("401 error ......", error.response.data.message);
    }
  };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          {/* {loading ? <Spin_loader/> : null} */}
          <Routes>
            <Route path="/" element={<Home />}> </Route>
            <Route path="/weather" element={<Weather />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
