import RenderContent from "@/components/renderContent/renderContent.index";
import MediaDisplay from "@/components/mediaDisplay/mediaDisplay.index";

// const KasarHausaStateHeroSection = ({ currentTab = "", articleDetails }) => {
const KasarHausaStateHeroSection = ({ articleDetails }) => {
  let { media, content = {} } = articleDetails;

  return (
    <section className="container max-w-5xl mx-auto pt-0 p-6 bg-white shadow-lg rounded-lg blog-container">
      {media && (
        <div className="mb-8">
          <MediaDisplay
            mediaType={media.type}
            source={media?.url}
            altText="Blog media"
            className="w-full h-auto rounded-lg aspect-video object-cover"
          />
        </div>
      )}

      {/* Blog Content */}
      <div className="my-10 mx-7">
        <RenderContent content={content} />
      </div>
    </section>
  );
};

export default KasarHausaStateHeroSection;
