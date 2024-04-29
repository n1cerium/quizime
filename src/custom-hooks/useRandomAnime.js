import { useState, useEffect } from "react";

export function useRandomAnime(url) {
  const [anime, setAnime] = useState({});
  const [level, setLevel] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  //const [url, setUrl] = useState("");
  //const [totalPages, totalCountPerPage] = usePageCount();
  useEffect(() => {
    async function getAnime() {
      setIsLoading(true);
      const animeRes = await fetch(url);
      const animeData = await animeRes.json();

      setAnime(animeData.data);
      setIsLoading(false);
    }
    //do {
    if (isLoading) getAnime();

    //} while (anime.status === "Not yet aired");
  }, [level, url, isLoading]);

  return [anime, level, setLevel, isLoading, setIsLoading];
}
