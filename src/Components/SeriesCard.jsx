export const SeriesCard = ({ curElem }) => {
  const { img_url, name, rating, description, genre, cast, watch_url } =
    curElem;
  return (
    <>
      <div>
        <img src={img_url} alt="" width="400px" height="400px" />
      </div>
      <h2 className="text-5xl">Name : {name}</h2>
      <h4> Rating : {rating}</h4>
      <p>Description : {description}</p>
      <p>Genre : {genre}</p>
      <p>Cast : {cast}</p>
      <a href={watch_url}>
        <button>Watch Now</button>
      </a>
    </>
  );
};
