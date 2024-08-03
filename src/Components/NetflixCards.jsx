import seriesData from "../api/seriesData.json";
export const NetflixCards = () => {
  // const name = "Game of Thrones";
  // const imageLink =
  //   "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg";
  // const description =
  //   "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.";
  // const returnGenre = () => {
  //   const genre = "Action";
  //   return genre;
  // };
  // const rating = 8.9;
  // const age = 18;
  // const canWatch = () => {
  //   if (age >= 18) return "Watch Now";
  //   return "Not Available";
  // };
  return (
    <>
      {seriesData.map((curElem) => {
        return (
          <div key={curElem.id}>
            <div>
              <img src={curElem.img_url} alt="" width="400px" height="400px" />
            </div>
            <h2>Name : {curElem.name}</h2>
            <h4> Rating : {curElem.rating}</h4>
            <p>Description : {curElem.description}</p>
            <p>Genre : {curElem.genre}</p>
            <p>Cast : {curElem.cast}</p>
            <a href={curElem.watch_url}>
              <button>Watch Now</button>
            </a>
          </div>
        );
      })}
    </>
  );
};
