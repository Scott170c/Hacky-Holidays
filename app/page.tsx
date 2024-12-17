"use client";


/* eslint-disable @typescript-eslint/no-unused-vars */
import { keyframes } from '@emotion/react';
import Snowfall from 'react-snowfall';
// import '@google/model-viewer';
// import Script from 'next/script';
import { useEffect } from 'react';
//  import { tipitytopity } from './components/top'
// import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Image,
  Grid,
  Heading,
  Text,
} from 'theme-ui';
const Footer = dynamic(() => import('./components/footer'), { ssr: false });

import dynamic from 'next/dynamic';
const Top = dynamic(() => import('./components/top'), { ssr: false });
const FAQcard = dynamic(() => import('./components/FAQcard'), {ssr: false});
const ThreeGrid = dynamic(() => import('./components/3box'), { ssr: false });
// const ModelViewer = dynamic(() => import('./ModelViewer'), { ssr: false });
const ModelViewer = dynamic(() => import('./ModelViewer'), { ssr: false });

const fall = (  rotationDirection: number) => keyframes`
  from {
    transform: translateY(-10%) rotate(0deg);
  }
  to {
    transform: translateY(4700%) rotate(${rotationDirection * 360}deg);
  }
`;

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('@google/model-viewer');
    }
  }, []);
  return (
  <Box sx={{position: 'relative'}}>
    <link rel="icon" href = "https://assets.hackclub.com/icon-rounded.svg"></link>
    <Snowfall speed={[0.5, 3]} radius={[2.0, 4.0]} snowflakeCount={100} wind={[-0.1, 0.1]} style={{position:'fixed', top:"0"}}/>
  <Box  sx={{
    //background: 'linear-gradient(180deg, rgba(0,153,255,1) 0%, rgba(130,205,255,1) 100%);', 
    // background: 'linear-gradient(to bottom right, rgba(70, 181, 255, 1), rgba(227, 244, 255, 1))',
    // display: 'block',
    // display: 'flex',
    // flexDirection: 'column',
    // height:"100%",
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',

    // alignItems: 'center',
    minHeight: ['265vh' ,'260vh', '230vh'],
    // background: 'linear-gradient(to bottom right, rgba(70, 181, 255, 1), rgba(227, 244, 255, 1))', 
    // display: 'grid',
    // gridTemplateRows: 'auto auto 1fr auto', // Allows more explicit control
    // minHeight: '100vh',
  
  
    // display: 'flex',
    // minHeight: '100vh', // Ensure it covers at least the viewport height
    // padding: '20px',
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'flex-start', // Ensure content starts from the top

    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'flex-start', // Ensure content starts from the top

    // flexDirection: 'column',
 
    // overflow: 'auto',
    // padding:'20px',
  }}>

        <Box //grid1
        sx={{
          position: 'absolute',
          top: [-380, -50],
          left: 0,
        }}>
          <a href="https://hackclub.com" target="_blank">
            <Image src="https://assets.hackclub.com/flag-orpheus-top.svg" sx ={{
              height:"10vh"
            }}></Image>

        

          </a>
          

        </Box>

       
    
        
        
      
            <Top />

       

          <Box //section 2
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: 'white',
            color: 'black',
            width: '100%',
            // margin: 'auto',
            height:['auto', '100vh'],
            // textAlign: 'center'
          }}>
            <br></br>
              <Heading as="h3"   sx={{ 
                    fontFamily: 'var(--font-inter)', 
                    fontSize: ['0.8rem', '1.2rem'], 
                    fontWeight:700,
                    paddingLeft: '6vw',
                    paddingRight: '6vw',
                    paddingTop: '12vh',
                    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    color: 'white'
                  }}>Want a cool christmas decoration? A cool gift for someone you know? Design a unique PCB decoration from scratch and submit it via PR to OnBoard before the 30th!
                  Once your PR gets approved, you will get your PCB decoration just in time for the holidays!🎄</Heading>
          
         
                  <ThreeGrid/>
              <Heading as="h3"   sx={{ 
                    margin: '3',
                    paddingLeft: '4vw',
                    paddingRight: '4vw',
                    fontFamily: 'var(--font-inter)', 
                    fontSize: ['0.8rem', '1.2rem'], 
                    fontWeight:700,
                    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    color: 'white'
                  }}>At the end, Submissions will be peer-reviewed and voted for the top 3. The top 3 will be re-made, and can be given out as gifts!<br></br><br></br> 
          <Box sx={{fontsize: '5vw'}}>FAQ:</Box></Heading>
          <Grid columns = {[1, 1, 1, 3]}gap = {[0]} sx = {{paddingTop: '1.5vh'}}>
            <FAQcard question="What are the Requirements?" answer="Your PCB must be under 100mm x 100m in size, 
                                                                  and all parts must come from the parts list.  Since
                                                                  This is an addition to OnBoard, your project must 
                                                                  also follow OnBoard Requirements." />
            <FAQcard question="" answer="e" />
            <FAQcard question="What about the OnBoard Grant?" answer="You can still apply for the OnBoard grant, but you cannot receive two grants for the same PCB design. Your new PCB must be a different design or a significant change to one you made for this." />
          </Grid>
          <Heading as="h2" variant="styles.h1" 
                sx={{ 
                  fontFamily: 'var(--font-inter)', 
                  fontSize: ['0.9rem', '1.9rem'], 
                  fontWeight:700,
                  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  color: 'white',
                  paddingBottom: '4vh',
                }}>Any more questions? Ask in <a style={{color: 'rgba(90, 142, 248, 1)'}} href="https://hackclub.slack.com/archives/C083SK3G5D3">#hacky-holidays</a>!
          </Heading>
          </Box>
          </Box>
          <Footer></Footer>
    </Box>
  );
}