import { useState, useEffect } from "react";

export function useRandomSeiyuu(url) {
  const [seiyuuVoice, setSeiyuuVoice] = useState({});
  const [level, setLevel] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let tempSeiyuu = [];

    async function getAnime() {
      const animeRes = await fetch(url);
      const animeData = await animeRes.json();

      const seiyuuRes = await fetch(
        `https://api.jikan.moe/v4/people/${animeData.data?.mal_id}/voices`
      );

      const seiyuuData = await seiyuuRes.json();
      setSeiyuuVoice(seiyuuData.data);
    }

    setIsLoading(true);
    do {
      getAnime();
      console.log(seiyuuVoice);
    } while (!seiyuuVoice && seiyuuVoice.length === 0);
    setIsLoading(false);
    // //do {
    // setIsLoading(true);
    // getAnime();
    // console.log(tempSeiyuu);

    // async function getVoice() {
    //   const seiyuuRes = await fetch(
    //     `https://api.jikan.moe/v4/people/${tempSeiyuu?.mal_id}/voices`
    //   );
    //   const seiyuuData = await seiyuuRes.json();

    //   setSeiyuuVoice(seiyuuData.data);
    // }

    // getVoice();
    // setIsLoading(false);

    // console.log(seiyuuVoice);
    // //} while (anime.status === "Not yet aired");
  }, [level, url]);

  return [seiyuuVoice, level, setLevel, isLoading];
}
