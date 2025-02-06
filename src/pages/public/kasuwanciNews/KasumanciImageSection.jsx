import ArticleHeading from "@/components/article/articleHeading";
import ArticleTitle from "@/components/article/articleTitle";
import NavigatePage from "@/components/navigatePage";
import paths from "@/routes/paths";
import MediaDisplay from "@/components/mediaDisplay/mediaDisplay.index";

const KasumanciImageSection = ({ article = {} }) => {
  return (
    <section className="container mx-auto rounded">
      <NavigatePage
        url={paths.VIEW_BLOG(article?.id)}
        className="flex flex-col gap-3"
      >
        <MediaDisplay
          source={article?.media?.url}
          mediaType={article?.media?.type}
          altText={article?.title}
          className="w-full h-[22rem] md:h-[25rem] lg:h-[34rem] aspect-video rounded-md object-fit"
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

export default KasumanciImageSection;
