import { useEffect, useState } from "react";

export function useRandomTheme() {
  const [theme, setTheme] = useState({});
  const [level, setLevel] = useState(1);
  const [animeName, setAnimeName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getTheme() {
      setIsLoading(true);
      const animeRes = await fetch("https://api.jikan.moe/v4/random/anime");
      const animeData = await animeRes.json();

      setAnimeName(animeData.data?.title_english || animeData.data.title);

      const themeData = await fetch(
        `https://api.animethemes.moe/anime?include=animethemes.animethemeentries.videos.audio&filter[has]=resources&filter[site]=MyAnimeList&filter[external_id]=${animeData.data.mal_id}`
      );
      const themeRes = await themeData.json();

      setTheme(themeRes.anime);
      setIsLoading(false);
    }

    if (isLoading) getTheme();
  }, [level, isLoading]);

  return [theme, animeName, level, setLevel, isLoading, setIsLoading];
}
