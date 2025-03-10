import styled, { ThemeProvider } from "styled-components";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { PORTFOLIOPOINTS } from "./Api/Endpoints";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading,ReloadData,SetPortfolioData,showLoading,} from "./redux/rootSlice";
import Home from "./Components/Home";
import Weather from "./Components/Weather";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Admin from "./Components/sections/Admin";
import Login from "./Components/sections/Admin/Login";
import { darkTheme, lightTheme } from "./utils/Themes";
import Navbar from "./Components/Navbar";
import ScrollToTopButton from "./Components/sections/ScrollToTopButton";

 const App = () => {
  const dispatch = useDispatch();
  const { loading, portfolioData, reloadData } = useSelector((state) => state.root);
  const [theme, setTheme] = useState('dark');
  const themeToggler = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

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
  <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <BrowserRouter>
        <ScrollToTopButton />
        <ConditionalNavbar theme={theme} toggleThemeControl={themeToggler} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-dashboard" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </>
  );
};


const ConditionalNavbar = ({ theme, toggleThemeControl }) => {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/admin-dashboard'];
  return !hideNavbarRoutes.includes(location.pathname) ? (
    <Navbar theme={theme} toggleThemeControl={toggleThemeControl} />
  ) : null;
}

export default App;
