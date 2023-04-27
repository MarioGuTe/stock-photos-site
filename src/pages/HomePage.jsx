import { useState, useEffect } from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import CategoriesButton from "../components/CategoriesButton";
import ImageGallery from "../components/ImageGallery";
import ImageGallerySkeleton from "../components/ImageGallerySkeleton";

const HomePage = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const skeletonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const apiKey = import.meta.env.VITE_API_KEY;

  const getPhotos = async () => {
    try {
      let response = await fetch(
        `https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&image_type=photo&pretty=true`
      );
      let data = await response.json();
      let iterableData = data.hits;
      setImages(iterableData);
      setIsLoading(false);
    } catch (error) {
      console.log("Fetch error: ", error);
    }
  };

  useEffect(() => {
    getPhotos();
  }, [searchQuery]);

  return (
    <div className="home-page-body">
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
            searchButton={(buttonValue) => setSearchQuery(buttonValue)}
          />
          <CategoriesButton
            category="pets"
            searchButton={(buttonValue) => setSearchQuery(buttonValue)}
          />
          <CategoriesButton
            category="wildlife"
            searchButton={(buttonValue) => setSearchQuery(buttonValue)}
          />
          <CategoriesButton
            category="wallpapers"
            searchButton={(buttonValue) => setSearchQuery(buttonValue)}
          />
        </div>
      </section>
      <section className="img-section">
        <h2>Imágenes Royalty Free</h2>
        <div className="img-gallery-container">
          {isLoading &&
            skeletonArray.map((n) => <ImageGallerySkeleton key={n} />)}
          {images.map((image) => (
            <ImageGallery
              key={image.id}
              image={image.webformatURL}
              photo={image.largeImageURL}
              user={image.user}
              userImage={image.userImageURL}
              tags={image.tags}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
