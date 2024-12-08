import {
    Box,
    Button,
    Image,
    Grid,
    Heading,
    Text,
  } from 'theme-ui';

 const footer = ()=> {
    return (
        <footer style={{
            backgroundColor: '#100056',
            height: '8vh',
            width: '100%',
            position: 'relative',
            //bottom: '0',
            display: 'flex',
            //flexDirection: 'column',
            alignItems: 'center',
            // py: '10px',
            justifyContent: 'center',
            fontSize: '120%',
            fontWeight: 700,
            color: '#90C4FF'
          }}>
            Made with ❤️ by @bright li & @Scott
        </footer>
    )
}
export default footer;