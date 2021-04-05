import searchIcon from "../files/images/icons/search.svg";
const HeaderSearchBar = () => {
  return (
    <div className="header-searchbar">
      <input placeholder="Search"></input>
      <img className="search-icon" src={searchIcon} alt="search-icon" />
    </div>
  );
};
export default HeaderSearchBar;
