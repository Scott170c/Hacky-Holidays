"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { keyframes } from '@emotion/react'

// import Image from "next/image";
import {
  Box,
  Button,
  Image,
  
  Grid,
  Heading,
  Text,
} from 'theme-ui'
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
      
          <Box>
            
          </Box>   
          <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            padding: '1rem',
            width: '100%',
            margin: 'auto',
            textAlign: 'center'
          }}
          >
            <Image 
                src="https://cdn.discordapp.com/attachments/1049738373880881217/1310824966178209792/image.png?ex=6746a061&is=67454ee1&hm=d2896e141425e66ea0738ac6090182920d0e1be921bdc737555de75a011d45a2&" 
                alt="Example PCB!" 
                style={{ width: '25%', height: '24%', paddingTop: '3vh'}}
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
            />
            <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
              // justifyContent: 'left',
              ml: '2vw',
              mt: '12%',
              maxWidth: '100%',
              textAlign: 'center'
            }}
            >
            <Heading as="h1" variant="styles.h1" 
                  sx={{ 
                    fontFamily: 'var(--font-inter)', 
                    fontSize: '5rem', 
                    fontWeight:900,
                    textAlign: 'left'


                  }}>
              Hacky Holidays!
            </Heading>
            <Heading as="h2" variant="styles.h1" 
                  sx={{ 
                    fontFamily: 'var(--font-inter)', 
                    fontSize: '1.5rem', 
                    fontWeight:900 
                  }}>
              Design a PCB holiday decoration this winter, get a PCB grant!
            </Heading>
            <Button
            sx={{
              fontFamily: 'var(--font-inter)',
              fontSize: '1rem',
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
     

          <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            // alignItems: 'center',
            // justifyContent: 'center',
            backgroundColor: 'white',
            color: 'black',
            width: '100%',
            // margin: 'auto',
            height: '100vh',
            mt: '20vh',
            // textAlign: 'center'
          }}>
              <Heading as="h3"   sx={{ 
                    margin: 20,
                    fontFamily: 'var(--font-inter)', 
                    fontSize: '1.5rem', 
                    fontWeight:900 
                  }} >Info Blurb goes here</Heading>
              <Grid columns={3} gap = {300} sx={{
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
          <div style={{
            backgroundColor: '#FF8D8D',
            height: '250%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2vw',
            color: 'white'
          }}>
            Made with ❤️ and ❄️ by Bright Li (@bright li) & Scott Chiang (@Scott)
            </div>
    </Grid>
  );
}
