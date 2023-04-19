import { useState, useEffect } from "react";
import Header from "./components/Header";
// import Input from "./components/Input";
import CategoriesButton from "./components/CategoriesButton";
import ImageGallery from "./components/ImageGallery";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("dog");
  const apiKey = import.meta.env.VITE_API_KEY;

  const getPhotos = async () => {
    setIsLoading(true);
    await fetch(`https://api.pexels.com/v1/search?query=${searchQuery}`, {
      headers: {
        Authorization: apiKey,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setImages(data.photos);
        console.log(data.photos);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPhotos();
  }, []);

  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      getPhotos();
    }
  };

  return (
    <div className="App">
      <Header />
      <section className="main-content">
        <div className="title-section">
          <h1>FantastiFotos</h1>
          <p>fotografías profesionales a tu alcance</p>
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Buscar"
            onKeyDown={onKeyDownHandler}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            value={searchQuery}
          />
        </div>
        {/* <Input
          searchQuery={searchQuery}
          onSearchInputChange={handleSearchInputChange}
        /> */}
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
              image={image.src.large}
              description={image.alt}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
