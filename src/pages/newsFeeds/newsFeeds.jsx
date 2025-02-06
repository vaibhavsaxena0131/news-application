import NavigatePage from "@/components/navigatePage";
import TimeAgo from "@/components/timeAgo";
import paths from "@/routes/paths";
import MediaDisplay from "@/components/mediaDisplay/mediaDisplay.index";

const NewsFeeds = ({
  feeds = [],
  onShowMore = () => {},
  showButton = true,
}) => {
  return (
    <section className="container mx-auto py-8">
      <div className="w-full md:w-3/4">
        {[...(feeds.length ? feeds : [])].map((news, index) => (
          <NewsFeedItem
            key={index}
            category={news?.category || "OPINION"}
            title={news?.title}
            description={news?.description}
            image={news?.media?.url ?? news?.image}
            mediaType={news?.media?.type ?? "image"}
            author={news?.author}
            date={news?.createdAt || new Date()}
            time={news?.time}
            url={paths.VIEW_BLOG(news?.id)}
          />
        ))}
        {showButton && (
          <div className="text-center mt-6">
            <button
              className="bg-black text-white px-4 py-2"
              onClick={onShowMore}
            >
              Show more
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsFeeds;

const NewsFeedItem = ({
  category,
  title,
  description,
  image,
  author,
  date,
  url,
  mediaType,
}) => {
  return (
    <NavigatePage url={url} className="flex border-b py-6">
      <article className="w-2/3 md:w-3/4 pr-4">
        <header>
          <p className="text-sm text-gray-600 uppercase">{category}</p>
          <h2 className="text-lg font-bold line-clamp-3">{title}</h2>
        </header>
        <div className="hidden md:block">
          <p className="text-gray-700 mt-2">{description}</p>
          <footer className="flex items-center text-gray-500 mt-4">
            {author && (
              <>
                <span>{author}</span>
                <span className="mx-2">|</span>
              </>
            )}
            <time dateTime="2024-10-22">
              <TimeAgo date={date} />
            </time>
          </footer>
        </div>
      </article>
      <figure className="w-1/3 md:w-1/4">
        <MediaDisplay
          mediaType={mediaType}
          source={image}
          altText={title}
          className="w-full h-auto object-cover aspect-video"
        />
        {/* <figcaption>Image caption describing the photo</figcaption> */}
      </figure>
    </NavigatePage>
  );
};
