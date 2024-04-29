import { useState, useEffect } from "react";

export function useRandomSeiyuu(url) {
  const [seiyuuVoice, setSeiyuuVoice] = useState({});
  const [level, setLevel] = useState(1);
  const [seiyuuName, setSeiyuuName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getAnime() {
      setIsLoading(true);
      const animeRes = await fetch(url);
      const animeData = await animeRes.json();

      setSeiyuuName(animeData.data.name);

      const seiyuuRes = await fetch(
        `https://api.jikan.moe/v4/people/${animeData.data?.mal_id}/voices`
      );

      const seiyuuData = await seiyuuRes.json();
      setSeiyuuVoice(seiyuuData.data);

      setIsLoading(false);
    }

    //do {
    if (isLoading) getAnime();

    console.log("infinite run");
    //} while (seiyuuVoice.length === 0 || seiyuuVoice.length <= 6);
  }, [level, url, isLoading]);

  return [seiyuuVoice, seiyuuName, level, setLevel, isLoading, setIsLoading];
}
