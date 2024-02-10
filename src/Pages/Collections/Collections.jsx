import React, { useState, useEffect } from "react";
import "./collections.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Figure } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Collections = () => {
  const [post, setPost] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const imgApi = 'https://www.artic.edu/iiif/2/';
  const imgSize = '/full/843,/0/default.jpg';

  useEffect(() => { 
    // fetch(
    //   "https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,main_reference_number,image_id,category_titles,classification_titles,subject_titles,material_titles,technique_titles"
    // )
    fetch("https://api.artic.edu/api/v1/artworks?page=2&limit=100&fields=id,title,artist_display,main_reference_number,image_id,category_titles,classification_titles,subject_titles,material_titles,technique_titles")
      .then((response) => response.json())
      .then((result) => {
        setTimeout(() => {
          setPost(result.data);
        }, 1500);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSearchTerm = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
    setSelectedCategory(""); // Reset category selection when searching
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchTerm(""); // Reset search term when selecting a category
  };
  
  // const [clickedItems, setClickedItems] = useState({});

  // const handleClick = (index) => {
  //   setClickedItems((prevState) => ({
  //     ...prevState,
  //     [index]: !prevState[index], // Inverse le statut de clic pour cet élément
  //   }));
  // };
  const [clickedItems, setClickedItems] = useState({});
  console.log(clickedItems);

  useEffect(() => {
    // Récupérer les éléments favoris depuis le stockage local lors du chargement initial
    const storedClickedItems = JSON.parse(localStorage.getItem('clickedItems')) || {};
    setClickedItems(storedClickedItems);
  }, []);

  const handleClick = (id) => {
    // Mettre à jour l'état local pour l'élément cliqué
    const updatedClickedItems = {
      ...clickedItems,
      [id]: !clickedItems[id], // Utilisation de l'ID comme clé
    };
    setClickedItems(updatedClickedItems);
  
    // Mettre à jour le stockage local avec les éléments favoris
    localStorage.setItem('clickedItems', JSON.stringify(updatedClickedItems));
  };
  
  return (
    <Container>
      <div className="collections" style={{fontSize: "50px"}}>
        <h1>Collections</h1>
        
      </div>

      {/* <div>
        <p
        style={{fontSize: '13px', display:'block', letterSpacing:'1.5px', color: 'gray'}}>Filtrer vos recherche !</p>
        </div> */}
      <div className="categories"
      style={{justifyContent: 'center'}}>
        <ul className="lists">
          {['All', 'Prints and Drawings', 'Contemporary Art', 'Modern Art', 'Women artists' ,'Essentials', 'Arts of Asia', 'Byzantium', 'Textiles' ,'Painting and Sculpture of Europe', 'Arts of the Americas', 'African Diaspora', 'Chicago Artists', 'Applied Arts of Europe'].map((category, index) => (
            <li key={index} onClick={() => handleCategoryClick(category)}>
              {category}
            </li>
          ))}
        </ul>
      </div>
      {/* Select */}
      
      {/* <select 
      className="form-select" 
      aria-label="Default select example" 
      onClick={(e) => handleCategoryClick(e.target.value)}
      style={{fontSize: '13px', display:'block', letterSpacing:'1.5px', color: 'black', width: '30%', height: '40px', marginBottom: '20px', outline: 'dashed', border: '1px solid #ced4da', borderRadius: '.25rem', backgroundColor: 'white'}}
      >
  <option value="">Choisir une categorie</option>
  {['All', 'Prints and Drawings', 'Contemporary Art', 'Modern Art', 'Women artists' ,'Essentials', 'Arts of Asia', 'Byzantium', 'Textiles' ,'Painting and Sculpture of Europe', 'Arts of the Americas', 'African Diaspora', 'Chicago Artists', 'Applied Arts of Europe'].map((category, index) => (
    <option key={index} value={category}>
      {category}
    </option>
  ))}
</select> */}


      <div className="search-input">
        <input type="text" name="search" id="search" placeholder="Rechercher par Artiste ou par Titre..." onChange={handleSearchTerm} style={{fontSize: '13px', letterSpacing:'1.5px'}}/>
      </div>

      <Row>
        {post ? (
          post.filter((val) => {
            if (selectedCategory === "All" || selectedCategory === "") {
              return val;
            } else if (
              val.category_titles &&
              val.category_titles.includes(selectedCategory)
            ) {
              return val;
            }
          }).filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              val.artist_display.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          }).map((artwork, index) => {
            const imageUrl = imgApi + artwork.image_id + imgSize;
            return (
              <Col md={3} className="px-8 mb-4 p-8" key={index}>
                <div className="w-full d-flex flex-column justify-content-center position-relative">
                  <Figure className="w-100">
                    <Figure.Image
                      className="w-100 mb-4"
                      src={imageUrl}
                    />
                    <Figure.Caption>
                      <span className="artwork-grid__item-id text-hamdarkgray">
                        {artwork.main_reference_number}
                      </span>
                      <h4 className="artwork-grid__item-author text-lg text-hamdarkgray">
                        <span className="artist_display">{artwork.artist_display}</span>
                      </h4>
                      <h3 className="artwork-grid__item-title text-black text-sm">
                        {artwork.title}
                      </h3>
                      {artwork.category_titles.map((title, index) => (
                        <span key={index} className="artwork-grid__item-classification text-hamdarkgray">{title}<br/></span>
                      ))}
                    </Figure.Caption>
                  </Figure>
                  <span
                    className={`icon-wrapper ${clickedItems[artwork.id] ? 'clicked' : ''}`}
                    onClick={() => handleClick(artwork.id)}
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="p-1 position-absolute bottom-0 end-0 text-hamdarkgray border-none bg-transparent hover:text-black"
                    />
                  </span>
                </div>
              </Col>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </Row>
    </Container>
  );
};

export default Collections;
