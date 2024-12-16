import { Box, Image, Grid, Heading, Text } from 'theme-ui';

const Threebox = () => {
  return (
    <Grid columns={[1, 1, 1, 3]} gap={[20, 20, 20]} sx={{
      mt: '3vh',
      maxwidth: '20rem',
      px: ['0.5rem', '1rem', '1.5rem'],
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.31)',
      borderRadius: '1rem',
      mx: 'auto',
      mb: '5vh',
      padding: '2.5vh',
    }}>
      <Box sx={{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        mx: '1vw',
        paddingTop: ['1rem', '2rem'],
        borderRadius: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '1rem',
        overflow: 'hidden',
      }}>
        <Heading as="h4" sx={{
          fontFamily: 'var(--font-inter)',
          fontWeight: 900,
          fontSize: ['1rem', '1.5vw'],
          paddingBottom: '1rem',
          color: 'white',
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
        }}>Design a PCB</Heading>
        <Image sx={{
          width: '100%',
          height: '300px',
          borderRadius: '10px',
          paddingBottom: '1rem',
          objectFit: 'contain',
        }}
          src="https://cloud-qonvrpxwd-hack-club-bot.vercel.app/0image.png"
        />
        <Text sx={{
          fontFamily: 'var(--font-inter)',
          fontSize: ['0.8rem', '1rem'],
          color: 'white',
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
        }}>Create your own PCB design and bring it to life!</Text>
      </Box>
      <Box sx={{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        mx: '1vw',
        paddingTop: ['1rem', '2rem'],
        borderRadius: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '1rem',
        overflow: 'hidden',
      }}>
        <Heading as="h4" sx={{
          fontFamily: 'var(--font-inter)',
          fontWeight: 900,
          fontSize: ['1rem', '1.5vw'],
          paddingBottom: '1rem',
          color: 'white',
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
        }}>Design Art</Heading>
        <Image sx={{
          width: '100%',
          height: '300px',
          borderRadius: '10px',
          paddingBottom: '1rem',
          objectFit: 'contain',
        }} src="https://cloud-go1uacpkk-hack-club-bot.vercel.app/0image.png" />
        <Text sx={{
          fontFamily: 'var(--font-inter)',
          fontSize: ['0.8rem', '1rem'],
          color: 'white',
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
        }}>Create stunning art for your PCB design!</Text>
      </Box>
      <Box sx={{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        mx: '1vw',
        paddingTop: ['1rem', '2rem'],
        borderRadius: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '1rem',
        overflow: 'hidden',
      }}>
        <Heading as="h4" sx={{
          fontFamily: 'var(--font-inter)',
          fontWeight: 900,
          fontSize: ['1rem', '1.5vw'],
          paddingBottom: '1rem',
          color: 'white',
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
        }}>Create Firmware</Heading>
        <Image sx={{
          width: '100%',
          height: '300px',
          borderRadius: '10px',
          paddingBottom: '1rem',
          objectFit: 'contain',
        }}
          src="https://cloud-ix9a26xw1-hack-club-bot.vercel.app/0image.png"
        />
        <Text sx={{
          fontFamily: 'var(--font-inter)',
          fontSize: ['0.8rem', '1rem'],
          color: 'white',
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
        }}>Develop firmware to control your PCB!</Text>
      </Box>
    </Grid>
  )
}
export default Threebox;