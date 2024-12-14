import {
    Box,
    Button,
    Image,
    Grid,
    Heading,
    Text,
  } from 'theme-ui';
  import dynamic from 'next/dynamic';

  const ModelViewer = dynamic(() => import('../ModelViewer'), { ssr: false });

 const tipitytopity = ()=> {
    return (
        <Box
        sx={{
          display: 'flex',
          flexDirection:['column','column', 'row'],
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          paddingRight: ['0rem', '3rem'],
          width: '100%',
          margin: ['auto'],
          paddingBottom: '15vh',
          mt: ['40vh', '5vh'],
          backgroundImage: '../public/background2.png',

          height: ['2vh', '90vh'],
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
            // textAlign: 'center'
          }}
          >
          <Heading as="h1" variant="styles.h1" 
                sx={{ 
                  fontFamily: 'var(--font-inter)', 
                  fontSize: ['2rem', '6.5rem'], 
                  fontWeight:800,
                  textAlign: ['center','center','left'],
                  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' 
                }}>
            Hacky Holidays!
          </Heading>
          <Heading as="h2" variant="styles.h1" 
                sx={{ 
                  fontFamily: 'var(--font-inter)', 
                  fontSize: ['0.5rem','1.9rem'], 
                  fontWeight:800,
                  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' 
                }}>
            Design a PCB holiday decoration this winter, get one shipped!
          </Heading>
          <a href = "/guide">
          <Button
          sx={{
            mx: ['auto',0],
            fontFamily: 'var(--font-inter)',
            fontSize: ['0.4rem', 'calc(0.6vw + 0.6vh)'],
            fontWeight: 900,
            color: 'white',
            bg: '#f90b0b',
            // width: 'fit-content',
            borderRadius: '2rem',
            padding: ['0.6rem 0.6rem', '1rem 2rem'],
            mt: '1rem',

          }}>
              <b>&nbsp;Learn to Make a Decoration &nbsp; ➜</b>
          </Button>
          </a>


          </Box>
     
        </Box>
   

    )
}
export default tipitytopity;