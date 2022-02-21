import React, { useState, useEffect } from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovies = (search, type) => {
    setLoading(true);
    let arr = [];
    let searchMovie = search.toLowerCase();
    fetch(
      `https://www.omdbapi.com/?s=${searchMovie}&type=${type}&apikey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (!data.Search) {
          setMovies(arr);
          setLoading(false);
        } else {
          data.Search.forEach((data) => {
            fetch(`https://www.omdbapi.com/?i=${data.imdbID}&apikey=${API_KEY}`)
              .then((response) => response.json())
              .then((info) => {
                arr.push({
                  Poster: info.Poster,
                  Title: info.Title,
                  Year: info.Year,
                  Plot: info.Plot,
                  Type: info.Type,
                  imdbID: info.imdbID,
                });
                if (arr.length === 10) {
                  setMovies(arr);
                  setLoading(false);
                }
              })
              .catch((error) => {
                console.log(error);
              });
          });
        }
      });
  };

  useEffect(() => {
    let arr = [];
    fetch(`https://www.omdbapi.com/?s=spider man&apikey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        data.Search.forEach((data) => {
          fetch(`https://www.omdbapi.com/?i=${data.imdbID}&apikey=${API_KEY}`)
            .then((response) => response.json())
            .then((info) => {
              arr.push({
                Poster: info.Poster,
                Title: info.Title,
                Year: info.Year,
                Plot: info.Plot,
                Type: info.Type,
                imdbID: info.imdbID,
              });
              if (arr.length === 10) {
                setMovies(arr);
                setLoading(false);
              }
            })
            .catch((error) => {
              console.log(error);
            });
        });
      });
  }, []);

  return (
    <main className="page">
      <div className="page__container container">
        <Search searchMovies={searchMovies} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </div>
    </main>
  );
}

export { Main };

// class Main extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       movies: [],
//       loading: true,
//     };
//   }

//   componentDidMount() {
//     let arr = [];
//     fetch(`https://www.omdbapi.com/?s=spider man&apikey=${API_KEY}`)
//       .then((response) => response.json())
//       .then((data) => {
//         data.Search.forEach((data) => {
//           fetch(`https://www.omdbapi.com/?i=${data.imdbID}&apikey=${API_KEY}`)
//             .then((response) => response.json())
//             .then((info) => {
//               arr.push({
//                 Poster: info.Poster,
//                 Title: info.Title,
//                 Year: info.Year,
//                 Plot: info.Plot,
//                 Type: info.Type,
//                 imdbID: info.imdbID,
//               });
//               this.setState({ movies: arr, loading: false });
//             });
//         });
//       });
//   }

//   searchMovies = (search, type) => {
//     this.setState({ loading: true });
//     let arr = [];
//     const searchMovie = search.toLowerCase();
//     fetch(
//       `https://www.omdbapi.com/?s=${searchMovie}&type=${type}&apikey=${API_KEY}`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         if (!data.Search) {
//           this.setState({ movies: arr, loading: false });
//         } else {
//           data.Search.forEach((data) => {
//             fetch(`https://www.omdbapi.com/?i=${data.imdbID}&apikey=${API_KEY}`)
//               .then((response) => response.json())
//               .then((info) => {
//                 arr.push({
//                   Poster: info.Poster,
//                   Title: info.Title,
//                   Year: info.Year,
//                   Plot: info.Plot,
//                   Type: info.Type,
//                   imdbID: info.imdbID,
//                 });
//                 this.setState({ movies: arr, loading: false });
//               });
//           });
//         }
//       });
//   };

//   render() {
//     const { movies, loading } = this.state;
//     return (
//       <main className="page">
//         <div className="page__container container">
//           <Search searchMovies={this.searchMovies} />
//           {loading ? <Preloader /> : <Movies movies={movies} />}
//         </div>
//       </main>
//     );
//   }
// }

// export { Main };
