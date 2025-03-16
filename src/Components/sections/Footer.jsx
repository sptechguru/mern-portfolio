import React from "react";
import styled from "styled-components";
import {
  FacebookRounded,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useSelector } from "react-redux";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  z-index: 10;
  position: relative;
  background: ${({ theme }) => theme.bg_primary};
`;
const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0.5rem;
  color: ${({ theme }) => theme.text_primary};
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
const MapContainer = styled.div`
  width: 50%;
  max-width: 250px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;
const FooterContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Logo = styled.div`
  font-weight: 600;
  font-size: 22px;
  color: ${({ theme }) => theme.primary};
`;
const Nav = styled.ul`
  display: flex;
  gap: 1.5rem;
  margin: 1rem 0;
  flex-wrap: wrap;
  justify-content: center;
`;
const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
const SocialMediaIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;
const SocialMediaIcon = styled.a`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

const Footer = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { name, github, insta, linkedin, facebook } = intro;

  return (
    <FooterContainer>
      <FooterWrapper>
        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.489906160832!2d75.8437058145021!3d22.747193385093237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39630278eb3225dd%3A0xf268f1d9850ac99c!2s27%2C+Kushwah+Nagar+Main+Rd%2C+Maharana+Pratap+Nagar%2C+Indore%2C+Madhya+Pradesh+452015!5e0!3m2!1sen!2sin!4v1555854647282!5m2!1sen!2sin"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </MapContainer>
        <FooterContent>
          <Logo>{name}</Logo>
          <Nav>
            <NavLink href="#About">About</NavLink>
            <NavLink href="#Skills">Skills</NavLink>
            <NavLink href="#Experience">Experience</NavLink>
            <NavLink href="#Projects">Projects</NavLink>
            <NavLink href="#Education">Education</NavLink>
          </Nav>
          <SocialMediaIcons>
            <SocialMediaIcon href={facebook} target="_blank">
              <FacebookRounded />
            </SocialMediaIcon>
            <SocialMediaIcon href={github} target="_blank">
              <GitHubIcon />
            </SocialMediaIcon>
            <SocialMediaIcon href={linkedin} target="_blank">
              <LinkedIn />
            </SocialMediaIcon>
            <SocialMediaIcon href={insta} target="_blank">
              <Instagram />
            </SocialMediaIcon>
          </SocialMediaIcons>
          <Copyright>
            © 2025 {name} All rights reserved. For inquiries, Contact 📧
            santoshpal9816@gmail.com
          </Copyright>
        </FooterContent>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
