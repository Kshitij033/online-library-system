import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewBook } from "../utils/bookSlice"
import { useNavigate } from "react-router-dom";

function AddBookPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [titleInput, setTitleInput] = useState('')
    const [authorInput, setAuthorInput] = useState('')
    const [categoryInput, setCategoryInput] = useState('')
    const [descriptionInput, setDescriptionInput] = useState('')
    const [ratingInput, setRatingInput] = useState('')

    const handleBookSubmission = (e) => {
        e.preventDefault()

        if(!titleInput || !authorInput || !categoryInput || !descriptionInput || !ratingInput) {
            alert("Please fill in all fields.")
            return
        }

        const newBookEntry = {
            id: Date.now(),
            title: titleInput,
            author: authorInput,
            category: categoryInput,
            description: descriptionInput,
            rating: parseFloat(ratingInput)
        }

        dispatch(addNewBook(newBookEntry))

        navigate('/books')
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Add a New Book</h1>
            <form onSubmit={handleBookSubmission} className="max-w-lg mx-auto bg-white p-6 rounded shadow">
                <div className="mb-4">
                    <label className="block text-gray-700">Title</label>
                    <input type="text" value={titleInput} onChange={ (e) => setTitleInput(e.target.value) } className="w-full p-2 border border-gray-300 rounded" placeholder="Enter book title" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Author</label>
                    <input type="text" value={authorInput} onChange={ (e) => setAuthorInput(e.target.value) } className="w-full p-2 border border-gray-300 rounded" placeholder="Enter author name" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Category</label>
                    <input type="text" value={categoryInput} onChange={ (e) => setCategoryInput(e.target.value) } className="w-full p-2 border border-gray-300 rounded" placeholder="Enter book category" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea value={descriptionInput} onChange={ (e) => setDescriptionInput(e.target.value) } className="w-full p-2 border border-gray-300 rounded" placeholder="Enter book description" rows="3"></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Rating</label>
                    <input type="number" step="0.1" value={ratingInput} onChange={ (e) => setRatingInput(e.target.value) } className="w-full p-2 border border-gray-300 rounded" placeholder="Enter book rating (e.g. 4.9)" />
                </div>
                <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Submit Book</button>
            </form>
        </div>
    )
}

export default AddBookPage