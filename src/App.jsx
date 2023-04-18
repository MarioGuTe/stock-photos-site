import Header from "./assets/components/Header";
import Input from "./assets/components/Input";
import CategoriesButton from "./assets/components/CategoriesButton";
import ImageGallery from "./assets/components/ImageGallery";
import "./App.css";

function App() {
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
          <ImageGallery />
          <ImageGallery />
          <ImageGallery />
          <ImageGallery />
        </div>
      </section>
    </div>
  );
}

export default App;
