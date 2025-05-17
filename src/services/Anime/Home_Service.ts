import { fetch } from "@tauri-apps/plugin-http"
import * as cheerio from "cheerio"


export type AnimeSwiperType = {
  title: string;
  href: string;
  image: string;
  vote: string;
  currentEp: string;
  description: string;
  date: string;
  studio: string;
  tag?: string;
  genres: GenreAnime[];
};
export type GenreAnime = {
  url: string;
  name: string;
};

const Home_Service = async () => {
  const reponse = await fetch("https://animevietsub.ee/").then(res => res.text());
  const $ = cheerio.load(reponse);
  const listAnimeSlide: AnimeSwiperType[] = [];
  $(".TPostMv", reponse).each((i, el) => {
    if (i >= 16 && i <= 25) {
      const genres: GenreAnime[] = [];
      const title = $(".Title", el).text();
      const link = ($(".TPMvCn", el).find("a").attr("href") ?? "").split(
        "/"
      )[4];
      const imageBG = $(".TPostBg", el).attr("src");
      const description = $(".Description", el)
        .find("p")
        .text()
        .slice(
          0,
          $(".Description", el).find("p").text().indexOf("Studio")
        );
      const studio = $(".Studio", el)
        .text()
        .split(" ")
        .splice(1)
        .join(" ")
        .replace(",", "");
      const countVote = $(".Info", el).find(".Vote").text();
      const currentEp = $(".Info", el).find(".Time").text();
      const year = $(".Info", el).find(".Date").text();
      const quality = $(".Info", el).find(".Qlty").text();
      $(".Description", el)
        .find("a")
        .each((i, el2) => {
          genres.push({
            url: ($(el2).attr("href") ?? "").split("/")[4],
            name: $(el2).text(),
          });
        });
      listAnimeSlide.push({
        title: title,
        href: link,
        image: imageBG!,
        vote: countVote,
        currentEp: currentEp,
        description: description,
        date: year,
        studio: studio,
        tag: quality,
        genres: genres,
      });
    }
  });
  return listAnimeSlide;
}
export default Home_Service;