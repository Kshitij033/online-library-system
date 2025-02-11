import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetailsPage() {
    const { bookId } = useParams() 
    const allBooks = useSelector(state => state.booksCollection.books)
    const selectedBook = allBooks.find(book => book.id == parseInt(bookId))

    if(!selectedBook) {
        return (
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-5">Book not found</h1>
                <Link to="/books" className="text-indigo-600 flex gap-1 items-center border border-black w-fit p-2 rounded bg-white hover:bg-indigo-100 transition-all duration-200 shadow-md hover:shadow-lg"><span class="material-symbols-outlined">arrow_back</span>Back to Browse</Link>
            </div>
        )
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{selectedBook.title}</h1>
            <p className="text-gray-600 mb-2"><strong>Author: </strong>{selectedBook.author}</p>
            <p className="text-gray-600 mb-2"><strong>Category: </strong>{selectedBook.category}</p>
            <p className="text-gray-600 mb-4"><strong>Description: </strong>{selectedBook.description}</p>
            <p className="text-gray-600 mb-5"><strong>Rating: </strong>{selectedBook.rating} 🌟</p>
            <Link to="/books" className="text-indigo-600 flex gap-1 items-center border border-black w-fit p-2 rounded bg-white hover:bg-indigo-100 transition-all duration-200 shadow-md hover:shadow-lg"><span class="material-symbols-outlined">arrow_back_ios_new</span>Back to Browse</Link>
        </div>
    )
}

export default BookDetailsPage;