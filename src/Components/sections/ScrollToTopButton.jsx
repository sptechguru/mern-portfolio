import { useState, useEffect } from "react";
import styled from "styled-components";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const ScrollToTopButtons = styled.button`
  position: fixed;
  bottom: 1rem; /* 5px */
  right: 0.25rem;
  color: white;
  border-radius: 50%;
  background-color: #1f2937; /* gray-900 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 50;
  transition: all 0.3s ease-in-out;
  width: 50px;
  height: 50px;
  border: none;
  &:hover {
    background-color: #374151; /* Slightly lighter gray for hover effect */
  }
`;

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    // Show button when scrolled 300px down
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    visible && (
      <ScrollToTopButtons onClick={scrollToTop}>
        <ExpandLessIcon />
      </ScrollToTopButtons>
    )
  );
};

export default ScrollToTopButton;
