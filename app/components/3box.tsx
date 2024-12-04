import {
    Box,
    Button,
    Image,
    Grid,
    Heading,
    Text,
  } from 'theme-ui';

const Threebox = () => {
    return(
        <Grid columns= {[1,1,1,3]}gap = {[50,5,20,0]} sx={{
            mt: '5vh',
            width: 'fit-content',
            px: '3vw',
            textAlign: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.31)',
            borderRadius: '20px',
            mx: '32px',
            mb: '5vh',
            paddingBottom: '2vh',
            paddingTop: '2vh',
          }}>
              <Box sx={{
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                mx: '1vw',
                paddingTop: '2rem',
                borderRadius: '20px',
              }}>
                <Heading as="h4"   sx={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 900,
                  fontSize: '1.5vw',
                  paddingBottom: '1.2rem',
                  color: 'white',
                  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' 
                } }>Build</Heading>
                <Image sx={{
                  width:'27vw',
                  height: '28vw',
                  borderRadius: '20px',
                  paddingBottom: '2rem',
                }}
                src = "https://cloud-qonvrpxwd-hack-club-bot.vercel.app/0image.png"
                ></Image>

              </Box>
              <Box sx={{
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '2rem',
                mx: '1vw',

                textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' 
              }}>
                     <Heading as="h4"   sx={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 900,
                  fontSize: '1.5vw',
                  color: 'white',
                  paddingBottom: '1.2rem'
                } }>Design</Heading>
                   <Image sx={{
                  width:'27vw',
                  height:'28vw',
                  borderRadius: '16px',
                  paddingBottom: '2rem'
                }} src="https://cloud-go1uacpkk-hack-club-bot.vercel.app/0image.png"></Image>
              </Box>
              <Box sx={{
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                mx: '1vw',

                flexDirection: 'column',
                paddingTop: '2rem'
              }}>
              <Heading as="h4"   sx={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 900,
                  fontSize: '1.5vw',
                  paddingBottom: '1.2rem',
                  color: 'white',
                  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' 
                } }>Code</Heading>
                   <Image sx={{
                  width:'27vw',
                  height:'28vw',
                  borderRadius: '16px',
                  paddingBottom: '2rem'
                }}
                src = "https://cloud-ix9a26xw1-hack-club-bot.vercel.app/0image.png"
                ></Image>
              </Box>
          </Grid>
    )
}
export default Threebox;