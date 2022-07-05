import style from './bookPageComponent.module.sass'
import books from '../../store/books'

const BookPageComponent = () => {
    let book: any = books.currentBook

    return (<div className={style.bookPageComponent}>
        <div className={style.bookPageComponent__picture}>
            <img src={book.imgSrc} className={style.bookPageComponent__img} />
        </div>
        <div className={style.bookPageComponent__info}>
            <p className={style.info__category}>category → {books.currentCategory}</p>
            <p className={style.info__title}>{book.title}</p>
            {book.authors ? <p className={style.info__authors}>Authors: {book.authors}</p> : false}
            <hr />
            {book.description ? <p className={style.info__description}>{book.description}</p> : false}
        </div>
        <button className={style.bookPageComponent__quit} onClick={() => books.isSinglePageBook = false}>X</button>
    </div>)
}

export default BookPageComponent