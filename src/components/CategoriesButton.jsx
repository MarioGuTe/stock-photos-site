const CategoriesButton = ({ category, searchButton }) => {
  const handleOnClick = (e) => {
    let buttonValue = e.target.value;
    searchButton(buttonValue);
  };

  return (
    <>
      <button
        className="categorie-btn"
        value={category}
        onClick={handleOnClick}
      >
        {category}
      </button>
    </>
  );
};

export default CategoriesButton;
