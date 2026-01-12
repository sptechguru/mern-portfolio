import React, { useState } from "react";
import { Link as LinkR, useNavigate } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { LinkedIn, MenuRounded } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NightlightIcon from '@mui/icons-material/Nightlight';
import Brightness4Icon from '@mui/icons-material/Brightness4';



const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;
const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  font-weight: 500;
  font-size: 50px;
  text-decoration: none;
  color: inherit;
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
background: linear-gradient(135deg, #6a11cb, #2575fc);
color: #fff;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 100%;
  width: 35px;
  height: 41px !important;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  &:hover {
    background: #854ce6;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const ToggelButton = styled.a`
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 100%;
  width: 41px;
  height: 41px !important;
  cursor: pointer;
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  background: ${({ theme }) => (theme === "light" ? "#fff" : "#333")};
  color: ${({ theme }) => (theme === "light" ? "#333" : "#fff")};

   @media (max-width: 768px) {
    position: absolute;
    top: -57px !important;
  }
`;

const MobileIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.bgLight + 99};
  position: absolute;
  top: 80px;
  right: 0;

  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
  
`;

const Navbar = ({ theme, toggleThemeControl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const logo = {
    color: "#854CE6",
  };

  const handleUserClick = () => {
    window.open("/login", "_blank");
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <span style={logo}>S</span>
          {theme === "light" ? (
            <span className="text-dark">.P</span>
          ) : (
            <span className="text-white">.P</span>
          )}
        </NavLogo>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>

        <NavItems>
          <NavLink href="#About">Home</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
        </NavItems>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#About">
              Home{" "}
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Skills">
              Skills
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Experience">
              Experience
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Projects">
              Projects
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Education">
              Education
            </NavLink>
            {/* <GithubButton
              href="https://github.com/sptechguru"
              target="_Blank"
              style={{
                background: theme.primary,
                color: theme.text_primary,
              }}
            >
              <GitHubIcon />
            </GithubButton>

            <GithubButton
              className="mx-2"
              href="https://www.linkedin.com/in/santosh-pal-6a171a1a3/"
              target="_Blank"
              style={{
                background: theme.primary,
                color: theme.text_primary,
              }}
            >
              <LinkedIn />
            </GithubButton> */}

            <GithubButton className="mx-2" onClick={handleUserClick}>
              <AccountCircleIcon />
            </GithubButton>

            <ToggelButton className="mx-3" onClick={toggleThemeControl}>
              {theme === "light" ? <NightlightIcon/> : <Brightness4Icon/>}
            </ToggelButton> 
          </MobileMenu>
        )}

        <ButtonContainer>
          {/* <GithubButton href="https://github.com/sptechguru" target="_Blank">
            <GitHubIcon />
          </GithubButton>

          <GithubButton
            className="mx-2"
            href="https://www.linkedin.com/in/santosh-pal-6a171a1a3/"
            target="_Blank"
          >
            <LinkedIn />
          </GithubButton> */}

          <GithubButton className="mx-2" onClick={handleUserClick}>
            <AccountCircleIcon />
          </GithubButton>

          <ToggelButton className="mx-2" onClick={toggleThemeControl}>
            {theme === "light" ? <NightlightIcon/> : <Brightness4Icon/>}
          </ToggelButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
