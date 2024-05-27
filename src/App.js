// src/App.js
import React from 'react';
import { Container, Box, CssBaseline, Typography, Grid } from '@mui/material';
import Header from './components/Header';
import Section from './components/Section';
import Link from '@mui/material/Link';

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container>
        <Box my={5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Section title="Education"><ul>
                <li><Typography variant="body1">IIT(ISM) Dhanbad , Jharkhand , India    (2021 - Present) </Typography>
                <Typography variant="body2">Bachelor of Technology in Computer Science and Engineering</Typography>
                </li>
                <li><Typography variant="body1">New Look School , Rajasthan , India   (2020-2021)</Typography>
                <Typography variant="body2">CBSE (Class 12th)</Typography>
                </li>
                <li><Typography variant="body1">St. Paul's School , Rajasthan , India   (2018-2019)</Typography>
                <Typography variant="body2">CBSE (Class 10th)</Typography>
                </li>
                </ul>
              </Section>
              <Section title="Experience">
              <ul>
                <li><Typography variant="body1">Skillathon 2.0  IIT(ISM) Dhanbad   (May 2022 - August 2022) </Typography>
                <Typography variant="body2">Taught C++ and basic programming to students of classes 6 - 10</Typography>
                </li>
                </ul>
              </Section>
              <Section title="Projects"><ul>
              <li><Typography variant="body1"><Link href="https://lib-info.onrender.com" target="_blank" rel="noopener noreferrer">
        Library Information System
      </Link>: A website built using MERN stack for library
               information system which allows users to view and issue available books . Admin can view /update books .  </Typography>
                <Typography variant="body2">Tech Stack: MongoDB , ReactJS , ExpressJS , NodeJS , Bootstrap</Typography>
                </li>
                <li><Typography variant="body1"><Link href="https://master-hemang.github.io/Weather_Check/" target="_blank" rel="noopener noreferrer">
        LiveWeather
      </Link> :A web-app which displays the current weather of the
                 concerned city using AccuWeatherAPI to extract information .</Typography>
                <Typography variant="body2">Tech Stack: HTML, CSS , Bootstrap, Javascript(FetchAPI)</Typography>
                </li>
                <li><Typography variant="body1"><Link href="https://asmeiitdhanbad.vercel.app/" target="_blank" rel="noopener noreferrer">
        ASME Official Website
      </Link>  : Collaboratively built the official website for ASME student chapter of IIT (ISM) Dhanbad .Admin 
                can add/update information regarding upcoming events . Has more than 500 Active Users .</Typography>
                <Typography variant="body2">Tech Stack:HTML , CSS , Bootstrap , NextJS ,GROQ and Sanity</Typography>
                </li>
                </ul>
              </Section>
              <Section title="Sports Programming">
              <ul>
              <li><Typography variant="body1"><Link href="https://codeforces.com/profile/Infinity15" target="_blank" rel="noopener noreferrer">Codeforces : </Link> </Typography>
                <Typography variant="body2">Max Rating : 1280 , Problems Count: 150+.</Typography>
                </li>
                <li><Typography variant="body1"><Link href="https://leetcode.com/hemang825vb/" target="_blank" rel="noopener noreferrer">LeetCode :</Link></Typography>
                <Typography variant="body2">Max Rating : 1464 , Problems Count: 200+.</Typography>
                </li>
                <li><Typography variant="body1"><Link href="https://www.hackerrank.com/hemang825vb" target="_blank" rel="noopener noreferrer">Hackerrank :</Link></Typography>
                <Typography variant="body2">Max Rating : 5 Star , Problems Count: 150+.</Typography>
                </li>
                </ul>
              </Section>
            </Grid>
            <Grid item xs={12} md={6}>
              
              <Section title="Skills Summary">
              <ul>
                <li><Typography variant="body1">Languages : C++ , C , JAVA , Python </Typography>
                </li>
                <li><Typography variant="body1">Tech Stacks : HTML , CSS , JavaScript , ReactJS , NodeJS , ExpressJS , Bootstrap , MongoDB , SQL , Git , Github </Typography>
                </li>
                <li><Typography variant="body1">CS Fundamentals : Data Structure and Algorithms , Operating System , Object Oriented Programming</Typography>
                </li>
                <li><Typography variant="body1">Soft Skills : Debate, Oration, Content Writing and Editing, Event Management</Typography>
                </li>
                </ul>
              </Section>
              <Section title="Achievements">
              <ul>
                <li><Typography variant="body1">Qualified JEE Advanced 2021 with  All India Rank 2755 .</Typography>
                </li>
                <li><Typography variant="body1">All India Rank of 30 in Maths Talent Search Examination 2015 .</Typography>
                </li>
                <li><Typography variant="body1"> Achieved Global Rank 109 in Codechef Starters 95 (Div 3). </Typography>
                </li>
                <li><Typography variant="body1"> Solved 500+ problems on various coding platforms and internationally-recognised forums. </Typography>
                </li>
                </ul>
              </Section>
              <Section title="Extra-curricular Activities">
              <ul>
                <li><Typography variant="body1">eBiz Ignite: The  Case Challenge(2023) organised by Birla Institute of Technology (BIT), Mesra, Ranchi : All India Rank 9 </Typography>
                </li>
                <li><Typography variant="body1">IIT(ISM) Dhanbad's Technical fest - Concetto : Winner in Quiz Competition. </Typography>
                </li>
                <li><Typography variant="body1">Winner in Inter school debate competition</Typography>
                </li>
                </ul>
              </Section>
              <Section title="Positions of Responsibility">
              <ul>
              <li><Typography variant="body1">Rhythm Club (The Art of Living Foundation) at IIT(ISM) Dhanbad </Typography>
                <Typography variant="body2">Coordinator</Typography>
                </li>
                <li><Typography variant="body1">Being Artifex Society: Programming Division at IIT(ISM) Dhanbad</Typography>
                <Typography variant="body2">Technical Coordinator</Typography>
                </li>
                </ul>
              </Section>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default App;
