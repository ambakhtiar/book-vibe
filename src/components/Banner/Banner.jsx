import bannerImg from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bannerImg}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold w-3/4">Books to freshen up your bookshelf</h1>
                    <p className="py-6">Unfold new narratives. Summon fresh characters to your quest, turning pages to deeper lore and untold adventures. Your grand story broadens with every addition.</p>
                    <button className="btn btn-primary">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;