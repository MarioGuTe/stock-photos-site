import { useState, useEffect } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import CategoriesButton from "./components/CategoriesButton";
import ImageGallery from "./components/ImageGallery";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const apiKey = import.meta.env.VITE_API_KEY;

  const getPhotos = async () => {
    let response = await fetch(
      `https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&image_type=photo&pretty=true`
    );
    let data = await response.json();
    let iterableData = data.hits;
    setImages(iterableData);
  };

  useEffect(() => {
    getPhotos();
  }, [searchQuery]);

  return (
    <div className="App">
      <Header />
      <section className="main-content">
        <div className="title-section">
          <h1>FantastiFotos</h1>
          <p>fotografías profesionales a tu alcance</p>
        </div>
        <div className="input-container"></div>
        <Input searchText={(text) => setSearchQuery(text)} />
      </section>
      <section className="categories-section">
        <h2>Categorías</h2>
        <div className="buttons-container">
          <CategoriesButton />
          <CategoriesButton />
          <CategoriesButton />
          <CategoriesButton />
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
}

export default App;
