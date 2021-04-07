import axios from "./axios";
import { useEffect, useState } from "react";
import "./Row.css"
function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([])
    const baseUrl = "https://image.tmdb.org/t/p/w500/"
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request;
        }
        fetchData()
    }, [fetchUrl])
    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row_posters">
                {movies.map(
                    (movie) => 
                    ((isLargeRow && movie.poster_path) ||
                    (!isLargeRow && movie.backdrop_path )) && (
                        <img
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                        key={movie.id} />
                    )
                )}
            </div>
        </div>
    );
}
export default Row;