import { useState } from "react";



// interface Country {
//     id: number,
//     name: string,
// }

// const Selects = () => {
//     const [countries, setCountries] = useState<Country[]>([
//         { id: 1, name: "Armenia" },
//         { id: 2, name: "China" },
//         { id: 3, name: "Russia" },
//         { id: 4, name: "USA" },
//     ]);
//     const [searchedCountry, setSearchedCountry] = useState("");
//     const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);
//     const [dropdown, setDropdown] = useState(false);

//     const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setSearchedCountry(e.target.value);
//     }

//     const filteredCountries = countries.filter (
//         (country) => 
//             country.name.toLowerCase().includes(searchedCountry.toLowerCase()) &&
//             !selectedCountries.some((c) => c.id === country.id)
//     );

//     const handleOptionClick = (country: Country) => {
//         if (!selectedCountries.some((c) => c.id === country.id)) {
//             setSelectedCountries((prev) => [...prev, country]);
//         }
//         setSearchedCountry("");
//         setDropdown(false);
//     };
    
//     const removeCountry = (id: number) => {
//         setSelectedCountries((prev) => prev.filter((country) => country.id !== id))
//     };

//     const handleClose = () => {
//         setDropdown(true);
//     }


//     return (
//             <div>
//                 <div 
//                     style={{
//                         display: "flex",
//                         flexFlow: "row unwrap",
//                         justifyContent: "space-between",
//                         border: "1px solid #ccc",
//                         borderRadius: "4px",
//                         padding: "5px",
//                         // alignItems: "center",
//                         width: "100%",
                        
//                     }}>
//                     <div
//                         style={{
//                             backgroundColor: "gray",
//                             color: "black",
//                             // padding: "2px",
//                         }}
//                     >
//                         {selectedCountries.map((country) => (
//                             <div key={country.id}>
//                                 {country.name}
//                                 <span
//                                     style={{
//                                         border: "red",
//                                         color: "black",
//                                         padding: "5px",
//                                         backgroundColor: "gray",
//                                         marginLeft: ".3rem",
//                                     }}
//                                     onClick={() => removeCountry(country.id)}
//                                 >x</span>
//                             </div>
                

//                         ))}
//                     </div>
//                     <input 
//                         value={searchedCountry}
//                         onClick={() => handleClose()}
//                         onChange={handleSearch}
//                         placeholder="Search a country"
//                         onFocus={() => setDropdown(true)}
//                     />
//                 </div>
//                 {
//                     dropdown && filteredCountries.length > 0 && (
//                         <ul>
//                             {
//                                 filteredCountries.map((country) => (
//                                     <li
//                                         key={country.id}
//                                         onClick={() => handleOptionClick(country)}
//                                     >
//                                         {country.name}
//                                     </li>
//                                 ))
//                             }
//                         </ul>
//                     )
//                 }
//             </div>
//     )
// }


// export default Selects;


// function Selects () {
//     const [isOpen, setIsOpen] = useState(false);
//     const toggleOpen = () => {
//         setIsOpen(!isOpen);
//     }
//     return (
//         <>
//             {
//                 isOpen ? "Close" : "Open"
//             }
//             <button onClick={toggleOpen}>{isOpen ? "Close" : "Open"}</button>

//             {isOpen && 
//             <div>
//                 hey
//             </div>}
//         </>
//     )
// }

// export default Selects;