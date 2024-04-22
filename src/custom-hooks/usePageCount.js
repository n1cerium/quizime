import { useEffect, useState } from "react";

export function usePageCount() {
  const [pagination, setPagination] = useState({});
  useEffect(() => {
    async function getAnimeInfo() {
      const res = await fetch(
        "https://api.jikan.moe/v4/anime?status=airing&status=complete"
      );
      const data = await res.json();

      console.log(data);
      setPagination(data.pagination);
    }

    getAnimeInfo();
  }, []);

  return [pagination.last_visible_page, pagination.items.per_page];
}
