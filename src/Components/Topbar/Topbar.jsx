import React from 'react';
import './topbar.css';
import { Router, Link } from 'react-router-dom';
export default function Topbar() {
    return (
        <div className="containerr">
            <div className="navbar">
                {/* <img src={logo} className="logo" alt="Logo" /> */}
                <Link to="/" className='logo-link'><h1 className='logo'>ArtWise <span>VisionArt</span></h1></Link>
                <nav>
                    <ul>
                        <li><Link to="/">Acceuil</Link></li>
                        <li><Link to="/collections">Collections</Link></li>
                        <li><Link to="/favoris">Farovis</Link></li>
                        <li><Link to="/apropos">A propos</Link></li>
                        <li><Link to="/signIn">Sign In</Link></li>
                        
                    </ul>
                </nav>
            </div>
        </div>
    );
}

// import React, { useState } from 'react';
// import './topbar.css';
// import { Link } from 'react-router-dom';

// export default function Topbar() {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div className="containerr">
//             <div className="navbar">
//                 <Link to="/" className='logo-link'><h1 className='logo'>ArtWise <span>VisionArt</span></h1></Link>
//                 <nav className={isOpen ? 'active' : ''}>
//                     <ul>
//                         <li><Link to="/" onClick={toggleMenu}>Acceuil</Link></li>
//                         <li><Link to="/collections" onClick={toggleMenu}>Collections</Link></li>
//                         <li><Link to="/favoris" onClick={toggleMenu}>Favoris</Link></li>
//                         <li><Link to="/apropos" onClick={toggleMenu}>A propos</Link></li>
//                         <li><Link to="/signIn" onClick={toggleMenu}>Sign In</Link></li>
//                     </ul>
//                 </nav>
//                 <div className="menu-toggle" onClick={toggleMenu}>
//                     <div className={isOpen ? 'hamburger active' : 'hamburger'}></div>
//                 </div>
//             </div>
//         </div>
//     );
// }
