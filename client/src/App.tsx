import './App.css';
import { Routes, Route } from 'react-router';

// Using layouts
import DefaultMobileLayout from '@/layout/mobile/default';

// Import pages
import Home from '@/pages/Home';
import Library from '@/pages/Library';
import Setting from '@/pages/Setting';
import Search from '@/pages/Search';

function App() {
   return (
      <Routes>
         <Route element={<DefaultMobileLayout />}>
            <Route
               path="/"
               element={<Home />}
            ></Route>
            <Route
               path="/search"
               element={<Search />}
            ></Route>
            <Route
               path="/library"
               element={<Library />}
            ></Route>
            <Route
               path="/setting"
               element={<Setting />}
            ></Route>
         </Route>
      </Routes>
   );
}

export default App;
