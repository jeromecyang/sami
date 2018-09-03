import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components";
import { FaGithub, FaTwitter, FaFacebook, FaLinkedin, FaEnvelope, FaBlogger } from 'react-icons/fa';

const Wallpaper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    color: #000;
    text-decoration: none;
    margin: 0 5px;
  }
`;

const App = () => {
  return (
    <Wallpaper>
      <Typography variant="display4" align="center" color="textPrimary" gutterBottom>
        Jerome Yang
      </Typography>
      <Typography variant="title" align="center" color="textSecondary" paragraph>
        UI/UX Engineering · Maps & DataViz · Culture & Language · Travel
      </Typography>
      <Typography variant="title" align="center" color="textPrimary">
        <a href="mailto:hi@jeromeyang.com" target="_blank"><FaEnvelope /></a>
        <a href="https://github.com/jeromecyang" target="_blank"><FaGithub /></a>
        <a href="https://twitter.com/jeromyang" target="_blank"><FaTwitter /></a>
        <a href="https://www.facebook.com/jeromeyangencounters" target="_blank"><FaFacebook /></a>
        <a href="https://www.linkedin.com/in/jerome-yang-91995a4b" target="_blank"><FaLinkedin /></a>
        <a href="http://blog.jeromeyang.com/" target="_blank"><FaBlogger /></a>
      </Typography>
    </Wallpaper>
  );
}

export default App;
