"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { keyframes } from '@emotion/react';
import Snowfall from 'react-snowfall';
import { useEffect } from 'react';
import { Box, Image, Heading, Grid } from 'theme-ui';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('./components/footer'), { ssr: false });
const Top = dynamic(() => import('./components/top'), { ssr: false });
const FAQcard = dynamic(() => import('./components/FAQcard'), { ssr: false });
const ThreeGrid = dynamic(() => import('./components/3box'), { ssr: false });

const fall = (rotationDirection: number) => keyframes`
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
    <Box sx={{ position: 'relative' }}>
      <link rel="icon" href="https://assets.hackclub.com/icon-rounded.svg"></link>
      <Snowfall speed={[0.5, 3]} radius={[2.0, 4.0]} snowflakeCount={100} wind={[-0.1, 0.1]} style={{ position: 'fixed', top: "0" }} />
      <Box sx={{
        minHeight: ['265vh', '260vh', '230vh'],
        px: ['1rem', '2rem', '5rem'],
      }}>
        <Box
          sx={{
            position: 'absolute',
            top: [-380, -50],
            left: 0,
          }}>
          <a href="https://hackclub.com" target="_blank">
            <Image src="https://assets.hackclub.com/flag-orpheus-top.svg" sx={{
              height: "10vh"
            }}></Image>
          </a>
        </Box>

        <Top />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'black',
            width: '100%',
<<<<<<< HEAD
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
=======
            height: ['auto', '100vh'],
            mt: '4vh',
}}>
          <br></br>
          <Heading as="h3" sx={{
            fontFamily: 'var(--font-inter)',
            fontSize: ['1rem', '1.5rem'],
            fontWeight: 700,
            paddingLeft: ['1.5rem', '2.5rem', '3.5rem'],
            paddingRight: ['1.5rem', '2.5rem', '3.5rem'],
            paddingTop: '5vh',
            paddingBottom: '2vh',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            color: 'white',
            textAlign: 'center',
          }}>Want a cool christmas decoration? A cool gift for someone you know? Design a unique PCB decoration from scratch and submit it via PR to OnBoard before the 30th!
            Once your PR gets approved, you will get your PCB decoration just in time for the holidays!🎄</Heading>

          <ThreeGrid />

          <Heading as="h3" sx={{
            margin: '3',
            paddingLeft: '4vw',
            paddingRight: '4vw',
            fontFamily: 'var(--font-inter)',
            fontSize: ['1rem', '1.5rem'],
            fontWeight: 700,
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            color: 'white',
            textAlign: 'center',
          }}>At the end, Submissions will be peer-reviewed and voted for the top 3. The top 3 will be re-made, and can be given out as gifts!</Heading>

          <Heading as="h2" sx={{
            fontFamily: 'var(--font-inter)',
            fontSize: ['1.5rem', '2rem'],
            fontWeight: 800,
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            color: 'white',
            mt: '2rem',
            mb: '1rem',
            textAlign: 'center',
          }}>Frequently Asked Questions</Heading>

          <Grid columns={[1, 1, 1, 3]} gap={[20, 20, 20]} sx={{ paddingTop: '1.5vh' }}>
            <FAQcard question="What are the Requirements?" answer="Your PCB must be under 100mm x 100m in size, and all parts must come from the parts list. Since this is an addition to OnBoard, your project must also follow OnBoard Requirements." />
            <FAQcard question="When are Submission deadlines?" answer="The deadline to submit is the 30th, but if we get higher demand there is a possibility to extend it. If you want to get your decoration in time for Christmas it is best to get it done before the 15th!" />
>>>>>>> 80b35b8ff8856a00997af22c810cf8cf3bb4b2b5
            <FAQcard question="What about the OnBoard Grant?" answer="You can still apply for the OnBoard grant, but you cannot receive two grants for the same PCB design. Your new PCB must be a different design or a significant change to one you made for this." />
          </Grid>

          <Heading as="h2" variant="styles.h1" sx={{
            fontFamily: 'var(--font-inter)',
            fontSize: ['1rem', '1.5rem'],
            fontWeight: 700,
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            color: 'white',
            paddingBottom: '4vh',
            textAlign: 'center',
          }}>Any more questions? Ask in <a style={{ color: 'rgba(90, 142, 248, 1)' }} href="https://hackclub.slack.com/archives/C083SK3G5D3">#hacky-holidays</a>!
          </Heading>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}