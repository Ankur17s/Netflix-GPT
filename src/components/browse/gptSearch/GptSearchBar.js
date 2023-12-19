import { useSelector } from "react-redux";
import lang from "../../../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  console.log(langKey);
  return (
    <div className="w-full flex justify-center">
      <form className="w-1/2 grid grid-cols-12 gap-3">
        <input
          className="py-3 indent-4 col-span-9 border-2 border-solid border-gray-500 rounded-lg outline-none"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="bg-red-600 col-span-3 rounded-lg text-white text-lg font-semibold">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
