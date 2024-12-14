import { Heading, Text } from 'theme-ui'
const components = {
    h1: (props) => <Heading as="h1" sx={{ 
        fontSize: 5,  
        fontFamily: 'var(--font-inter)',                    
        fontWeight:800,
        marginBottom: '10px'
    }} {...props} />,
    h2: (props) => <Heading as="h2" sx={{ fontSize: 4,   fontFamily: 'var(--font-inter)', marginBottom: '10px'
    }} {...props} />,
    h3: (props) => <Heading as="h3" sx={{ fontSize: 3,  }} {...props} />,
    p: (props) => <Text sx={{ fontSize: 2, color: 'text' }} {...props} />,
    ol: (props) => <ol style={{ listStyleType: 'decimal', paddingLeft:'20px', marginLeft:'20px' }} {...props} />,
    li: (props) => <li {...props} />,
    a: (props) => <a style = {{color:'blue'}}{...props} />,
  
}
export default components