import { Box } from 'theme-ui';
import Link from 'next/link';

const SideBar = () => {
  return (
    <Box
      as="aside"
      sx={{
        backgroundColor: '#f1f5f9', // bg-slate-100
        padding: '1.7rem', // p-4
        height: '100vh', // h-screen
        borderRight: '4px dashed #64748b', // border-r-4 border-slate-500 border-dashed
        maxWidth: '24rem', // max-w-prose
      }}
    >
      <nav>
        <ul>
          <li>
            <Link href="/guide" passHref>
              <Box
                as="a"
                sx={{
                  display: 'block', // block
                  padding: '1rem 1rem', // py-2 px-4
                  borderRadius: '0.125rem', // rounded
                  color: '#1e293b', // text-slate-900
                  transition: 'all 0.3s', // transition-all
                  textDecoration: 'none',
                  '&:hover': {
                    backgroundColor: '#e2e8f0', // hover:bg-slate-200
                    color: '#0891b2', // hover:text-cyan-800
                  },
                }}
              >
                DIY Guide
              </Box>
            </Link>
          </li>
          {/* <li>
            <Link href="/resources" passHref>
              <Box
                as="a"
                sx={{
                  display: 'block', // block
                  padding: '0.5rem 1rem', // py-2 px-4
                  borderRadius: '0.125rem', // rounded
                  color: '#1e293b', // text-slate-900
                  transition: 'all 0.3s', // transition-all
                  textDecoration: 'none',
                  '&:hover': {
                    backgroundColor: '#e2e8f0', // hover:bg-slate-200
                    color: '#0891b2', // hover:text-cyan-800
                  },
                }}
              >
                Resources
              </Box>
            </Link>
          </li>
          <li>
            <Link href="/parts" passHref>
              <Box
                as="a"
                sx={{
                  display: 'block', // block
                  padding: '0.5rem 1rem', // py-2 px-4
                  borderRadius: '0.125rem', // rounded
                  color: '#1e293b', // text-slate-900
                  transition: 'all 0.3s', // transition-all
                  textDecoration: 'none',
                  '&:hover': {
                    backgroundColor: '#e2e8f0', // hover:bg-slate-200
                    color: '#0891b2', // hover:text-cyan-800
                  },
                }}
              >
                Approved Parts
              </Box>
            </Link>
          </li>
          <li>
            <Link href="/submitting" passHref>
              <Box
                as="a"
                sx={{
                  display: 'block', // block
                  padding: '0.5rem 1rem', // py-2 px-4
                  borderRadius: '0.125rem', // rounded
                  color: '#1e293b', // text-slate-900
                  transition: 'all 0.3s', // transition-all
                  textDecoration: 'none',
                  '&:hover': {
                    backgroundColor: '#e2e8f0', // hover:bg-slate-200
                    color: '#0891b2', // hover:text-cyan-800
                  },
                }}
              >
                Submit your project!
              </Box>
            </Link>
          </li>
          <li>
            <Link href="/faq" passHref>
              <Box
                as="a"
                sx={{
                  display: 'block', // block
                  padding: '0.5rem 1rem', // py-2 px-4
                  borderRadius: '0.125rem', // rounded
                  color: '#1e293b', // text-slate-900
                  transition: 'all 0.3s', // transition-all
                  textDecoration: 'none',
                  '&:hover': {
                    backgroundColor: '#e2e8f0', // hover:bg-slate-200
                    color: '#0891b2', // hover:text-cyan-800
                  },
                }}
              >
                FAQ
              </Box>
            </Link>
          </li> */}
        </ul>
      </nav>
    </Box>
  );
};

export default SideBar;