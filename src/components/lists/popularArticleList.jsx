import NavigatePage from "@/components/navigatePage";
import paths from "@/routes/paths";

const PopularArticlesList = ({ title = "Most Popular", articles = [] }) => {
  return (
    <div className="w-full bg-white">
      <div className="mb-6">
        <div className="p-4 bg-gray-100">
          <h2 className="text-lg font-bold">{title}</h2>
        </div>
        <ul className="post-number">
          {articles.map((article, index) => (
            <li
              key={index}
              className="border-b border-gray-100 hover:bg-gray-50"
            >
              <NavigatePage
                className="text-lg font-bold px-6 py-3 flex flex-row items-center"
                url={paths.VIEW_BLOG(article?.id)}
              >
                {article?.title}
              </NavigatePage>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PopularArticlesList;
