import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import BookDetail from './components/BookDetail/BookDetail';
import ListedBooks from './components/ListedBooks/ListedBooks';
import { ToastContainer, Zoom } from 'react-toastify';
import Statistic from './components/Statistic/Statistic';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "books/:bookId",
                element: <BookDetail></BookDetail>,
                loader: () => fetch("booksData.json")
            },
            {
                path: "listedBooks",
                element: <ListedBooks></ListedBooks>,
                // Worst way, ideally this way doesnt work
                loader: () => fetch("booksData.json")
            },
            {
                path: "statistic",
                element: <Statistic></Statistic>,
                loader: () => fetch("booksData.json")
            }
        ]
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
        <ToastContainer
            position="top-center"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Zoom}
        />
    </StrictMode>,
)
