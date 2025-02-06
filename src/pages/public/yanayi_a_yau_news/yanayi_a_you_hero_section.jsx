import { memo } from "react";
import MediaDisplay from "@/components/mediaDisplay/mediaDisplay.index";
import NavigatePage from "@/components/navigatePage";
import paths from "@/routes/paths";

const Yanayi_a_yau_hero_section = ({ articles }) => {
  let { rows = [] } = articles;
  return (
    <section className="container max-w-7xl mx-auto md:mt-5 pb-10">
      <div className="flex flex-col md:flex-row items-stretch gap-3">
        {rows?.map((article) => {
          let mediaType = article?.media?.type;
          return (
            <div
              key={`yanayi-article-${article?.id}`}
              className=" w-full bg-white shadow-md rounded-lg overflow-hidden"
            >
              <NavigatePage url={paths.VIEW_BLOG(article?.id)}>
                <MediaDisplay
                  mediaType={mediaType}
                  source={article?.media?.url}
                  className="w-full  aspect-video object-cover"
                />
                {mediaType === "image" && (
                  <div className="relative">
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute bottom-4 left-0 md:left-4 max-w-lg w-full bg-white rounded">
                      <h2 className="text-2xl  font-bold p-3">
                        {article?.title}
                      </h2>
                    </div>
                  </div>
                )}
              </NavigatePage>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default memo(Yanayi_a_yau_hero_section);
