import Link from 'next/link';

const SideBar = () => {
  return (
    <aside className="bg-slate-100 p-4 h-screen border-r-4 border-slate-500 border-dashed max-w-prose">
      <nav>
        <ul>
          <li>
            <Link href="/guide" legacyBehavior>
              <a className="block py-2 px-4 rounded text-slate-900 transition-all no-underline hover:bg-slate-200 hover:text-cyan-800">
                DIY Guide
              </a>
            </Link>
          </li>
          {/* Add other links here if needed */}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;