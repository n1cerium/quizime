import { useState, useEffect } from "react";

export function useRandomAnime(url) {
  const [anime, setAnime] = useState({});
  const [level, setLevel] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [render, setRender] = useState(false); // not ideal solution
  //const [url, setUrl] = useState("");
  //const [totalPages, totalCountPerPage] = usePageCount();
  useEffect(() => {
    async function getAnime() {
      const animeRes = await fetch(url);
      const animeData = await animeRes.json();

      setAnime(animeData.data);
    }
    //do {
    setIsLoading(true);
    getAnime();
    setIsLoading(false);

    //} while (anime.status === "Not yet aired");
  }, [level, url, render]);

  return [anime, level, setLevel, setRender, isLoading];
}
