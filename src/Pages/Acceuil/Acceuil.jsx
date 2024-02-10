import "./acceuil.css";
import Collections from "../Collections/Collections";
import Membership from "../../Components/Membership/Membership";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Figure, Button } from "react-bootstrap";
import Slider from "../../Components/Slider/Slider";
export default function Acceuil() {
  // api pour collections qui affiche seulement 4 images, la suite dans voir plus ('/collections')

  // COLLECTIONS
  const [post, setPost] = useState([]);
  const imgApi = "https://www.artic.edu/iiif/2/";
  const imgSize = "/full/843,/0/default.jpg";

  useEffect(() => {
    fetch(
      "https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,main_reference_number,image_id,category_titles,classification_titles,subject_titles,material_titles,technique_titles"
    )
      .then((response) => response.json())
      .then((result) => {
        setTimeout(() => {
          setPost(result.data);
        }, 1500);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, []);

  const homeImageUrl =
    "https://harvardartmuseums.org/assets/images/pages/hero-art-study-center-1500.jpg";

  return (
    <>
      <div className="container">
        <h1
          style={{
            fontFamily: "Times New Roman, Times, serif",
            marginBottom: "15px",
            color: "black",
            textAlign: "center",
          }}
        ></h1>
        <h1
          style={{
            fontFamily: "Times New Roman, Times, serif",
            marginBottom: "5px",
            color: "black",
            textAlign: "center",
            fontSize: "50px",
            fontWeight: "bold",
          }}
        >
          International Exhibition of Modern Art <br /> The Armory Show
        </h1>
        {/* <div
            className="Home_container"
            style={{ backgroundImage: `url(${homeImageUrl})`}}
          ></div> */}
      </div>

      <div className="hr"></div>
      <Slider />
      <div className="hr"></div>

      <h1
        style={{
          fontFamily: "Times New Roman, Times, serif",
          marginBottom: "20px",
          color: "black",
          textAlign: "center",
          fontSize: "50px",
          fontWeight: "bold",
        }}
      >
        Explorer toutes les collections et choisir vos meilleures oeuvres d'art
        !
      </h1>
      <Row style={{ border: "1px solid black", padding: "25px", width: "100%"}}>
        {post ? (
          post.slice(0, 4).map((artwork, index) => {
            const imageUrl = imgApi + artwork.image_id + imgSize;
            return (
              <Col md={3} className="px-8 mb-4 p-8">
                <div
                  className="w-full d-flex flex-column justify-content-center position-relative"
                  key={index}
                >
                  <Figure className="w-100">
                    <Figure.Image className="w-80 mb-4" src={imageUrl} />
                    <Figure.Caption>
                      <span className="artwork-grid__item-id text-hamdarkgray">
                        {artwork.main_reference_number}
                      </span>
                      <h4 className="artwork-grid__item-author text-lg text-hamdarkgray">
                        <span className="artist_display">
                          {artwork.artist_display}
                        </span>
                      </h4>
                      <h3 className="artwork-grid__item-title text-black text-sm">
                        {artwork.title}
                      </h3>
                      {/* {artwork.category_titles && artwork.category_titles.map((title, index) => ( */}
                      {artwork.category_titles.map((title, index) => (
                        <span
                          key={index}
                          className="artwork-grid__item-classification text-hamdarkgray"
                        >
                          {title}
                          <br />
                        </span>
                      ))}
                    </Figure.Caption>
                  </Figure>
                </div>
              </Col>
            );
          })
        ) : (
          <p>Chargement...</p>
        )}
        <div className="special">
          <button className="button">
            <Link
              to="/collections"
              style={{ textDecoration: "none", color: "black" }}
            >
              Voir plus
            </Link>
          </button>
        </div>
      </Row>

      {/* <Membership /> */}
    </>
  );
}
