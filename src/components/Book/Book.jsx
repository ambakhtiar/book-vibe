import { FaStar } from "react-icons/fa";
import { Link, Links } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm p-2 border rounded-xl">
                <figure className='bg-blue-100 py-8 rounded-xl'>
                    <img className='h-[166px] object-cover'
                        src={image}
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className='flex justify-start gap-4'>
                        {
                            tags.map((tag, i) => <button key={i} className='btn btn-xs bg-green-200 text-green-500'>{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        {/* <div className="badge badge-secondary">NEW</div> */}
                    </h2>
                    <p>by: {author}</p>
                    <div className='border-t-2 border-dotted'></div>
                    <div className="card-actions justify-between">
                        <div className="">{totalPages} Pages</div>
                        <div className="flex items-center">
                            <span className="font-semibold">{rating}</span>
                            <FaStar className="text-yellow-300 ml-2"></FaStar>
                        </div>
                    </div>
                    <div className="badge badge-outline">{category}</div>
                </div>
            </div>
        </Link>
    );
};

export default Book;