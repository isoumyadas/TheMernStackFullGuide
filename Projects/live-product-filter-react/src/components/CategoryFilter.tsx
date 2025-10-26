const CategoryFilter = ({
  onCategoryChange,
}: {
  onCategoryChange: (value: string) => void;
}) => {
  return (
    <div>
      <select onChange={(e) => onCategoryChange(e.target.value)}>
        {/* <option value="">Filter your Products</option> */}
        <option value="all">all</option>
        <option value="men's clothing">men's clothing</option>
        <option value="jewelery">jewelery</option>
        <option value="electronics">electronics</option>
        <option value="women's clothing">women's clothing</option>
      </select>
    </div>
  );
};

export default CategoryFilter;
