import style from './select.module.sass'
import books from '../../../store/books'
import map from '../../../pages/map'

interface ISelectInteface {
    options: string[],
    title: string
}

export default function Select({ options, title }: ISelectInteface) {
    return <select className={style.select} onChange={(e) => {
        if (title === map.SELECT_TITLE.category) {
            books.currentCategory = e.currentTarget.value
        } else if (title === map.SELECT_TITLE.sorting) {
            books.currentSorting = e.currentTarget.value
        }
    }
    }>
        {options.map(option => <option>
            {option}
        </option>)}
    </select>
}