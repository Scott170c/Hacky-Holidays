"use client";


/* eslint-disable @typescript-eslint/no-unused-vars */
import { keyframes } from '@emotion/react'
// import '@google/model-viewer';
// import Script from 'next/script';
import { useEffect } from 'react';
//  import { tipitytopity } from './components/top'
// import Image from "next/image";
import {
  Box,
  Button,
  Image,
  Grid,
  Heading,
  Text,
} from 'theme-ui';
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
export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('@google/model-viewer');
    }
  }, []);
  return (
  
  <Grid gap = {0} sx={{
    background: 'linear-gradient(to bottom right, #0099FF, #74C8FF)', 
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
                    fontSize: '2rem', 
                    fontWeight:800,
                    paddingTop: '0.5rem',
                    paddingLeft: '5.5rem',
                    paddingRight: '5rem',
                    color: 'white',
                    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  }}>Design a unique PCB decoration (all art made by you!) from scratch and submit it to the project gallery via pull request in the GitHub repository before [set date]! <br></br>
                  Once your PR gets approved, you can get your PCB decoration shipped just in time for the holidays!🎄</Heading>
             <ThreeGrid/>
              <Heading as="h3"   sx={{ 
                    margin: 20,
                    fontFamily: 'var(--font-inter)', 
                    fontSize: '2rem', 
                    fontWeight:800,
                    paddingTop: '0.5rem',
                    paddingLeft: '5rem',
                    paddingRight: '5rem',
                    color: 'white',
                    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  }}>Design a unique PCB decoration (all art made by you!) from scratch and submit it to the project gallery via pull request in the GitHub repository before [set date]! <br></br>
                  Once your PR gets approved, you can get your PCB decoration shipped just in time for the holidays!🎄</Heading>
          <Box>
            <FAQcard question="What is React?" answer="React is a JavaScript library for building user interfaces." />
          </Box>

          <Box sx={{
            backgroundColor: '#FFA5A5',
            height: '8vh',
            width: '100%',
            position: 'relative',
            bottom: '0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontWeight: '500px',
            // py: '10px',
            justifyContent: 'center',
            fontSize: '2.5vh',
            color: 'white'
          }}>
            Made with ❤️ by @bright li & @Scott
            </Box>
          </Box>
    </Grid>
  );
}
