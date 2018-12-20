import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styled from "styled-components";
import { FaGithub, FaTwitter, FaFacebook, FaLinkedin, FaEnvelope, FaBlogger, FaYoutube } from 'react-icons/fa';
import Card from './Card';

const Master = styled.div`
  max-width: 960px;
  width: 100%;
  padding: 0 20px;

  a {
    color: #000;
    text-decoration: none;
    margin: 0 5px;
  }
`;

const Wallpaper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`;

const Section = styled.div`
  margin-top: 40px;
`;

const App = () => {
  return (
    <Master>
      <Wallpaper>
        <Typography variant="display4" align="center" color="textPrimary">
          Lifetime Sojourner
        </Typography>
        <Typography variant="title" align="center" color="textPrimary">
          <a href="mailto:hi@jeromeyang.com" target="_blank"><FaEnvelope /></a>
          <a href="https://github.com/jeromecyang" target="_blank"><FaGithub /></a>
          <a href="https://twitter.com/jeromyang" target="_blank"><FaTwitter /></a>
          <a href="https://www.facebook.com/jeromeyangencounters" target="_blank"><FaFacebook /></a>
          <a href="https://www.linkedin.com/in/jerome-yang-91995a4b" target="_blank"><FaLinkedin /></a>
          <a href="https://www.youtube.com/channel/UCsofLyXgW1Ra1Rg4-38tbgg" target="_blank"><FaYoutube /></a>
          <a href="http://blog.jeromeyang.com/" target="_blank"><FaBlogger /></a>
        </Typography>
        <Typography variant="title" align="center" color="textSecondary" paragraph>
          Jerome Yang
        </Typography>
      </Wallpaper>

      <Section>
      </Section>
        <Typography align="center" variant="display3" paragraph>about</Typography>
      <Section>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6} align="center">
            <img src="./pic.jpg" style={{ 'width': '280px' }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography paragraph>
              I'm a software engineer, traveler and blogger based in Boston, MA.
            </Typography>
            <Typography paragraph>
              As a software engineer, I write code, but not for the sake of writing code. I'm convicted that software programming is nothing but a tool that helps people solve their everyday problems, and the problems that I'm interested to solve are: data manipulation and visualization, maps and geospatial information, linguistics and communication.
            </Typography>
            <Typography paragraph>
              As a traveler, I have visited 21 countries, including several less traveled ones such as Latvia, Estonia, Uzbekistan and Kyrgyzstan. Travels are an important projects for me, in which I encounter people, culture, history and reality.
            </Typography>
            <Typography paragraph>
              As a blogger, I write articles.
            </Typography>
          </Grid>
        </Grid>
      </Section>
      <Section>
        <Typography align="center" variant="display3" paragraph>stories</Typography>
      </Section>
      <Section>
        <Typography align="center" variant="display3">connect</Typography>
      </Section>
    </Master>
  );
}

export default App;
