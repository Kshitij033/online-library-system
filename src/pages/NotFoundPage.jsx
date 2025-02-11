import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

function NotFoundPage() {

    const err = useRouteError();

    return (
        <div className="container mx-auto p-4 text-center">
            <h1 className="text-4xl font-bold mb-4">{err.status} {err.statusText}</h1>
            <p className="mb-4">The page you are looking for does not exist.</p>
            <Link to="/" className="text-indigo-600 hover:underline">Go back to Home Page</Link>
        </div>
    )
}

export default NotFoundPage;