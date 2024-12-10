import { useCallback, useMemo, useState } from "react";
// import checkmark from "../src/assets/icons/accept.png";
// import noDataIcon from "../src/assets/icons/nodata.png";
import Country from "./Country";
import EmptyData from "./EmptyData";

interface Country {
  id: number;
  name: string;
}

const countries = [
    { id: 101, name: "Armenia" },
    { id: 102, name: "China" },
    { id: 103, name: "Russia" },
    { id: 104, name: "USA" },
];

function MultiSelect() {
//   const [countries] = useState<Country[]>([
//     { id: 101, name: "Armenia" },
//     { id: 102, name: "China" },
//     { id: 103, name: "Russia" },
//     { id: 104, name: "USA" },
//   ]);

  const [searchedCountry, setSearchedCountry] = useState("");
  const [dropDown, setDropdown] = useState(false);
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);
  
  const [isCheckMark, setIsCheckMark] = useState(false);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedCountry(e.target.value);
    setDropdown(true);
  }, []);

  const handleOptionClick = (id: number) => {
    if (selectedCountries.some((c) => c.id === id)) {
      setSelectedCountries((prev) => prev.filter((c) => c.id !== id));
    } else {
      const selectedCountry = countries.find((c) => c.id === id);
      if (selectedCountry) {
        setSelectedCountries((prev) => [...prev, selectedCountry]);
      }
    }
    setSearchedCountry("");
    setDropdown(true);
    setIsCheckMark(!isCheckMark);
  };

  const removeSelectedCountry = (id: number) => {
    setSelectedCountries((prev) => prev.filter((country) => country.id !== id));
  };

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchedCountry.toLowerCase())
  );

  const toggleOpen = () => {
    setDropdown(!dropDown);
  };

  const handleInputKeyDown = 
  useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && searchedCountry.trim() === "" && selectedCountries.length > 0) {
      setSelectedCountries((prev) => prev.slice(0, -1));
    }

    if (e.key === "Enter" && searchedCountry.trim() !== "") {
      let newCountry = countries.find((country) =>
        country.name.toLowerCase().startsWith(searchedCountry.toLowerCase())
      );
      if (newCountry && !selectedCountries.some((c) => c.id === newCountry.id)) {
        const clickedCountry = [...selectedCountries];
        clickedCountry.push(newCountry);
        setSelectedCountries(clickedCountry);
        console.log(newCountry);
      }
      setSearchedCountry("");
    }
  }
  , [searchedCountry, selectedCountries]
);

  return (
    <div className="select-wrapper">
      <div className="input-wrapper">
        {selectedCountries.map((country) => (
          <div className="country-wrapper" key={country.id}>
            {country.name}
            <span onClick={() => removeSelectedCountry(country.id)} className="span-remove-icon">
              &times;
            </span>
          </div>
        ))}

        <input
          className="select-input"
          type="text"
          value={searchedCountry}
          onClick={toggleOpen}
          onChange={handleSearch}
          onFocus={() => setDropdown(true)}
          onKeyDown={handleInputKeyDown}
          placeholder="Search and select countries"
        />
      </div>
      {dropDown &&
        filteredCountries.length > 0 && (
          <ul className="country-ul">
            {filteredCountries.map((country) => (
              <Country
                isChecked={selectedCountries.some((_country) => _country.id === country.id)}
                key={country.id}
                id={country.id}
                name={country.name}
                handleOptionClick={handleOptionClick}
              />
            ))}
          </ul>
        ) 
        ||
        dropDown &&
        filteredCountries.length === 0 && (
            <ul>
              <EmptyData />
            </ul>
          )
          }
    </div>
  );
}

export default MultiSelect;
