import { Box, Button, Heading } from 'theme-ui';
import dynamic from 'next/dynamic';

const ModelViewer = dynamic(() => import('../ModelViewer'), { ssr: false });

const tipitytopity = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: ['column', 'column', 'row'],
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        padding: ['1rem', '2rem', '3rem'],
        width: '100%',
        margin: 'auto',
        mt: ['5vh', '5vh', '5vh'],
        backgroundImage: 'url(../public/background2.png)',
        backgroundSize: 'cover',
        height: ['auto', 'auto', '80vh'],
        scale: '0.9',
      }}
    >
      {typeof window !== 'undefined' && <ModelViewer />}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: ['center', 'center', 'flex-start'],
          ml: ['0', '0', '2vw'],
          maxWidth: '100%',
          textAlign: ['center', 'center', 'left'],
          padding: ['1rem', '2rem', '3rem'],
        }}
      >
        <Heading as="h1" variant="styles.h1"
          sx={{
            fontFamily: 'var(--font-inter)',
            fontSize: ['2rem', '4rem', '6.5rem'],
            fontWeight: 800,
            textAlign: ['center', 'center', 'left'],
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            mb: '1rem',
          }}>
          Hacky Holidays!
        </Heading>
        <Heading as="h2" variant="styles.h1"
          sx={{
            fontFamily: 'var(--font-inter)',
            fontSize: ['1rem', '1.5rem', '1.9rem'],
            fontWeight: 800,
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            mb: '1rem',
          }}>
          Design a PCB holiday decoration this winter, get one shipped!
        </Heading>
        <a href="/guide">
          <Button
            sx={{
              mx: ['auto', 0],
              fontFamily: 'var(--font-inter)',
              fontSize: ['0.8rem', '1rem', 'calc(0.6vw + 0.6vh)'],
              fontWeight: 900,
              color: 'white',
              bg: '#f90b0b',
              borderRadius: '2rem',
              padding: ['0.6rem 1rem', '1rem 2rem'],
              mt: ['0.5rem', '1rem'],
            }}>
            <b>&nbsp;Learn to Make a Decoration &nbsp; ➜</b>
          </Button>
        </a>
      </Box>
    </Box>
  );
}

export default tipitytopity;