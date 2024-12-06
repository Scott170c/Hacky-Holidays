import { Heading, Text } from 'theme-ui'
const components = {
    h1: (props) => <Heading as="h1" sx={{ 
        fontSize: 5, color: 'black' ,      
        fontFamily: 'var(--font-inter)',                    
        fontWeight:800
    }} {...props} />,
    h2: (props) => <Heading as="h2" sx={{ fontSize: 4, color: 'black',       fontFamily: 'var(--font-inter)', 
    }} {...props} />,
    h3: (props) => <Heading as="h3" sx={{ fontSize: 3, color: 'black' }} {...props} />,
    p: (props) => <Text sx={{ fontSize: 2, color: 'text' }} {...props} />,

}
export default components