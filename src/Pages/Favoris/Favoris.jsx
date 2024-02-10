

import React, { useState, useEffect } from "react";
import "./favoris.css";

export default function Favoris() {
// const [favoris, setFavoris] = useState([]);
const [post, setPost] = useState([]);
const [elementsFavoris, setElementsFavoris] = useState([]); // Ajout d'un état pour les éléments filtrés
const [favorisIDs, setFavorisIDs] = useState([]);
const imgApi = "https://www.artic.edu/iiif/2/";
const imgSize = "/full/843,/0/default.jpg";

useEffect(() => {
  // Fetch des données des œuvres d'art
  fetch(
    "https://api.artic.edu/api/v1/artworks?page=2&limit=100&fields=id,title,artist_display,main_reference_number,image_id,category_titles,classification_titles,subject_titles,material_titles,technique_titles"
  )
    .then((response) => response.json())
    .then((result) => {
      setTimeout(() => {
        setPost(result.data);
      }, 1500);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  // Récupérer les favoris depuis le stockage local
  const favorisFromStorage = JSON.parse(localStorage.getItem("clickedItems")) || {};

const IDs = Object.keys(favorisFromStorage).filter((key) => favorisFromStorage[key]);
  setFavorisIDs(IDs);

}, []);


// Effect pour filtrer les éléments en fonction des IDs favoris
useEffect(() => {
    const filteredElements = post.filter((element) => favorisIDs.includes(element.id.toString()));
    setElementsFavoris(filteredElements);
  }, [post, favorisIDs]); // Utilisez favorisIDs comme dépendance ici
  
  // Maintenant, vous pouvez utiliser elementsFavoris dans le reste de votre composant
  console.log(elementsFavoris);




//   //   DELETE HANDELING


const handleDelete = (id) => {
    // Récupérer les favoris depuis le stockage local
    const favorisFromStorage = JSON.parse(localStorage.getItem("clickedItems")) || {};
  
    // Supprimer l'élément avec l'ID correspondant
    delete favorisFromStorage[id];
  
    // Mettre à jour le stockage local
    localStorage.setItem("clickedItems", JSON.stringify(favorisFromStorage));
  
    // Mettre à jour l'état favorisIDs si nécessaire
    const IDs = Object.keys(favorisFromStorage).filter((key) => favorisFromStorage[key]);
    setFavorisIDs(IDs);
  
    // Mettre à jour les éléments filtrés s'il y a lieu
    const filteredElements = post.filter((element) => favorisIDs.includes(element.id.toString()));
    setElementsFavoris(filteredElements);
  };



//   const handleDelete = (idToDelete) => {
//     // Supprimer l'élément du localStorage
//     const updatedFavoris = { ...favoris };
//     delete updatedFavoris[idToDelete]; // Supprimer l'élément avec l'ID à supprimer
//     setFavoris(updatedFavoris); // Mettre à jour l'état local si nécessaire
//     localStorage.setItem("clickedItems", JSON.stringify(updatedFavoris)); // Mettre à jour le localStorage
//   };
  return (
    <div className="Favoris">
      <h1>Favoris</h1>
      {elementsFavoris.length === 0 && (
      <p>Pas de favoris</p>
        )}
      <div
        className="container"
        style={{
          flexDirection: "row",
        }}
      >
        {elementsFavoris.map((element, index) => {
          const imageUrl = imgApi + element.image_id + imgSize;
          return (
            // Utiliser l'index pour afficher chaque élément favori
            <div className="card" style={{ width: "18rem" }} key={index}>
              {/* Afficher les détails de l'élément favori */}
              <img src={`${imageUrl}`} className="card-img-top" />
              <div className="card-body">
                <span className="artwork-grid__item-id text-hamdarkgray">
                  {element.main_reference_number}
                </span>
                <h4 className="card-text">
                  <span className="artist_display">
                    {element.artist_display}
                  </span>
                </h4>
                <h3 className="card-title">{element.title}</h3>
                {element.category_titles.map((title, index) => (
                  <span
                    key={index}
                    className="artwork-grid__item-classification text-hamdarkgray"
                  >
                    {title}
                    <br />
                  </span>
                ))}

                <button
                  className="btn btn-danger"
                  style={{ marginBottom: "10px", marginTop: "7px" , borderRadius: "0px", fontSize: "15px"}}
                  onClick={() => handleDelete(element.id)}
                >
                  Supprimer
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
