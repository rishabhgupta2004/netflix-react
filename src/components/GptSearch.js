import { BG_URL } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

 const GptSearch = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full -z-10">
        <img className=" w-full h-full  object-fit-cover width:150px " src={BG_URL} alt="logo" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};
export default GptSearch;

