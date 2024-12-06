"use client";


/* eslint-disable @typescript-eslint/no-unused-vars */
import { keyframes } from '@emotion/react';
// import '@google/model-viewer';
// import Script from 'next/script';
import { useEffect } from 'react';
 
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
  <Grid gap = {0} sx={{
    backgroundImage: 'linear-gradient(#0099FF, #A5DBFF)', 
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

       
    
        {/* {Array.from({ length: 50 }).map((_, index) => (
          <span
            key={index}
            className="snowflake"
            style={{
              left: `${Math.random() * 100}vw`,
              fontSize: `${Math.random() * 20 + 10}px`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          >
            ❄
          </span>
        ))} */}
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
      
            
          <Box
          sx={{
            display: 'flex',
            flexDirection:['column','column', 'row'],
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            padding: '1rem',
            paddingRight: '3rem',
            width: '100%',
            margin: 'auto',

            mt: '15vh',
            textAlign: 'center',
            // height: '65vh'
          }}
          >
        {typeof window !== 'undefined' && <ModelViewer />}
        {/* 
            <Image 
                src="https://cloud-1mi3pnd3v-hack-club-bot.vercel.app/0image.png" 
                alt="Example PCB!" 
                style={{ width: '35%', height: '34%' }}
                sx={{
                  width: '300px',
                  height: '200px',
                  // borderRadius: '16px',
                  // boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
            /> */}
            <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
              // justifyContent: 'left',
              ml: ['0vw','2vw'],
              // mt: ['1%','12%'],
              maxWidth: '100%',
              textAlign: 'center'
            }}
            >
            <Heading as="h1" variant="styles.h1" 
                  sx={{ 
                    fontFamily: 'var(--font-inter)', 
                    fontSize: '7rem', 
                    fontWeight:900,
                    textAlign: ['center','center','left']


                  }}>
              Hacky Holidays!
            </Heading>
            <Heading as="h2" variant="styles.h1" 
                  sx={{ 
                    fontFamily: 'var(--font-inter)', 
                    fontSize: '2rem', 
                    fontWeight:900 
                  }}>
              Design a PCB holiday decoration <u><a style={{color:"#5297FF"}} href="https://google.com">this winter</a></u>, get a PCB grant!
            </Heading>
            <Button
            sx={{
              mx: ['auto',0],
              fontFamily: 'var(--font-inter)',
              fontSize: '1.5rem',
              fontWeight: 900,
              color: 'white',
              backgroundImage: 'linear-gradient(to right, #eb3941, #f15e64, #e14e53, #e2373f);',
              width: 'fit-content',
              borderRadius: '3rem',
              padding: '1rem 2rem',
              cursor: 'pointer',
              mt: '1rem',
              backgroundSize: '300% 100%',
              transition: 'background 0.3s ease-in-out',
              '&:hover': {
              animation: `background-position: 100% 0; box-shadow: 0 5px 15px rgba(242, 97, 103, .4)`,
             },
            }}>
                <b>Come Build with Us ➜</b>
            </Button>


            </Box>
       
          </Box>
     

          <Box //section 2
          sx={{
            display: 'flex',
            flexDirection: 'column',
            // alignItems: 'center',
            // justifyContent: 'center',
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
                    paddingTop: '0.5rem',
                    paddingLeft: '5rem',
                    paddingRight: '5rem',
                    color: 'white'
                  }}>Design a unique PCB decoration from scratch and submit it to the project gallery via a pull request in the GitHub repository before [set date]! <br></br>
                  Once your PR gets approved, you can get your PCB decoration shipped just in time for the holidays!🎄</Heading>
                <Grid columns= {[1,1,1, 3]}gap = {[50,5,20,50]} sx={{
                mt: '5vh',
                width: 'auto',
                textAlign: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 20%)',
                borderRadius: '32px',
                mx: '32px',
                paddingBottom: '2vh',
                paddingTop: '2vh',
              }}>
                  <Box sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    paddingTop: '1.7rem'
                  }}>
                    <Heading as="h4"   sx={{
                      fontFamily: 'var(--font-inter)',
                      fontWeight: 900,
                      fontSize: '1.5vw',
                      paddingBottom: '1.2rem'
                    } }>Design</Heading>
                    <Image sx={{
                      width:'28rem',
                      height:'30rem',
                      borderRadius: '16px',
                      paddingBottom: '3rem',
                    }}></Image>

                  </Box>
                  <Box sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    paddingTop: '1.7rem'
                  }}>
                         <Heading as="h4"   sx={{
                      fontFamily: 'var(--font-inter)',
                      fontWeight: 900,
                      fontSize: '1.5vw',
                      paddingBottom: '1.2rem'
                    } }>Code</Heading>
                       <Image sx={{
                      width:'28rem',
                      height:'30rem',
                      borderRadius: '16px',
                      paddingBottom: '2.5rem'
                    }}></Image>
                  </Box>
                  <Box sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    paddingTop: '1.7rem'
                  }}>
                  <Heading as="h4"   sx={{
                      fontFamily: 'var(--font-inter)',
                      fontWeight: 900,
                      fontSize: '1.5vw',
                      paddingBottom: '1.2rem'
                    } }>Submit</Heading>
                       <Image sx={{
                      width:'28rem',
                      height:'30rem',
                      borderRadius: '16px',
                      paddingBottom: '2.5rem'
                    }}></Image>
                  </Box>
              </Grid>
            <Box sx={{height: '100vh'}}>
              <Heading as = "h3" sx={{
                textAlign: 'left',
                fontFamily: 'var(--font-inter)',
                flexDirection: 'column',
                display: 'flex',
                fontWeight: 900,
                margin: '4vh',
                paddingLeft: '-10vh'
              }}>
              </Heading>

                <Heading sx={{
                textAlign: 'left',
                fontFamily: 'var(--font-inter)',
                fontWeight: 900,
                margin: '2vh',
                // display: 'flex',
                // flexDirection: 'column',
                ml: '4vh',
                color: 'black',
                fontSize: '1.75vw',
                overflow: 'hidden'
              }}>
                FAQ:
              </Heading>
              <Box sx={{height: '5vw', width: '10vw',}}>Hello World</Box>
          </Box>
          <Box sx={{
            backgroundColor: '#FFA5A5',
            height: '70%',
            position: 'relative',
            bottom: '0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            // py: '10px',
            justifyContent: 'center',
            fontSize: ['3vw','1.2vw'],
            color: 'white'
          }}>
            Made with ❤️ and ❄️ by Bright Li (@bright li) & Scott Chiang (@Scott)
            </Box>
          </Box>
    </Grid>
  );
}
