import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Themes";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { PORTFOLIOPOINTS } from "./Api/Endpoints";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading,ReloadData,SetPortfolioData,showLoading,} from "./redux/rootSlice";
import Home from "./Components/Home";
import Weather from "./Components/Weather";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Components/sections/Admin";
import Login from "./Components/sections/Admin/Login";
// import "antd/dist/antd.css";

const App = () => {
  const dispatch = useDispatch();
  const { loading, portfolioData, reloadData } = useSelector(
    (state) => state.root
  );

  useEffect(() => {
    if (!portfolioData) {
      getAllPortFolio();
    }
  }, [portfolioData]);

  useEffect(() => {
    if (reloadData) {
      getAllPortFolio();
    }
  }, [reloadData]);

  const getAllPortFolio = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.get(
        `${PORTFOLIOPOINTS.ApiBaseUrl}get-portfolio`
      );
      // console.log("portfolio datas....", response.data.data);
      dispatch(SetPortfolioData(response.data.data));
      dispatch(ReloadData(false));
      dispatch(hideLoading());
    } catch (error) {
      dispatch(hideLoading());
      message.error(response.data.message);
    }
  };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}> </Route>
            <Route path="/weather" element={<Weather />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin-dashboard" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
