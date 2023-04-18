import { useState, useEffect } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import CategoriesButton from "./components/CategoriesButton";
import ImageGallery from "./components/ImageGallery";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetch(`https://api.pexels.com/v1/search?query=people`, {
      headers: {
        Authorization: apiKey,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setImages(data.photos);
        // console.log(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <Header />
      <section className="main-content">
        <div className="title-section">
          <h1>FantastiFotos</h1>
          <p>fotografías profesionales a tu alcance</p>
        </div>
        <Input />
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
            <ImageGallery key={image.id} image={image.src.large} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
