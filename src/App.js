
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Membership from './Components/Membership/Membership';
import Topbar from './Components/Topbar/Topbar';
import Acceuil from './Pages/Acceuil/Acceuil';
import SignIn from './Pages/SignIn/SignIn';
import Collections from './Pages/Collections/Collections';
import Apropos from './Pages/Apropos/Apropos';
// import BasicSlider from './Components/Slider/BasicSlider';
import Favoris from './Pages/Favoris/Favoris';

const routerConfig = [
  {
    path: '/',
    element: <Acceuil />,
  },
  {
    path: '/collections',
    element: <Collections />,
  },
  {
    path: '/apropos',
    element: <Apropos />,
  },
  {
    path: '/signIn',
    element: <SignIn />,
  },
  {
    path: '/favoris',
    element: <Favoris />,
  },
];


function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <div className="container">
          <Routes>
            {routerConfig.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
          
          <Footer />
        </div>
      </BrowserRouter>
      {/* <Slider/> */}
    </>
  );
}


export default App;
