"use client"
import { allCabRentals, CabRentalsByCities, cheapestCabRentals, luxuryBusRentals, luxuryCabRentals } from '@/data/cabRentalData';
import { allTourPackages, JaipurDayTours, PlacesToVisitInJaipur, PlacesToVisitInRajasthan, rajasthanTourByCar, RajasthanTourByCars, TourPackagesByCategory } from '@/data/TourPackagesData';
import { getPackagesByCategory } from '@/utils/utils';
import Link from 'next/link';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';

const SearchBar = () => {
    const filteredSuggestions = getPackagesByCategory(allCabRentals, 'popular')

    const [query, setQuery] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(true);

    const allCarRentalsForSearch = [...cheapestCabRentals, ...luxuryBusRentals, ...luxuryCabRentals, ...CabRentalsByCities, ...JaipurDayTours, ...TourPackagesByCategory, ...RajasthanTourByCars, ...PlacesToVisitInJaipur, ...PlacesToVisitInRajasthan]

    const handleClear = () => {
        setQuery('');
        setFilteredBlogs([]);
        setShowSuggestions(true);
    };
    const handleInputChange = (event) => {
        const value = event.target.value;
        setQuery(value);

        if (value) {
            setShowSuggestions(false);
            const results = allCarRentalsForSearch.filter(item =>
                item.title.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredBlogs(results);
        } else {
            setFilteredBlogs([]);
            setShowSuggestions(true);
        }
    };

    const handleBlogClick = (d) => {
        window.location.href = `${d}`;
    };


    return (
        <div className="blog-search-bar w-100">
            <div className='w-100 d-flex justify-content-center align-items-center'>
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder='search for taxies, tours and more'
                    className=''
                    onFocus={() => setShowSuggestions(true)}
                /> {query && (
                    <button className='bg-tertary rounded-5 d-flex justify-content-center align-items-center p-2 input-clear-button' onClick={handleClear}>
                        <IoClose />
                    </button>
                )}
            </div>
            {showSuggestions && !query && (
                <>
                    <div className="col-12 col-lg-10 col-sm-8">
                        <hr />
                    </div>
                    <div className="search-suggestions d-flex flex-wrap">
                        {filteredSuggestions.map((suggestion, index) => (
                            <Link href={suggestion.href} key={index} className="suggestion-item">{suggestion.title}</Link>
                        ))}
                    </div>
                </>
            )}
            {filteredBlogs.length > 0 && (
                <ul className="search-results mt-3">
                    {filteredBlogs.map((data, index) => (
                        <li key={index} onClick={() => handleBlogClick(data.navigate)} className="search-item">
                            {data.title}
                        </li>
                    ))}
                </ul>
            )}
            {query && filteredBlogs.length === 0 && (
                <ul className="search-results mt-3">
                    <li className="search-item no-results">No results found</li>
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
