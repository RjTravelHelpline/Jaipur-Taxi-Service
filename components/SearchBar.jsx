"use client"
import { all_search_packages, bus_rentals, cheapest_cabs, luxury_cabs, sedan_cabs, suv_cabs, tempo_rentals } from '@/data/GlobalSearch';
import { getPackagesByCategory } from '@/utils/utils';
import Link from 'next/link';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { RiSearch2Fill } from 'react-icons/ri';

const SearchBar = ({ displaySuggestions = true, disabled = false, autoFocus = true, handleModal = true }) => {
    const all_cab_rentals = [...cheapest_cabs, ...sedan_cabs, ...suv_cabs, ...luxury_cabs, ...bus_rentals, ...tempo_rentals]
    const filteredSuggestions = getPackagesByCategory(all_cab_rentals, 'popular')
    const [query, setQuery] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(true);
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
            const results = all_search_packages.filter(item =>
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
            <div className='search-inner w-100 d-flex justify-content-center align-items-center rounded-4'>
                <RiSearch2Fill className='text-tertary fs-3 me-2' />
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder='Find car rentals, tour packages & more!'
                    className=''
                    disabled={disabled}
                    autoFocus={autoFocus}
                    onFocus={() => setShowSuggestions(true)}
                /> {query && (
                    <button className='bg-tertary rounded-5 d-flex justify-content-center align-items-center p-2 input-clear-button' onClick={handleClear}>
                        <IoClose />
                    </button>
                )}
            </div>
            {displaySuggestions && showSuggestions && !query && (
                <>
                    <div className="col-12">
                        <hr />
                        <h3 className='text-capitalize web-title'>Popular & Trendings</h3>
                    </div>
                    <div className="search-suggestions d-flex flex-wrap justify-content-start bg-white py-lg-3 py-sm-2">
                        {filteredSuggestions.map((suggestion, index) => (
                            <Link href={suggestion.navigate} onClick={handleModal} key={index} className="suggestion-item d-flex justify-content-between align-items-end gap-2">
                                {suggestion.title}
                                <span>
                                    <MdOutlineArrowOutward className='text-black' />
                                </span>
                            </Link>
                        ))}
                    </div>
                </>
            )}
            {filteredBlogs.length > 0 && (
                <>
                    <hr />
                    <ul className="search-results mt-2">
                        {filteredBlogs.map((data, index) => (
                            <li key={index} onClick={() => handleBlogClick(data.navigate)} className="search-item d-flex justify-content-start gap-2 align-items-center text-capitalize">
                                <span><MdOutlineArrowOutward className='text-tertary bg-tertary-down p-2 fs-2 rounded-5' /></span>{data.title}
                            </li>
                        ))}
                    </ul>
                </>
            )}
            {query && filteredBlogs.length === 0 && (
                <ul className="search-results mt-2">
                    <li className="search-item no-results">No results found</li>
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
