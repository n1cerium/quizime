import { useState, useEffect } from "react";

export function useRandomSeiyuu() {
  const [seiyuuVoice, setSeiyuuVoice] = useState({});
  const [seiyuuName, setSeiyuuName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getAnime() {
      setIsLoading(true);
      const animeRes = await fetch("https://api.jikan.moe/v4/random/people");
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
  }, [isLoading]);

  return [seiyuuVoice, seiyuuName, isLoading, setIsLoading];
}
