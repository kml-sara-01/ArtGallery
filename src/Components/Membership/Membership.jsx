import 'bootstrap/dist/css/bootstrap.min.css';
import './membership.css';
import yellowImg from './Images/Yellow.png';
import whiteImg from './Images/white.png';
import { Link } from 'react-router-dom';


export default function Membership() {
 
  return (
    <div className="container-fluid membership" style={{ backgroundImage: `url(${yellowImg})` }}>
      <div className="titles">
        <h1>Rejoindre la communautée</h1>
        <h2>Creer votre compte gratuitement</h2>
      </div>
      <div className="div-button">
        <button type="button" className="button"><Link to="/signIn" style={{textDecoration:'none', color: 'white'}}>Commencer</Link></button>
      </div>
    </div>
  );
}