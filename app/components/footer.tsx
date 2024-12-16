import { Box, Text } from 'theme-ui';

const Footer = () => {
  return (
    <Box
      as="footer"
      sx={{
        backgroundColor: '#100056',
        height: '8vh',
        width: '100%',
        position: 'absolute',
        bottom: '0px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '120%',
        fontWeight: 700,
        color: '#90C4FF',
        py: '10px',
      }}
    >
      <Text>Made with ❤️ by @bright li & @Scott</Text>
    </Box>
  );
}

export default Footer;