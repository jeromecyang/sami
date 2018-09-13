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
          <a href="https://www.youtube.com/channel/UCsofLyXgW1Ra1Rg4-38tbgg" target="_blank"><FaYoutube /></a>
          <a href="http://blog.jeromeyang.com/" target="_blank"><FaBlogger /></a>
        </Typography>
      </Wallpaper>
      <Section>
        <Typography align="center" variant="display3" paragraph>about</Typography>
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
        <Typography align="center" paragraph>
          <img src="https://www.hubspot.com/hubfs/HubSpot_Logos/HSLogo_color.svg?t=1536803881422" style={{ 'vertical-align': 'middle' }} />
          <img src="https://static1.squarespace.com/static/595cf799099c0165c82db072/t/595cf7e16b8f5ba9a838f432/1536596881878/" style={{ filter: 'invert(100%)', width: '150px', 'vertical-align': 'middle' }} />
        </Typography>
      </Section>
      <Section>
        <Typography align="center" variant="display3" paragraph>stories</Typography>
        <Grid container justify="center" spacing={16}>
          {new Array(16).fill(0).map(() => (
            <Grid item>
              <Card></Card>
            </Grid>
          ))}
        </Grid>
      </Section>
      <Section>
        <Typography align="center" variant="display3">connect</Typography>
      </Section>
    </Master>
  );
}

export default App;
