import { useEffect, useState } from "react";
import { isAlnum } from "../../utilities/function-utilities";
import DigitalKeyboard from "../DigitalKeyboard";
import AnimeGuess from "./AnimeGuess";
import NeutralBocchi from "../../images/guess_title/bocchi_neutral.png";
import BocchiHappy1 from "../../images/guess_title/bocchi_happy_1.png";
import BocchiHappy2 from "../../images/guess_title/bocchi_happy_2.png";
import BocchiHappy3 from "../../images/guess_title/bocchi_happy_3.png";
import BocchiHappy4 from "../../images/guess_title/bocchi_happy_4.png";
import BocchiHappy5 from "../../images/guess_title/bocchi_happy_5.png";
import BocchiSad1 from "../../images/guess_title/bocchi_sad_1.png";
import BocchiSad2 from "../../images/guess_title/bocchi_sad_2.png";
import BocchiSad3 from "../../images/guess_title/bocchi_sad_3.png";
import BocchiSad4 from "../../images/guess_title/bocchi_sad_4.png";
import BocchiSad5 from "../../images/guess_title/bocchi_sad_5.png";
import { useRandomAnime } from "../../custom-hooks/useRandomAnime";

export default function GuessTitle() {
  const [hiddenTitle, setHiddenTitle] = useState("");
  const [animeTitle, setAnimeTitle] = useState("");
  //const animeTitle = "That Time I Got Reincarnated as a Slime Season 2";
  const instructions =
    "Use the digital keyboard to reveal part of the Anime Title. " +
    "If you know the name already, please enter your answer where " +
    "Anya is pointing at. You have until Bocchi starts glitching to " +
    "guess correctly. If you guess part of the title correctly, Bocchi will slowly be happy.";

  const imagesLives = [
    BocchiSad5,
    BocchiSad4,
    BocchiSad3,
    BocchiSad2,
    BocchiSad1,
    NeutralBocchi,
    BocchiHappy1,
    BocchiHappy2,
    BocchiHappy3,
    BocchiHappy4,
    BocchiHappy5,
  ];
  const [numberOfGuess, setNumberOfGuess] = useState(6);
  const [anime, level, setLevel, isLoading, setIsLoading] = useRandomAnime(
    "https://api.jikan.moe/v4/random/anime"
  );
  // const [anime, setAnime] = useState({});
  // const [level, setLevel] = useState(1);
  const test = {
    data: {
      mal_id: 22699,
      url: "https://myanimelist.net/anime/22699/Dragon_Ball_Z__Zenbu_Misemasu_Toshi_Wasure_Dragon_Ball_Z",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/anime/1667/112037.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/1667/112037t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/1667/112037l.jpg",
        },
        webp: {
          image_url:
            "https://cdn.myanimelist.net/images/anime/1667/112037.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/1667/112037t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/1667/112037l.webp",
        },
      },
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null,
        },
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Dragon Ball Z: Zenbu Misemasu Toshi Wasure Dragon Ball Z!",
        },
        {
          type: "Synonym",
          title: "Zenbu Misemasu Toshi Wasure Doragon Boru Zetto!",
        },
        {
          type: "Japanese",
          title: "全部見せます 年忘れドラゴンボールZ!",
        },
        {
          type: "English",
          title: "Looking Back at it All: The Dragon Ball Z Year-End Show!",
        },
      ],
      title: "Dragon Ball Z: Zenbu Misemasu Toshi Wasure Dragon Ball Z!",
      title_english: "Looking Back at it All: The Dragon Ball Z Year-End Show!",
      title_japanese: "全部見せます 年忘れドラゴンボールZ!",
      title_synonyms: ["Zenbu Misemasu Toshi Wasure Doragon Boru Zetto!"],
      type: "TV Special",
      source: "Manga",
      episodes: 1,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "1993-12-31T00:00:00+00:00",
        to: null,
        prop: {
          from: {
            day: 31,
            month: 12,
            year: 1993,
          },
          to: {
            day: null,
            month: null,
            year: null,
          },
        },
        string: "Dec 31, 1993",
      },
      duration: "5 min",
      rating: "PG-13 - Teens 13 or older",
      score: 6.5,
      scored_by: 7342,
      rank: 6927,
      popularity: 5100,
      members: 17690,
      favorites: 8,
      synopsis:
        "In this film, which is believed to take place some time around the 25th World Martial Arts Tournament, Gohan and Goten are having a hot bath outside in the middle of winter. Goku (who is still dead) suddenly appears in front of his sons with the help of his Instant Transmission, and joins them in the tub. While there, the three Saiyans reflect back on the events that occurred during the Cell Games. Inside the house after Chi-Chi appeared, Goku tells his sons about Pikkon and the Other World Tournament.\n\nLater, the four members of the Son family appear dressed nicely. Gohan says that the adult division of the Tournament will begin this next year (in 1994), and the special comes to an end.\n\n(Source: Dragon Ball Wikia)",
      background: null,
      season: null,
      year: null,
      broadcast: {
        day: null,
        time: null,
        timezone: null,
        string: null,
      },
      producers: [],
      licensors: [],
      studios: [
        {
          mal_id: 18,
          type: "anime",
          name: "Toei Animation",
          url: "https://myanimelist.net/anime/producer/18/Toei_Animation",
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/genre/1/Action",
        },
        {
          mal_id: 2,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/genre/2/Adventure",
        },
        {
          mal_id: 4,
          type: "anime",
          name: "Comedy",
          url: "https://myanimelist.net/anime/genre/4/Comedy",
        },
        {
          mal_id: 10,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/genre/10/Fantasy",
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 17,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/genre/17/Martial_Arts",
        },
        {
          mal_id: 31,
          type: "anime",
          name: "Super Power",
          url: "https://myanimelist.net/anime/genre/31/Super_Power",
        },
      ],
      demographics: [
        {
          mal_id: 27,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/genre/27/Shounen",
        },
      ],
    },
  };

  const testArr = [
    {
      data: {
        mal_id: 58215,
        url: "https://myanimelist.net/anime/58215/NocturnaL",
        images: {
          jpg: {
            image_url:
              "https://cdn.myanimelist.net/images/anime/1457/141593.jpg",
            small_image_url:
              "https://cdn.myanimelist.net/images/anime/1457/141593t.jpg",
            large_image_url:
              "https://cdn.myanimelist.net/images/anime/1457/141593l.jpg",
          },
          webp: {
            image_url:
              "https://cdn.myanimelist.net/images/anime/1457/141593.webp",
            small_image_url:
              "https://cdn.myanimelist.net/images/anime/1457/141593t.webp",
            large_image_url:
              "https://cdn.myanimelist.net/images/anime/1457/141593l.webp",
          },
        },
        trailer: {
          youtube_id: null,
          url: null,
          embed_url: null,
          images: {
            image_url: null,
            small_image_url: null,
            medium_image_url: null,
            large_image_url: null,
            maximum_image_url: null,
          },
        },
        approved: true,
        titles: [
          {
            type: "Default",
            title: "NocturnaL",
          },
          {
            type: "Japanese",
            title: "NocturnaL",
          },
        ],
        title: "NocturnaL",
        title_english: null,
        title_japanese: "NocturnaL",
        title_synonyms: [],
        type: "OVA",
        source: "Manga",
        episodes: null,
        status: "Currently Airing",
        airing: true,
        aired: {
          from: "2024-04-05T00:00:00+00:00",
          to: null,
          prop: {
            from: {
              day: 5,
              month: 4,
              year: 2024,
            },
            to: {
              day: null,
              month: null,
              year: null,
            },
          },
          string: "Apr 5, 2024 to ?",
        },
        duration: "Unknown",
        rating: "Rx - Hentai",
        score: null,
        scored_by: null,
        rank: null,
        popularity: 15680,
        members: 537,
        favorites: 1,
        synopsis:
          "Sayoko Miyamura is an exemplary student, well-liked among her peers, and often the center of attention in social settings. One evening, as she walks home alone at night, Eto, who harbors feelings for her, witnesses her being pursued by a group of men. Despite his initial reluctance to intervene, he musters up the courage to grab her arm and save her from danger. However, upon closer inspection, he realizes that this version of Sayoko is vastly different from the one he knows from school. This new persona, known as 'Yoko,' possesses a rebellious demeanor, a foul mouth, and an insatiable sexual desire.",
        background: null,
        season: null,
        year: null,
        broadcast: {
          day: null,
          time: null,
          timezone: null,
          string: null,
        },
        producers: [
          {
            mal_id: 977,
            type: "anime",
            name: "Queen Bee",
            url: "https://myanimelist.net/anime/producer/977/Queen_Bee",
          },
          {
            mal_id: 1424,
            type: "anime",
            name: "Mediabank",
            url: "https://myanimelist.net/anime/producer/1424/Mediabank",
          },
        ],
        licensors: [],
        studios: [
          {
            mal_id: 2530,
            type: "anime",
            name: "Blue bread",
            url: "https://myanimelist.net/anime/producer/2530/Blue_bread",
          },
        ],
        genres: [
          {
            mal_id: 12,
            type: "anime",
            name: "Hentai",
            url: "https://myanimelist.net/anime/genre/12/Hentai",
          },
        ],
        explicit_genres: [],
        themes: [],
        demographics: [],
      },
    },
    {
      data: {
        mal_id: 56766,
        url: "https://myanimelist.net/anime/56766/Qi_Hou_Bilu",
        images: {
          jpg: {
            image_url:
              "https://cdn.myanimelist.net/images/anime/1831/138798.jpg",
            small_image_url:
              "https://cdn.myanimelist.net/images/anime/1831/138798t.jpg",
            large_image_url:
              "https://cdn.myanimelist.net/images/anime/1831/138798l.jpg",
          },
          webp: {
            image_url:
              "https://cdn.myanimelist.net/images/anime/1831/138798.webp",
            small_image_url:
              "https://cdn.myanimelist.net/images/anime/1831/138798t.webp",
            large_image_url:
              "https://cdn.myanimelist.net/images/anime/1831/138798l.webp",
          },
        },
        trailer: {
          youtube_id: null,
          url: null,
          embed_url: null,
          images: {
            image_url: null,
            small_image_url: null,
            medium_image_url: null,
            large_image_url: null,
            maximum_image_url: null,
          },
        },
        approved: true,
        titles: [
          {
            type: "Default",
            title: "Qi Hou Bilu",
          },
          {
            type: "Japanese",
            title: "七侯笔录",
          },
          {
            type: "English",
            title: "Spirits in Chinese Brushes",
          },
        ],
        title: "Qi Hou Bilu",
        title_english: "Spirits in Chinese Brushes",
        title_japanese: "七侯笔录",
        title_synonyms: [],
        type: "ONA",
        source: "Novel",
        episodes: 12,
        status: "Finished Airing",
        airing: false,
        aired: {
          from: "2023-10-28T00:00:00+00:00",
          to: "2024-01-06T00:00:00+00:00",
          prop: {
            from: {
              day: 28,
              month: 10,
              year: 2023,
            },
            to: {
              day: 6,
              month: 1,
              year: 2024,
            },
          },
          string: "Oct 28, 2023 to Jan 6, 2024",
        },
        duration: "22 min per ep",
        rating: "PG-13 - Teens 13 or older",
        score: 7.2,
        scored_by: 323,
        rank: 3293,
        popularity: 12417,
        members: 1333,
        favorites: 81,
        synopsis:
          "Two thousand years ago, a descendant of the Yinyang Family felt sad for the burning of books and burying of scholars at the order of Qin Shihuang (the first emperor of the Qin Dynasty) and the burning of Epang Palace. In order not to let the scholars die in vain, he began to turn their spirits into brushes for inheritance by future generations. Back to the present day, Luo Zhongxia, an ordinary college student, accidentally gets a brush with Li Bai's spirit, and gains its superpower. But before long, various forces are in a mad scramble for the power, putting Luo Zhongxia in danger in many occasions. To avoid more dangers, Luo Zhongxia tries to find the way to return the brush, but fails every time. On the contrary, Luo Zhongxia becomes inextricably bound up with seven brush spirits.\n\n(Source: Bilibilil)",
        background:
          "Adaptation of Ma Boyong's (马伯庸) novel of the same name.",
        season: null,
        year: null,
        broadcast: {
          day: null,
          time: null,
          timezone: null,
          string: null,
        },
        producers: [
          {
            mal_id: 1414,
            type: "anime",
            name: "bilibili",
            url: "https://myanimelist.net/anime/producer/1414/bilibili",
          },
        ],
        licensors: [],
        studios: [
          {
            mal_id: 1268,
            type: "anime",
            name: "L²Studio",
            url: "https://myanimelist.net/anime/producer/1268/L%C2%B2Studio",
          },
        ],
        genres: [
          {
            mal_id: 1,
            type: "anime",
            name: "Action",
            url: "https://myanimelist.net/anime/genre/1/Action",
          },
          {
            mal_id: 2,
            type: "anime",
            name: "Adventure",
            url: "https://myanimelist.net/anime/genre/2/Adventure",
          },
          {
            mal_id: 10,
            type: "anime",
            name: "Fantasy",
            url: "https://myanimelist.net/anime/genre/10/Fantasy",
          },
        ],
        explicit_genres: [],
        themes: [
          {
            mal_id: 17,
            type: "anime",
            name: "Martial Arts",
            url: "https://myanimelist.net/anime/genre/17/Martial_Arts",
          },
        ],
        demographics: [],
      },
    },
    {
      data: {
        mal_id: 56769,
        url: "https://myanimelist.net/anime/56769/Mo_Shi",
        images: {
          jpg: {
            image_url:
              "https://cdn.myanimelist.net/images/anime/1480/138803.jpg",
            small_image_url:
              "https://cdn.myanimelist.net/images/anime/1480/138803t.jpg",
            large_image_url:
              "https://cdn.myanimelist.net/images/anime/1480/138803l.jpg",
          },
          webp: {
            image_url:
              "https://cdn.myanimelist.net/images/anime/1480/138803.webp",
            small_image_url:
              "https://cdn.myanimelist.net/images/anime/1480/138803t.webp",
            large_image_url:
              "https://cdn.myanimelist.net/images/anime/1480/138803l.webp",
          },
        },
        trailer: {
          youtube_id: null,
          url: null,
          embed_url: null,
          images: {
            image_url: null,
            small_image_url: null,
            medium_image_url: null,
            large_image_url: null,
            maximum_image_url: null,
          },
        },
        approved: true,
        titles: [
          {
            type: "Default",
            title: "Mo Shi",
          },
          {
            type: "Japanese",
            title: "默示",
          },
          {
            type: "English",
            title: "Implied",
          },
        ],
        title: "Mo Shi",
        title_english: "Implied",
        title_japanese: "默示",
        title_synonyms: [],
        type: "Movie",
        source: "Original",
        episodes: 1,
        status: "Finished Airing",
        airing: false,
        aired: {
          from: "2017-01-01T00:00:00+00:00",
          to: null,
          prop: {
            from: {
              day: 1,
              month: 1,
              year: 2017,
            },
            to: {
              day: null,
              month: null,
              year: null,
            },
          },
          string: "2017",
        },
        duration: "9 min",
        rating: "PG-13 - Teens 13 or older",
        score: null,
        scored_by: null,
        rank: 16550,
        popularity: 26352,
        members: 54,
        favorites: 0,
        synopsis: null,
        background: null,
        season: null,
        year: null,
        broadcast: {
          day: null,
          time: null,
          timezone: null,
          string: null,
        },
        producers: [],
        licensors: [],
        studios: [
          {
            mal_id: 2822,
            type: "anime",
            name: "Shykeumo Animation Studio",
            url: "https://myanimelist.net/anime/producer/2822/Shykeumo_Animation_Studio",
          },
        ],
        genres: [
          {
            mal_id: 8,
            type: "anime",
            name: "Drama",
            url: "https://myanimelist.net/anime/genre/8/Drama",
          },
          {
            mal_id: 24,
            type: "anime",
            name: "Sci-Fi",
            url: "https://myanimelist.net/anime/genre/24/Sci-Fi",
          },
        ],
        explicit_genres: [],
        themes: [],
        demographics: [],
      },
    },
  ];

  // useEffect(() => {
  //   async function getAnime() {
  //     const animeRes = await fetch("https://api.jikan.moe/v4/random/anime");
  //     const animeData = await animeRes.json();

  //     setAnime(animeData.data);
  //   }

  //   getAnime();
  //   console.log("i am run twice??");
  // }, [level]);

  useEffect(() => {
    setAnimeTitle(anime.title_english || anime.title);

    setHiddenTitle(
      animeTitle !== undefined
        ? animeTitle
            .split("")
            .map((char) => (isAlnum(char) ? "_" : char))
            .join("")
        : ""
    );

    console.log(animeTitle);
  }, [anime, animeTitle]);

  useEffect(() => {
    if (hiddenTitle !== "" && hiddenTitle === animeTitle) {
      setLevel((l) => l + 1);
      setIsLoading(true);
      setNumberOfGuess(6);
    }
  }, [hiddenTitle, animeTitle, setLevel, setIsLoading]);

  useEffect(() => {
    if (numberOfGuess === 0) {
      setNumberOfGuess(6);

      setHiddenTitle(
        animeTitle !== undefined
          ? animeTitle
              .split("")
              .map((char) => (isAlnum(char) ? "_" : char))
              .join("")
          : ""
      );
    }
  }, [numberOfGuess, animeTitle]);
  function checkForExistingAnime(animeInfo) {
    const tempAnimInfo = testArr.filter(
      (animInfo) => animeInfo.mal_id === animInfo.mal_id
    );
    console.log(tempAnimInfo);
  }

  function handleCheckGuessing(guess) {
    checkForExistingAnime(test);

    if (guess.toLowerCase() !== animeTitle.toLowerCase()) {
      setNumberOfGuess((guesses) => guesses - 1);
      return "";
    }
    setLevel((l) => l + 1);
    setIsLoading(true);
    setNumberOfGuess(6);
  }

  function handleGetKeys(key) {
    if (!animeTitle.toLowerCase().includes(key)) {
      setNumberOfGuess((guesses) => (guesses > 0 ? guesses - 1 : guesses));
    }

    if (
      animeTitle.toLowerCase().includes(key) &&
      !hiddenTitle.toLowerCase().includes(key)
    ) {
      setNumberOfGuess((guesses) =>
        guesses < imagesLives.length ? guesses + 1 : guesses
      );
    }

    let revealHiddenKey = hiddenTitle
      .split("")
      .map((char, index) =>
        animeTitle[index].toLowerCase() === key ? animeTitle[index] : char
      )
      .join("");

    setHiddenTitle(revealHiddenKey);
  }

  return (
    <AnimeGuess
      guessQuestion="Guess the Anime Title"
      specialInstructions={instructions}
      onCheckCorrectGuess={handleCheckGuessing}
      level={level}
    >
      <img
        id="anime-guess-title-lives"
        src={imagesLives[numberOfGuess - 1]}
        alt="mango box bocchi"
      />
      {
        <div id="anime-title-hangman">
          {hiddenTitle.split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div>
      }
      <DigitalKeyboard onClick={handleGetKeys} />
    </AnimeGuess>
  );
}
