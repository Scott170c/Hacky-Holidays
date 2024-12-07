"use client";


/* eslint-disable @typescript-eslint/no-unused-vars */
import { keyframes } from '@emotion/react';
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
import Footer from './components/footer';

import dynamic from 'next/dynamic';
const Top = dynamic(() => import('./components/top'), { ssr: false });
import FAQcard from './components/FAQcard';
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

const faqItems = {question: 'What is Next.js?', answer: 'Next.js is a React framework for production.' };

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('@google/model-viewer');
    }
  }, []);
  return (
  <Box>
  <Grid gap = {0} sx={{
    background: 'linear-gradient(to bottom right, rgba(70, 181, 255, 1), rgba(227, 244, 255, 1))', 
    // background: 'linear-gradient(to bottom right, rgba(70, 181, 255, 1), rgba(227, 244, 255, 1))',
    // // height: 'auto',
    // display: 'block',
    // display: 'flex',
    // flexDirection: 'column',
    // height:"100%",
    // alignItems: 'center',
    minHeight: ['400vh', '275vh'],
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

        <Box
        sx={{
          position: 'absolute',
          top: -10,
          left: 0,
        }}>
          <a href="https://hackclub.com" target="_blank">
          <Button  >
            <Image src="https://assets.hackclub.com/flag-orpheus-top.svg" sx ={{
              height:"10vh"
            }}></Image>

        
          </Button>

          </a>
          

        </Box>

       
    
        
        {Array.from({ length: 50 }).map((_, index) => {
          const randomRotationDirection = Math.random() > 0.5 ? 1 : -1;
          const randomSpeed = Math.random() * 10 + 5;
          return(
          <Text
          key={index}
          sx={{
            position: 'absolute',
            top: '-10%',
            zIndex: 0,
            left: `${Math.random() * 90}vw`,
            animation: `${fall(randomRotationDirection)} ${randomSpeed}s linear infinite`,
            color: 'white',
            fontSize: `${Math.random() * 20 + 10}px`,
            animationDelay: `${Math.random() * 10}s`,
            transform: `rotate(${randomRotationDirection * 360}deg)`,



          }}
          >
            ❄
          </Text>)
        })}
      
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

            mt: '20vh',
            // textAlign: 'center'
          }}>
              <Heading as="h3"   sx={{ 
                    margin: 20,
                    fontFamily: 'var(--font-inter)', 
                    fontSize: '1.55vw', 
                    fontWeight:800,
                    paddingTop: '1rem',
                    paddingLeft: '5.5rem',
                    paddingRight: '5rem',
                    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

                    color: 'white'
                  }}>Want a cool christmas decoration? A cool gift for someone you know? Design a unique PCB decoration (all art made by you!) from scratch and submit it to the project gallery via a pull request in the GitHub repository before [set date]!
                  Once your PR gets approved, you can get your PCB decoration shipped just in time for the holidays!🎄 It is as simple as:</Heading>
          
         
                  <ThreeGrid/>
              <Heading as="h3"   sx={{ 
                    margin: 20,
                    fontFamily: 'var(--font-inter)', 
                    fontSize: '1.55vw', 
                    fontWeight:800,
                    paddingTop: '0.5rem',
                    paddingLeft: '5.5rem',
                    paddingRight: '5rem',
                    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    color: 'white',
                  }}>At the end, Submissions will be peer-reviewed and voted for the top 3. The top 3 will be re-made, and can be used to give out as gifts!<br></br><br></br> 
          <Box sx={{fontsize: '5vw'}}>FAQ:</Box></Heading>
          <Grid columns = {[1,1,1,3]}gap = {[50,5,20,0]} sx = {{paddingTop: '1.5vh', position: 'relative'}}>
            <FAQcard question="What are the Requirements?" answer="Your PCB must be under 100mm x 100m in size, 
                                                                  and all parts must come from the parts list.  Since
                                                                  This is an addition to OnBoard, your project must 
                                                                  also follow OnBoard Requirements." />
            <FAQcard question="When are Submission deadlines?" answer="The deadline to submit is ___, but if we get higher demand we will extend it. If you want to get your decoration in time for Christmas it is best to get it done before the ___!" />
            <FAQcard question="What about the OnBoard Grant?" answer="You can still apply for the OnBoard grant, but you cannot receive two grants for the same PCB design. Your new PCB must be significantly different, offering a chance to improve your previous design if you've already used your grant." />
          </Grid><Heading as="h2" variant="styles.h1" 
                sx={{ 
                  fontFamily: 'var(--font-inter)', 
                  fontSize: '1.9rem', 
                  fontWeight:800,
                  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  color: 'white'
                }}>Any more questions? Ask in <a style={{color: 'rgba(90, 142, 248, 1)'}} href="https://hackclub.slack.com/archives/C083SK3G5D3">#hacky-holidays</a>!</Heading></Box>
    </Grid>
    <Footer></Footer>
    </Box>
  );
}
