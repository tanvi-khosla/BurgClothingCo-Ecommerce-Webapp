import "./category-item.styles.scss";

const CategoryItem = ({ category, num }) => {
  const { imageUrl, title } = category;
  return (
    <div className={`category-container${num}`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default CategoryItem;
