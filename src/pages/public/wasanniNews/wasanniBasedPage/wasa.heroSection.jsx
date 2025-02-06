import VideoPlayer from "@/components/videoPlayer/videoPlayer.index";
import { VideoProvider } from "@/context/videoContext";
import ImageElement from "@/components/ImageElement";

const WasaHeroSection = ({ currentTab = "" }) => {
  let kalonKapa = {
    imgSrc:
      "https://i.ytimg.com/vi/Trv21eywrJI/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-DoACuAiKAgwIABABGEcgUChyMA8=&rs=AOn4CLAHBbzQsN5IDGHKZs5bj1NM2DCBKQ",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  };

  let addiniHeroArticle = {
    videoSrc:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    title: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  };
  let wasaninHeroArticle = {
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Dembe_game.jpg/300px-Dembe_game.jpg",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  };

  let mainArticle = {
    kalon_kapa: kalonKapa,
    dambe: addiniHeroArticle,
    wasa_kondo: wasaninHeroArticle,
  };

  return (
    <section className="container mx-auto mt-10">
      <div className="flex flex-row flex-wrap justify-center gap-10">
        <div className="max-w-6xl w-full bg-white shadow-md rounded-lg overflow-hidden">
          {mainArticle[currentTab]?.imgSrc ? (
            <div className="relative">
              <ImageElement
                src={mainArticle[currentTab]?.imgSrc}
                alt="Pangolin Smuggling News"
                className="w-full h-[32rem]  aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute bottom-4 left-4 max-w-lg w-full bg-white rounded">
                <h2 className="text-2xl  font-bold p-3">
                  {mainArticle[currentTab]?.title}
                </h2>
              </div>
            </div>
          ) : mainArticle[currentTab]?.videoSrc ? (
            <div className="relative">
              <VideoProvider>
                <VideoPlayer src={mainArticle[currentTab]?.videoSrc} />
              </VideoProvider>
            </div>
          ) : null}
        </div>
        <div className="max-w-5xl w-full bg-white shadow-md rounded-lg overflow-hidden"></div>
      </div>
    </section>
  );
};

export default WasaHeroSection;
