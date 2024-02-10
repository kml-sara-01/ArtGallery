import React from 'react';
import './apropos.css';
export default function Apropos() {
  return (
    <div className='container'>
      <h1 className='h1-apropos'>A propos</h1>
      <div className='apropos-paragraph'>
        <p >Chez ArtWise, nous nous engageons à favoriser un environnement d'apprentissage dynamique. 
            En tant qu'étudiant en génie informatique aspirant, je m'efforce d'améliorer continuellement mes compétences et mes connaissances en développement web et en intégration de données. 
            Dans le but de poursuivre mes objectifs éducatifs, j'utilise des API réputées uniquement à des fins d'apprentissage et de pratique. 
            Cela inclut l'accès à des APIs d'institutions prestigieuses telles que <span className='apropos-span'>Harvard Art Museums & Art Institute of Chicago</span> afin de perfectionner mes
            compétences dans la manipulation et l'intégration de données dans des applications web innovantes. Soyez assurée que l'utilisation de ces APIs est strictement destinée à des exercices
            éducatifs, respectant les lignes directrices éthiques et les conditions d'utilisation. Je suis passionnée par l'exploitation responsable de ces ressources pour renforcer ma compréhension 
            et mon expertise en génie informatique.
            </p>
      </div>
      <div style={
        {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '50px',
          marginBottom: '50px',
          width: '100%',
        }
      }>
      
        {/* <div>
            <h1 style={{
              fontSize: '30px',
              letterSpacing: '1.5px',
              margin: '10px',
              color: '#000',
              fontFamily : 'Dancing Script, cursive',
              display: 'block'
            
            }}>Contacter-nous !</h1>
        </div>
        <div className="search-input">
          <label htmlFor="">Email</label>
        <input type="email" name="email" id="email" placeholder="Votre E-mail..." style={{fontSize: '13px', letterSpacing:'1.5px', margin: '10px'}}/>
        </div> */}
      </div>
      
    </div>
  );
}