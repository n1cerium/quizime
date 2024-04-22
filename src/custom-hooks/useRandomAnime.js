import { useState, useEffect } from "react";

export function useRandomAnime(url) {
  const [anime, setAnime] = useState({});
  const [level, setLevel] = useState(1);
  //const [totalPages, totalCountPerPage] = usePageCount();
  useEffect(() => {
    async function getAnime() {
      const animeRes = await fetch(url);
      const animeData = await animeRes.json();

      setAnime(animeData.data);
    }
    do {
      getAnime();
    } while (anime.status === "Not yet aired");
  }, [level, url, anime.status]);

  return [anime, level, setLevel];
}
