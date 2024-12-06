import { useState } from "react";
import  checkmark  from "../src/assets/icons/accept.png";
// import { SearchIcon } from "../src/assets/icons/search.png";
interface Country {
    id: number;
    name: string;
}

function MultiSelect() {
    const [countries] = useState<Country[]>([
        { id: 1, name: "Armenia" },
        { id: 2, name: "China" },
        { id: 3, name: "Russia" },
        { id: 4, name: "USA" },
    ]);

    const [searchedCountry, setSearchedCountry] = useState("");
    const [dropDown, setDropdown] = useState(false);
    const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isCheckMark, setIsCheckMark] = useState(false);
    // const [isSearchIcon, setIsSearchIcon] = useState(false);
    const [tags, setTags] = useState<Country[]>([]);

    // const toggleCheckmark = () => {
    //     setCheckMark(!checkMark);
    // };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchedCountry(e.target.value);
        setDropdown(true);
    };

    const handleOptionClick = (country: Country) => {
        if (selectedCountries.some((c) => c.id === country.id)) {
            // setSelectedCountries((prev) => [...prev, country]);
            setSelectedCountries((prev) => prev.filter((c) => c.id !== country.id));
        } else {
            setSelectedCountries((prev) => [...prev, country]);
        }
        setSearchedCountry("");
        setDropdown(true);

        // added this for checkmark
        setIsCheckMark(!isCheckMark);

        // setIsOpen(isOpen);
    };

    const removeSelectedCountry = (id: number) => {
        setSelectedCountries((prev) => prev.filter((country) => country.id !== id));
    };

    const filteredCountries = countries.filter(
        (country) =>
            country.name.toLowerCase().includes(searchedCountry.toLowerCase())
        // &&
            // !selectedCountries.some((c) => c.id === country.id)
    );

    const toggleOpen = () => {
        setDropdown(!dropDown);
    };

    // const toggleSearchIcon = () => {
    //     setIsSearchIcon(!isSearchIcon);
    // };

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // console.log("Key pressed:", e.key);  // Log key
    console.log("Current search:", searchedCountry); // Log search value
    console.log("Tags:", tags); // Log tags
        if (e.key === "Enter" && searchedCountry.trim() !== "") {
          e.preventDefault();
          if (!tags.includes(searchedCountry.trim())) {
            setTags([...selectedCountries, searchedCountry.trim()]);
            setSearchedCountry("");
          }
        } else if (e.key === "Backspace" && searchedCountry === "" && tags.length > 0) {
          setTags(selectedCountries.pop());
        }
      };

    return (
        <div style={{ position: "relative", width: "300px" }}>
            <div
                style={{
                    display: "flex",
                    flexFlow: "unwrap",
                    gap: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    padding: "5px",
                    alignItems: "center",
                    width: "658px",
                    height: "28px",
                }}
                >
                {selectedCountries.map((country) => (
                    <div
                        key={country.id}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            background: "black",
                            borderRadius: "4px",
                            padding: "2px 8px",
                        }}
                    >
                        {country.name}
                        <span
                            onClick={() => removeSelectedCountry(country.id)}
                            style={{
                                marginLeft: "8px",
                                cursor: "pointer",
                                color: "#ff0000",
                                fontWeight: "bold",
                            }}
                        >
                            &times;
                        </span>
                        {/* <span>{SearchIcon}</span> */}
                    </div>
                ))}

                
                <input
                    className="select_input"
                    type="text"
                    value={searchedCountry}
                    onClick={toggleOpen}
                    onChange={handleSearch}
                    onFocus={() => setDropdown(true)}
                    onKeyDown={handleInputKeyDown}
                    placeholder="Search and select countries"
                    style={{
                        flex: 1,
                        border: "none",
                        outline: "none",
                        fontSize: "1rem",
                        padding: "1rem",
                        // height: "28px",
                    }}
                />
            </div>

            {/* { isOpen && (<div>div</div>)} */}
            {dropDown && filteredCountries.length > 0 && (
                <ul
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        right: "0",
                        backgroundColor: "gray",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        margin: 0,
                        padding: 0,
                        listStyle: "none",
                        maxHeight: "150px",
                        overflowY: "auto",
                        zIndex: 1000,
                    }}
                >
                    {filteredCountries.map((country) => (
                        <li className="country_option"
                            key={country.id}
                            onClick={() => handleOptionClick(country)}
                            style={{
                                padding: "8px",
                                cursor: "pointer",
                                borderBottom: "1px solid #f0f0f0",
                                backgroundImage: `$url{checkmark}`,
                            }}
                            onMouseDown={(e) => e.preventDefault()}
                        >
                            <span>{country.name} </span>
                            {selectedCountries.some((c) => c.id === country.id) && (
                                <img
                                    src={checkmark}
                                    alt="checkmark"
                                    style={{ width: "16px", height: "16px", marginLeft: "10px" }}
                                />
                            )}                           
                        </li>
                    ))}
                </ul>
            )}        
        </div>

    );
}

export default MultiSelect;
