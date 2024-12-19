"use client";
import { keyframes } from '@emotion/react';
import GuideMD from './guideMD.mdx';
import { MDXProvider } from '@mdx-js/react';
import components from '../components/shared/MDXComponents';
import { Box } from 'theme-ui';
import Image from 'next/image';
import SideBar from "./SideBar";
import Link from 'next/link';

const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } });

export default function guide() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'white' }}>
      {/* Header */}
      <Box
        as="header"
        sx={{
          backgroundColor: '#f1f5f9', // bg-slate-100
          color: 'white',
          position: 'fixed',
          top: 0,
          background: 'linear-gradient(180deg, rgba(0,153,255,1) 0%, rgba(130,205,255,1) 100%)',
          zIndex: 10,
          width: '100%',
          borderBottom: '4px dashed #64748b', // border-b-4 border-slate-500 border-dashed
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
          <Box as="h1" sx={{ fontSize: '2rem', fontWeight: 'bold', fontFamily: 'monospace' }}>
            <Link href="/" passHref legacyBehavior>
              <a
                style={{
                  color: 'black',
                  backgroundColor: '#34d399', // bg-green-400
                  padding: '0.5rem 1rem',
                  borderRadius: '0.125rem',
                  textDecoration: 'none',
                }}
              >
                HACKY HOLIDAYS
              </a>
            </Link>
          </Box>

          <Box sx={{ position: 'relative' }}>
            <Image src="/OrpheusFlag.svg" alt="Orpheus Flag" width={48} height={48} />
            <Box sx={{ marginLeft: 'auto', marginRight: '1.5rem' }}>
              <Link href="https://github.com/hackclub/onboard" passHref legacyBehavior>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'block' }}
                >
                  <Box
                    sx={{
                      width: '2rem',
                      height: '2rem',
                      fill: 'currentColor',
                      transition: 'all 0.3s',
                      color: '#1e293b', // text-slate-950
                      '&:hover': {
                        color: '#0891b2', // hover:text-cyan-800
                      },
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                  </Box>
                </a>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flex: 1, paddingTop: '4rem' }}>
        {/* Sidebar */}
        <Box
          as="aside"
          sx={{
            display: ['none', 'block'],
            width: '12rem',
            // position: 'fixed',
            top: '4rem',
            mr: '1rem',
            height: '100%',
            background: 'white',
          }}
        >
          <SideBar />
        </Box>

        {/* Main Content */}
        <Box
          as="main"
          sx={{
            flex: 1,
            padding: '2rem 0rem', // Ensures padding on all devices
            ul: {
              listStyleType: 'disc',
              paddingLeft: '1.25rem', // Adds padding for list items
            },
            ol: {
              listStyleType: 'decimal',
            },
            'h1, h2, h3, h4, h5, h6': {
              marginY: '0.5rem', // Consistent vertical margins for headings
              fontWeight: 'semibold',
            },
            'h1': {
              fontSize: '2rem', // Define font size for h1
            },
            'h2': {
              fontSize: '1.75rem', // Define font size for h2
            },
            'h3': {
              fontSize: '1.5rem', // Define font size for h3
            },
            'h4': {
              fontSize: '1.25rem', // Define font size for h4
            },
            'h5': {
              fontSize: '1rem', // Define font size for h5
            },
            'h6': {
              fontSize: '0.875rem', // Define font size for h6
            },
            'p': {
              fontSize: '1rem', // Define font size for paragraphs
            },
            fontFamily: 'sans-serif',
            color: 'black',
            width: '100%', // Ensures full width of the content container
            maxWidth: '90rem', // Constrains content width for better readability
            mx: 'auto', // Centers the content
            overflowWrap: 'break-word', // Ensures long words are broken to the next line
            wordBreak: 'break-word', // For older browsers
            lineHeight: '1.6', // Improved readability
            fontSize: '1rem', // Default font size
          }}
        >
          <MDXProvider components={components}>
            <GuideMD />
          </MDXProvider>
        </Box>
      </Box>
    </Box>
  );
}