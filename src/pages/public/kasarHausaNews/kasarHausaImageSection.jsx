import MediaDisplay from "@/components/mediaDisplay/mediaDisplay.index";
import NavigatePage from "@/components/navigatePage";
import paths from "@/routes/paths";

const KasarHausaImageSection = ({ article }) => {
  return (
    <section className="container mx-auto">
      <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <NavigatePage url={paths.VIEW_BLOG(article?.id)} className="relative">
          <MediaDisplay
            mediaType={article?.media?.type}
            source={article?.media?.url}
            altText="Pangolin Smuggling News"
            className="w-full h-[22rem] md:h-[25rem] lg:h-[34rem] aspect-video rounded-md object-fit"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute bottom-4 left-4 max-w-xl w-full bg-white rounded">
            <h2 className="text-2xl  font-bold p-3">{article?.title}</h2>
          </div>
        </NavigatePage>
      </div>
    </section>
  );
};

export default KasarHausaImageSection;
