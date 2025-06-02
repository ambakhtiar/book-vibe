import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishList } from '../../Utility/addToLocalStorage';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [sortType, setSortType] = useState("");

    const allBooks = useLoaderData();

    useEffect(() => {
        //  read book list
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));

        // Worst way, ideally this way doesnt work
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadList(readBookList);

        // wish list 
        const storedWishList = getStoredWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id));

        // Worst way, ideally this way doesnt work
        const wishBookList = allBooks.filter(book => storedWishListInt.includes(book.bookId));
        setWishList(wishBookList);

    }, [])

    const handleSort = (type) => {
        setSortType(type);
        if (type === "Rating") {
            const sortedReadList = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortedReadList);

            const sortedWishList = [...wishList].sort((a, b) => a.rating - b.rating);
            setWishList(sortedWishList);
        } else if (type === "No of Pages") {
            const sortedReadList = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedReadList);

            const sortedWishList = [...wishList].sort((a, b) => a.totalPages - b.totalPages);
            setWishList(sortedWishList);
        } else {
            const sortedReadList = [...readList].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
            setReadList(sortedReadList);

            const sortedWishList = [...wishList].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
            setWishList(sortedWishList)
        }
    }

    return (
        <div>
            <h2 className="text-5xl my-8">Listed Books</h2>

            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                    {
                        (sortType ? `Sort by ${sortType}` : "Sort by")
                    }
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleSort("Rating")}><a>Rating</a></li>
                    <li onClick={() => handleSort("No of Pages")}><a>No of Pages</a></li>
                    <li onClick={() => handleSort("Published Year")}><a>Published Year</a></li>
                </ul>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className="text-2xl font-bold">Books Read : {readList.length}</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                            readList.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h className="text-2xl font-bold">Read want to Books : {wishList.length}</h>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                            wishList.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;