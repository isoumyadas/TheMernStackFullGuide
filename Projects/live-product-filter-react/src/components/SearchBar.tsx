import { Input } from "./ui/input";

const SearchBar = ({
  onSearchChange,
}: {
  onSearchChange: (value: string) => void;
}) => {
  return (
    <div className="mb-2">
      <Input
        className="w-fit text-black bg-white font-bold"
        type="text"
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search your product"
      />
    </div>
  );
};

export default SearchBar;
