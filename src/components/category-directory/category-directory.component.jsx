import "./category-directory.styles.scss";
import CategoryItem from "../category-item/category-item.component";

const CategoryDirectory = ({
  row1Categories,
  row2Categories,
  row3Categories,
}) => {
  return (
    <div className="categories-container">
      {row1Categories.map((category) => (
        <CategoryItem key={category.id} num={1} category={category} />
      ))}
      {row2Categories.map((category) => (
        <CategoryItem key={category.id} num={2} category={category} />
      ))}
      {row3Categories.map((category) => (
        <CategoryItem key={category.id} num={3} category={category} />
      ))}
    </div>
  );
};

export default CategoryDirectory;
