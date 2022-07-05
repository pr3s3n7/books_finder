import React from "react";
import Select from "../utils/Select";
import style from './searchForm.module.sass'
import map from '../../pages/map'
import books from '../../store/books'

const SearchForm = () => {

    return (
        <form className={style.searchMenu} onSubmit={(e) => {
            e.preventDefault()
            books.isFinding = true
            books.currentBooksPage = 0
            books.fetchBooks(false)
        }}>
            <div className={style.searchMenuChildContainer}>
                <input type="text" className={style.search} onChange={(e) => books.searchRequest = e.target.value.replace(' ', '%20')}/>
                <button type="submit" className={style.searchButton}></button>
            </div>
            <div className={style.searchMenuChildContainer}>
                <span>Categories</span><Select options={map.CATEGORIES_OPTIONS} title={map.SELECT_TITLE.category} />
                <span>Sorted By</span><Select options={map.SORTING_OPTIONS} title={map.SELECT_TITLE.sorting} />
            </div>
        </form>
    )
}

export default SearchForm