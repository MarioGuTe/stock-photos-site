import Header from "./assets/components/Header";
import Input from "./assets/components/Input";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <div className="title-section">
          <h1>FantastiFotos</h1>
          <p>fotografías profesionales a tu alcance</p>
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
