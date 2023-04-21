import { useState, useEffect } from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import CategoriesButton from "../components/CategoriesButton";
import ImageGallery from "../components/ImageGallery";

const HomePage = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [buttonQuery, setButtonQuery] = useState("");
  const apiKey = import.meta.env.VITE_API_KEY;

  const getPhotos = async () => {
    let response = await fetch(
      `https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&image_type=photo&pretty=true`
    );
    let data = await response.json();
    let iterableData = data.hits;
    setImages(iterableData);
  };

  const getButtonPhotos = async () => {
    let response = await fetch(
      `https://pixabay.com/api/?key=${apiKey}&q=${buttonQuery}&image_type=photo&pretty=true`
    );
    let data = await response.json();
    let iterableData = data.hits;
    setImages(iterableData);
  };

  useEffect(() => {
    getPhotos();
  }, [searchQuery]);

  useEffect(() => {
    getButtonPhotos();
  }, [buttonQuery]);

  return (
    <div>
      <Header />
      <section className="main-content">
        <div className="title-section">
          <h1>FantastiFotos</h1>
          <p>fotografías profesionales a tu alcance</p>
        </div>
        <div className="input-container">
          <Input searchText={(text) => setSearchQuery(text)} />
        </div>
      </section>
      <section className="categories-section">
        <h2>Categorías</h2>
        <div className="buttons-container">
          <CategoriesButton
            category="Outdoors"
            searchButton={(buttonValue) => setButtonQuery(buttonValue)}
          />
          <CategoriesButton
            category="pets"
            searchButton={(buttonValue) => setButtonQuery(buttonValue)}
          />
          <CategoriesButton
            category="wildlife"
            searchButton={(buttonValue) => setButtonQuery(buttonValue)}
          />
          <CategoriesButton
            category="wallpapers"
            searchButton={(buttonValue) => setButtonQuery(buttonValue)}
          />
        </div>
      </section>
      <section className="img-section">
        <h2>Imágenes Royalty Free</h2>
        <div className="img-gallery-container">
          {images.map((image) => (
            <ImageGallery
              key={image.id}
              image={image.webformatURL}
              description={image.tags}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
