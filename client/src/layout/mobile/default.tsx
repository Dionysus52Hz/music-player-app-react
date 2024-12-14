import { Outlet, NavLink } from 'react-router';

import { House, Search, LibraryBig, Settings } from 'lucide-react';

const navItems = [
   {
      path: '/',
      icon: <House />,
      text: 'Home',
   },
   {
      path: '/search',
      icon: <Search />,
      text: 'Search',
   },
   {
      path: '/library',
      icon: <LibraryBig />,
      text: 'Library',
   },
   {
      path: '/setting',
      icon: <Settings />,
      text: 'Setting',
   },
];

export default function DefaultMobileLayout() {
   return (
      <div className="w-dvw flex flex-col items-center">
         <div className="fixed bottom-0 w-dvw min-w-full h-[70px] flex items-center">
            <ul className="w-full flex justify-evenly">
               {Array.from({ length: navItems.length }, (_, i) => (
                  <li
                     key={i}
                     className="px-3 py-2"
                  >
                     <NavLink to={navItems[i].path}>
                        <span className="text-[13px] grid place-items-center gap-y-1 font-normal">
                           {navItems[i].icon}
                           {navItems[i].text}
                        </span>
                     </NavLink>
                  </li>
               ))}
            </ul>
         </div>

         <main>
            <Outlet />
         </main>

         <footer>This is footer for mobile layout</footer>
      </div>
   );
}
