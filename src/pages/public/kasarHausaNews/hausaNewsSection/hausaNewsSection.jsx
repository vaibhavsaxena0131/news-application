import ImageElement from "@/components/ImageElement";
import ArticleMeta from "@/components/articleMeta/articleMeta";
import ArticleHeading from "@/components/article/articleHeading";
import ArticleTitle from "@/components/article/articleTitle";
import { memo } from "react";
import NavigatePage from "@/components/navigatePage";
import VideoPlayer from "@/components/videoPlayer/videoPlayer.index";
import { VideoProvider } from "@/context/videoContext";
import paths from "@/routes/paths";

const HausaNewsSection = ({ articlesData = {} }) => {
  const { articles = [], articleWithVideo = [] } = articlesData;

  return (
    <VideoProvider>
      <section className="container mx-auto mt-10">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <ArticleHeading
              heading="Labarai"
              className="text-2xl font-bold px-3"
            />

            {/* Article List */}
            <div className="h-full">
              {articles?.rows?.map((article, index) => (
                <ArticleCard key={index} article={article} />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t-4 mx-2 my-6 md:my-0 md:border-l-2 border-gray-300"></div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <ArticleHeading
              heading="Maimaici Video"
              className="text-2xl font-bold px-3"
            />

            {/* Article List */}
            <div className="h-full">
              {articleWithVideo?.rows?.map((article, index) => (
                <ArticleCard key={index} article={article} isVideoContent />
              ))}
            </div>
          </div>
        </div>
      </section>
    </VideoProvider>
  );
};

// Reusable ArticleCard component
const ArticleCard = ({ article, isVideoContent = false }) => (
  <div className="w-full px-3 pb-3 pt-3 sm:pt-0 border-b-2 border-dotted border-gray-100">
    <NavigatePage url={paths.VIEW_BLOG(article?.id)}>
      <div
        className={`flex flex-col lg:flex-row w-full ${isVideoContent ? "" : "hover-img"}`}
      >
        {/* Responsive Image */}
        <div className="relative w-full lg:w-[40%] aspect-video overflow-hidden rounded-md aspect-video">
          {/* Video play icon for video content */}
          {isVideoContent ? (
            <VideoPlayer id={article?.id} src={article?.media?.url} />
          ) : (
            <ImageElement
              className="w-full h-full object-cover rounded-md"
              src={article?.media?.url || "default-image.jpg"}
              alt={article?.title || "article image"}
            />
          )}
        </div>

        {/* Article Content */}
        <div className="w-full lg:w-[60%] px-0 lg:px-3 mt-3 lg:mt-0 flex flex-col justify-between">
          <ArticleHeading
            heading={article?.title || "Untitled"}
            className="text-lg font-bold line-clamp-1 md:line-clamp-2 lg:line-clamp-3"
          />
          <ArticleTitle
            title={article?.description || "No description available"}
            className="line-clamp-2 md:line-clamp-3 lg:line-clamp-4"
          />
          <ArticleMeta
            date={article?.createdAt || new Date()}
            category={article?.category?.name || "OPINION"}
          />
        </div>
      </div>
    </NavigatePage>
  </div>
);

export default memo(HausaNewsSection);
