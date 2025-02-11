import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './utils/store.js'
import App from './App.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import HomePage from './pages/HomePage.jsx'
import BrowseBooksPage from './pages/BrowseBooksPage.jsx'
import BookDetailsPage from './pages/BookDetailsPage.jsx'
import AddBookPage from './pages/AddBookPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/books",
        element: <BrowseBooksPage />
      },
      {
        path: "/books/:categoryName",
        element: <BrowseBooksPage />
      },
      {
        path: "book/:bookId",
        element: <BookDetailsPage />
      },
      {
        path: "/add-book",
        element: <AddBookPage />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = { store }>
      <RouterProvider router = { router } />
    </Provider>
  </StrictMode>,
)
