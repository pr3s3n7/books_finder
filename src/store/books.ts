import {makeAutoObservable} from 'mobx'
import map from '../pages/map'

class Books {
    private _key = 'AIzaSyC4er5O49Ji3CRRYXIQ6XBlWAMqaDsqO4s'
    books: any[] = []
    searchRequest = ""
    items = new Set()
    totalItems: number = 0
    isFinding = false
    isSinglePageBook = false
    currentCategory = map.CATEGORIES_OPTIONS[0]
    currentSorting = map.SORTING_OPTIONS[0]
    currentBooksPage = 0
    currentBook: object = {}

    constructor() {
        makeAutoObservable(this)
    }

    clearBooks = () => {
        this.books = []
        this.items.clear()
    }

    addBooks = (data: any) => {
        if (this.totalItems > 0) {
            console.log(data)
            if (data['items']) {
                data['items'].map((val: object) => this.items.add(val))
                this.books = Array.from(this.items)
            } else {
                alert('The books are over!')
            }
        }
    }

    fetchBooks(next: boolean) {
        //https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=AIzaSyC4er5O49Ji3CRRYXIQ6XBlWAMqaDsqO4s
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.searchRequest}:${this.currentCategory}&orderBy=${this.currentSorting}&startIndex=${this.currentBooksPage * 30}&maxResults=30&key=${this._key}`)
            .then(data => data.json())
            .then(data => {
                console.log(data)
                this.isFinding = false
                if (next) {
                    this.addBooks(data)
                } else {
                    this.clearBooks()
                    this.totalItems = data['totalItems']
                    this.addBooks(data)
                }
            })
    }
}

export default new Books()