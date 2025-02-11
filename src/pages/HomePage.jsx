import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import WelcomeHeader from '../components/WelcomeHeader'

function HomePage() {
    const bookCollection = useSelector(state => state.booksCollection.books)
    const popularBooks = bookCollection.filter(book => book.rating >= 4.5)

    const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Biography", "Fantasy"]

    return (
        <div className="container mx-auto p-4">

            <WelcomeHeader />
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Book Categories</h2>
                <ul className="flex flex-wrap gap-4">
                    {categories.map((category) => {
                        return <li key= {category}>
                            <Link to={`/books/${category}`} className='bg-indigo-200 text-indigo-800 px-4 py-2 rounded hover:bg-indigo-300'>
                                {category}
                            </Link>
                        </li>
                    })}
                </ul>
            </section>

            <section>
                <h2 className='text-2xl font-semibold mb-4'>Popular Books</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {popularBooks.map(book => {
                        return <li key={ book.id } className='bg-white p-4 rounded shadow'>
                            <h3 className="text-xl font-bold">{book.title}</h3>
                            <p className="text-gray-600 mb-1">by {book.author}</p>
                            <Link to={`/book/${book.id}`} className='text-indigo-600 hover:underline'>
                                View Details
                            </Link>
                        </li>
                    })}
                </ul>
            </section>
        </div>
    )
}

export default HomePage;