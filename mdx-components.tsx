import type { MDXComponents } from 'mdx/types'
import { Heading, Text } from 'theme-ui'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => <Heading as="h1" sx={{ fontSize: 6, color: 'black' ,      fontFamily: 'var(--font-inter)', 
    }} {...props} />,
    h2: (props) => <Heading as="h2" sx={{ fontSize: 4, color: 'black',       fontFamily: 'var(--font-inter)', 
    }} {...props} />,
    h3: (props) => <Heading as="h3" sx={{ fontSize: 3, color: 'black' }} {...props} />,
    p: (props) => <Text sx={{ fontSize: 4, color: 'text', padding: '10vh'}} {...props} />,
    // Add more custom components as needed
  }
}