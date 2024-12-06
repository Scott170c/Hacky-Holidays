"use client";
import { keyframes } from '@emotion/react'
import GuideMD from './guideMD.mdx'
import { MDXProvider } from '@mdx-js/react'

const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } })
import { Box } from 'theme-ui'
// const components = {
//   h1: (props) => <Heading as="h1" {...props} />,
//   h2: (props) => <Heading as="h2" {...props} />,
//   h3: (props) => <Heading as="h3" {...props} />,
//   p: (props) => <Text {...props} />,
//   // Add more custom components as needed
// }
export default function guide() {
  return (
    <Box sx = {{
      fontFamily: 'var(--font-inter)', 
    }}>
          <MDXProvider >
      <GuideMD />
    </MDXProvider>  
    </Box>
);
}