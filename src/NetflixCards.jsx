export const NetflixCards = () => {
  const name = "Game of Thrones";
  const imageLink =
    "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg";
  const description =
    "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.";
  const returnGenre = () => {
    const genre = "Action";
    return genre;
  };
  const rating = 8.9;
  const age = 18;
  const canWatch = () => {
    if (age >= 18) return "Watch Now";
    return "Not Available";
  };
  return (
    <>
      <div>
        <img src={imageLink} alt="" width="400px" height="400px" />
      </div>
      <h2>Name : {name}</h2>
      <h4> Rating : {rating + 9}</h4>
      <p>Description : {description}</p>
      <p>Genre : {returnGenre()}</p>
      {/* <p>
        {age >= 18 ? (
          <button>Watch Now</button>
        ) : (
          <button disabled>Watch </button>
        )}
      </p> */}
      <button>{canWatch()}</button>
    </>
  );
};
