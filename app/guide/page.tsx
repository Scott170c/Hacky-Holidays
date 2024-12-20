"use client";

import { keyframes } from '@emotion/react';
import { MDXProvider } from '@mdx-js/react';
import components from '../components/shared/MDXComponents';
import Image from 'next/image';
import SideBar from "./SideBar";
import Link from 'next/link';
import GuideMD from './guideMD.mdx'; // Import the MDX file

const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } });

const DocPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-slate-100 text-white fixed top-0 z-10 w-full border-b-4 border-slate-500 border-dashed">
        <div>
          <h1 className="text-2xl font-bold font-mono flex justify-between ml-4">
            <Link href="/" className="text-black bg-green-400 px-2 py-1 rounded-sm my-2">
              HACKY HOLIDAYS
            </Link>
            <Image 
              src="/OrpheusFlag.svg" 
              alt="Orpheus Flag" 
              width={48} 
              height={48} 
              className="max-w-12 sm:max-w-24 hidden sm:right-20 sm:block absolute" 
            />
            <Link 
              href="https://github.com/hackclub/onboard" 
              className="block" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-8 h-8 fill-current transition-all text-slate-950 hover:text-cyan-800 inline-block my-2 mr-6">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6z"/>
              </svg>
            </Link>
          </h1>
        </div>
      </header>

      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <aside className="hidden sm:block w-48 fixed top-16 h-full">
          <SideBar />
        </aside>

        <main className="flex-1 p-8 max-w-4xl mx-auto sm:ml-48">
  <div className="prose prose-slate prose-headings:my-4 prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-800">
    <MDXProvider components={components}>
      <GuideMD /> {/* Render the MDX content */}
    </MDXProvider>
  </div>
</main>
      </div>
    </div>
  );
}

export default DocPage;