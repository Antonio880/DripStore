import { CiSearch } from "react-icons/ci";

export default function SearchInput() {
  return (
    <div className="relative w-[1200px] max-w-xl">
      <input
        type="text"
        placeholder="Pesquisar Produto..."
        className="bg-gray-100 rounded-md p-4 pl-3 pr-10 w-full"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <CiSearch className="text-gray-400" size={22} />
      </div>
    </div>
  );
}
