import { useEffect, useState } from "react";

const OMBD_KEY = "6c60453e";
const OMDB_URL = `http://www.omdbapi.com/?apikey=${OMBD_KEY}&`;

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(`${OMDB_URL}s=${query}`, {
          signal: controller.signal,
        });

        if (!res.ok)
          throw new Error("Something went wrong with fetching the movies");

        const data = await res.json();
        if (data.response === "False") throw new Error("Movie not found");

        setMovies(data.Search);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.log(err.message);
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 2) {
      setMovies([]);
      setError("");
      return;
    }

    fetchMovies();

    return () => {
      controller.abort();
    };
  }, [query]);

  return { movies, isLoading, error };
}
