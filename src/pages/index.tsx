import Head from 'next/head'
import SearchForm from '../components/SearchForm'
import style from './index.module.sass'
import books from '../store/books'
import React from 'react'
import { observer } from 'mobx-react-lite'
import BooksComponent from '../components/BooksComponent'
import BookPageComponent from '../components/BookPageComponent'

const Home = observer(() => {
    return (
        <div>
            <Head>
                <title>BOOKer</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <header className={style.header}>
                <h2 className={style.header__title}>
                    I will help you find the best book!
                </h2>
                <SearchForm />
            </header>
            <main className={style.main}>
                {books.isSinglePageBook ?
                    <BookPageComponent /> :
                    <BooksComponent />}
            </main>
        </div>
    )
})

export default Home