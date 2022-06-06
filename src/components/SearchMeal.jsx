import React from 'react';
import './searchMeal.css'

export default function SearchMeal({ onSearch }) {
    return (
        <div className="searchCon">
            <form onSubmit={onSearch} className="searchForm" >
                <input
                    name="search"
                    type="text"
                    placeholder="type one ingredient..."
                    className="searchInput"
                />

                <button type="submit" className="searchBtn"> Search </button>


            </form>
        </div>
    )
}
