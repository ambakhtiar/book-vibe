import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../../Utility/addToLocalStorage";

const BookDetail = () => {

    let { bookId } = useParams();
    let id = parseInt(bookId);

    const data = useLoaderData();
    const book = data.find(book => book.bookId === id);

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    const handleReadList = (id) => {
        addToStoredReadList(id);
    }

    const handleWishList = (id) => {
        addToStoredWishList(id);
    }

    return (
        <div className="hero mb-16 lg:h-[711px]">
            <div className="hero-content flex-col lg:flex-row items-center gap-6 lg:gap-12">
                {/* Image Section */}
                <div className="flex-1">
                    <div className="bg-gray-200 p-8 lg:p-16 rounded-lg shadow-md">
                        <img
                            src={image}
                            className="w-3/4 lg:w-[425px] lg:h-[564px] mx-auto object-cover"
                            alt="Book cover"
                        />
                    </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-between flex-1 lg:h-[711px] gap-4">
                    <h1 className="text-3xl font-bold">{bookName}</h1>
                    <p>By : {author}</p>
                    <hr />
                    <p>{category}</p>
                    <hr />
                    <div>
                        <h2 className="inline font-bold">Review: </h2>
                        <p className="inline">{review}</p>
                    </div>
                    <div className="flex justify-start gap-4 flex-wrap">
                        <h2 className="inline font-bold">Tag</h2>
                        {tags.map((tag, i) => (
                            <button key={i} className="btn btn-md text-green-500">
                                #{tag}
                            </button>
                        ))}
                    </div>
                    <hr />
                    <p>Number of Pages: {totalPages}</p>
                    <p>Publisher: {publisher}</p>
                    <p>Year of Publication: {yearOfPublishing}</p>
                    <p>Rating: {rating}</p>
                    <div>
                        <button onClick={() => handleReadList(id)} className="btn mr-4">Mark as Read</button>
                        <button onClick={() => handleWishList(id)} className="btn btn-accent">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default BookDetail;