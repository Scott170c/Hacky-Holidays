"use client";


/* eslint-disable @typescript-eslint/no-unused-vars */
import { keyframes } from '@emotion/react'
import '@google/model-viewer';
import Script from 'next/script';

 
// import Image from "next/image";
import {
  Box,
  Button,
  Image,
  
  Grid,
  Heading,
  Text,
} from 'theme-ui'
import dynamic from 'next/dynamic';

// const ModelViewer = dynamic(() => import('./ModelViewer'), { ssr: false });
import ModelViewer from './ModelViewer.js';

const fall = (  rotationDirection: number) => keyframes`
  from {
    transform: translateY(-10%) rotate(0deg);
  }
  to {
    transform: translateY(2000%) rotate(${rotationDirection * 360}deg);
  }
`;
export default function Home() {
  
  return (
  <Grid gap = {0}>   
  
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
          const randomSpeed = Math.random() * 5 + 5;
          return(
          <Text
          key={index}
          sx={{
            position: 'absolute',
            top: '-10%',
            zIndex: -9999,
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
                        <ModelViewer/>
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
                    fontSize: '6rem', 
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
              bg: '#FF8585',
              width: 'fit-content',
              borderRadius: '1rem',
              padding: '1rem 2rem',
              mt: '1rem'
            }}>
                <b>Register Now!</b>
            </Button>


            </Box>
       
          </Box>
     

          <Box //section 2
          sx={{
            display: 'flex',
            flexDirection: 'column',
            // alignItems: 'center',
            // justifyContent: 'center',
            backgroundColor: 'white',
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
                    fontSize: '1.5rem', 
                    fontWeight:500,
                    paddingTop: '0.5rem',
                    paddingLeft: '5rem',
                    paddingRight: '5rem'
                  }} >Design a unique PCB decoration (all art made by you!) from scratch and submit it to the project gallery via a pull request in the GitHub repository before [set date]! <br></br>
                  Once your PR gets approved, you can get your PCB decoration shipped just in time for the holidays!🎄</Heading>
              <Grid columns= {[1,1,1,3]}gap = {[50,5,20,300]} sx={{
                mt: '5vh',
                width: '100%',
                textAlign: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
                  <Box sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                    <Heading as="h4"   sx={{

                      fontFamily: 'var(--font-inter)',
                      fontWeight: 900,
                    } }>Design a Decoration</Heading>
                    <Image sx={{
                      width:'200px',
                      height:'200px',
                      borderRadius: '16px',
                    }}></Image>

                  </Box>
                  <Box sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                         <Heading as="h4"   sx={{
                      fontFamily: 'var(--font-inter)',
                      fontWeight: 900,
                    } }>Submit a PR</Heading>
                       <Image sx={{
                      width:'200px',
                      height:'200px',
                      borderRadius: '16px',
                    }}></Image>
                  </Box>
                  <Box sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                  <Heading as="h4"   sx={{
                      fontFamily: 'var(--font-inter)',
                      fontWeight: 900,
                    } }>Get it Shipped!</Heading>
                       <Image sx={{
                      width:'200px',
                      height:'200px',
                      borderRadius: '16px',
                    }}></Image>
                  </Box>
              </Grid>
              <Heading as = "h3" sx={{
                textAlign: 'left',
                fontFamily: 'var(--font-inter)',
                fontWeight: 900,
                margin: '4vh',
              }}>
                Requirements:
              </Heading>
              <Text sx={{
                textAlign: 'left',
                fontFamily: 'var(--font-inter)',
                fontWeight: 900,
                margin: '2vh',
                ml: '4vh'
              }}>
                - Must be a student in high school or below </Text>
              
          </Box>
          <Box sx={{
            backgroundColor: '#FF8D8D',
            height: '250%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: ['3vw','1.2vw'],
            color: 'white'
          }}>
            Made with ❤️ and ❄️ by Bright Li (@bright li) & Scott Chiang (@Scott)
            </Box>
    </Grid>
  );
}
