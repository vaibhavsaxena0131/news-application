import ArticleHeading from "@/components/article/articleHeading";
import ArticleTitle from "@/components/article/articleTitle";
import NavigatePage from "@/components/navigatePage";
import paths from "@/routes/paths";
import MediaDisplay from "@/components/mediaDisplay/mediaDisplay.index";

const DuniyaImageSection = ({ article = {} }) => {
  // let imageUrl =
  //   "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/0CEC/production/_124980330_7d0f8e53-ab03-4dc7-91e8-2418737d8d16.jpg.webp";
  return (
    <section className="container mx-auto rounded">
      <NavigatePage
        url={paths.VIEW_BLOG(article?.id)}
        className="flex flex-col gap-3"
      >
        <MediaDisplay
          mediaType={article?.media?.type}
          source={article?.media?.url}
          className="w-full h-[22rem] md:h-[25rem] lg:h-[34rem] aspect-video rounded-md object-fit"
          altText={article.title}
        />
        <ArticleHeading
          heading={article?.title}
          className="text-4xl font-extrabold"
        />
        <ArticleTitle
          title={article?.description}
          className="line-clamp-2 text-xl font-light"
        />
      </NavigatePage>
      <hr className="w-full h-0.5 mt-10 bg-black border-0 rounded dark:bg-gray-700"></hr>
    </section>
  );
};

export default DuniyaImageSection;
