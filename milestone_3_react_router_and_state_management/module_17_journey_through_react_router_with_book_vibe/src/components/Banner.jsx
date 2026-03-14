import book_hero_img from "./../assets/hero_img.jpg";

const Banner = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="">Books to freshen up your bookshelf</div>

      <div className="">
        <img src={book_hero_img} alt="book banner image" />
      </div>
    </div>
  );
};

export default Banner;
