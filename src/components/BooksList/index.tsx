import {observer} from 'mobx-react-lite'
import books from '../../store/books'
import BooksItem from '../BooksItem'
import style from './booksList.module.sass'

const BooksList = observer(() => {
    return (
        <div className={style.booksListContainer}>
            <span className={style.booksList__count}>Found {books.totalItems} results</span>
            <div className={style.booksList}>
                {books.books.map((val: any) => {
                    const volumeInfo = val['volumeInfo']
                    let authors = []
                    try {
                        authors.push(Object.values(volumeInfo.authors))
                    } catch(err) {
                        console.log(`None authors for ${volumeInfo.title}`)
                    }
                    return <div>
                    <BooksItem
                        imgSrc={`http://books.google.com/books/content?id=${val.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                        title={volumeInfo.title}
                        authors={authors.join(`,&nbsp;`)}
                        description={volumeInfo.description}
                    />
                    </div>})}
            </div>
        </div>
    )
})

export default BooksList