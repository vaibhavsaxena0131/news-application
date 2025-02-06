import ArticleGrid from "@/components/article/articleGrid";

export default function KasuwanciHeroGrid({ categoriesArticles = {} }) {
  const categoriesData = [
    {
      title: "AFIRKA",
      articles: categoriesArticles?.afrika || [],
    },
    {
      title: "Kasuwanci-Duniya",
      articles: categoriesArticles?.duniya || [],
    },
    {
      title: "Kasuawanci-Kasar Hausa",
      articles: categoriesArticles?.kasar_hausa || [],
    },
  ];

  return (
    <ArticleGrid
      categories={categoriesData}
      gridClassName="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    />
  );
}
