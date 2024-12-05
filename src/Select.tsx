import { useState } from "react"


function Select () {

    interface Country {
        id: number,
        name: string,
    };

    const [countries, setCountries] = useState<Country[]>([
        { id: 1, name: "Armenia" },
        { id: 2, name: "China" },
        { id: 3, name: "Russia"},
        { id: 4, name: "USA"},
    ]);

    const [searchedCountry, setSearchedCountry] = useState("");

    const [dropDown, setDropdown] = useState(false);

    const searchCountry = (id: number): Country | undefined => {
        return countries.find((country) => country.id === id);
    };

    const handleSearch = () => {
        if(searchedCountry.trim() !== "") {
            setSearchedCountry()
        }
    }

    // const filterCountries = (id) => {
    //     const filteredCountries = countries.filter
    // }

    // const removeCountry = (id) => {

    // }

    return (
        <div>
            <input/>  
            <select>
                {
                    countries.map((country: Country) => (
                        <option key={country.id}>{country.name}</option>
                    ))
                }
            </select>

            {/* {
                countries.map((country: Country) => (
                    <ul key={country.id}>
                        <li>{country.name}</li>
                    </ul>
                ))
            }        */}
        </div>
    )
}

export default Select;