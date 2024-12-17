import {
    Box,
    Heading,
    Text,
  } from 'theme-ui';
  
  const Middle = () => {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: ['1rem', '2rem', '3rem'],
          width: '100%',
          margin: 'auto',
          mt: '5vh',
          px: ['1rem', '2rem', '4rem'], // Added padding on the sides
        }}
      >
        <Text
          sx={{
            fontFamily: 'var(--font-inter)',
            fontSize: ['1rem', '1.5rem', '1.9rem'],
            fontWeight: 600,
            color: '#FFFFFF',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            mb: '1rem',
            textAlign: ['center', 'center', 'left'],
          }}
        >
          At the end, Submissions will be peer-reviewed and voted for the top 3. The top 3 will be re-made, and can be given out as gifts!
        </Text>
        <Heading as="h2" variant="styles.h2"
          sx={{
            fontFamily: 'var(--font-inter)',
            fontSize: ['1.5rem', '2rem', '2.5rem'],
            fontWeight: 800,
            textAlign: ['center', 'center', 'left'],
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            mb: '1rem',
          }}>
          Frequently Asked Questions
        </Heading>
      </Box>
    );
  }
  
  export default Middle;