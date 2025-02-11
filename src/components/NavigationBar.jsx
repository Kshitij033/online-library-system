import { Link } from "react-router-dom";

function NavigationBar() {
    return (
        <nav className="bg-indigo-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex justify-center items-center gap-3">
                    <h3 className="font-bold text-xl">Online Library</h3>
                </div>
                <div className="space-x-4 flex flex-row ">
                    <Link to="/" className="hover:text-indigo-200 flex gap-1 items-center"><span class="material-symbols-outlined">home</span>Home</Link>
                    <Link to="/books" className="hover:text-indigo-200 flex gap-1 items-center"><span class="material-symbols-outlined">library_books</span>Browse Books</Link>
                    <Link to="/add-book" className="hover:text-indigo-200 flex gap-1 items-center"><span class="material-symbols-outlined">library_add</span>Add Book</Link>
                </div>

            </div>
        </nav>
    )
}

export default NavigationBar;