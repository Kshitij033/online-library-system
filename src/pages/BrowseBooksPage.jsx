import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

function BrowseBooksPage() {
    const { categoryName } = useParams();
    const allBooks = useSelector(state => state.booksCollection.books);
    const [ searchQuery, setSearchQuery ] = useState('')

    let filteredBooks = categoryName ? allBooks.filter(book => book.category.toLowerCase() === categoryName.toLowerCase()) : allBooks

    if(searchQuery.trim() !== '') {
        filteredBooks = filteredBooks.filter(book => 
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase())

        )
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 flex gap-1 items-center justify-between">
                {categoryName ? `${categoryName} Books` : "All Books"}
                <Link to="/" className="text-indigo-600 ">
                    <span className="material-symbols-outlined" title="back">arrow_back_ios_new</span>
                </Link>
            </h1>

            <div className="mb-4">
                <input type="text" placeholder="Search by title or author..." className="w-full p-2 border border-gray-300 rounded" value ={searchQuery} onChange = { (e) => setSearchQuery(e.target.value) } />
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredBooks.map(book => {
                    return <li key={ book.id } className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-bold">{book.title}</h2>
                        <p className="text-gray-600">by {book.author}</p>
                        <Link to={`/book/${book.id}`} className="text-indigo-600 hover:underline">
                            View Details
                        </Link>
                    </li>
                })}
            </ul>

        </div>
    )
}

export default BrowseBooksPage;