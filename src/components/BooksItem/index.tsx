import style from './booksItem.module.sass'
import books from '../../store/books'

interface IBooksItem {
    imgSrc: string
    title: string
    authors: string
    description: string
}

const BooksItem = ({ imgSrc, title, authors, description }: IBooksItem) => {

    return <div className={style.book} onClick={() => {
        books.isSinglePageBook = true
        books.currentBook = {
            imgSrc,
            title,
            authors,
            description
        }
    }}>

        <div className={style.bookContainer}>
            <img
                src={imgSrc}
                height={300}
                width={'auto'}
            />
            <h2 className={style.book__title}>{title}</h2>
            <h4 className={style.book__authors}>{authors}</h4>
        </div>
    </div>
}

export default BooksItem