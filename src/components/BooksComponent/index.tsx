import books from '../../store/books'
import { CircleLoader } from 'react-spinners'
import BooksList from '../BooksList'
import style from './booksComponent.module.sass'
import { observer } from 'mobx-react-lite'

const BooksComponent = observer(() => {
    return (<div className={style.booksComponent}>
        <BooksList />
        {books.isFinding ?
            <CircleLoader className={style.booksComponent__loader}/> : false}
        {books.books.length > 0 ? <button className={style.booksComponent__loadMore} onClick={() => {
            books.isFinding = true
            books.currentBooksPage += 1
            books.fetchBooks(true)
        }}>Load More</button> : false}
    </div>)
})

export default BooksComponent