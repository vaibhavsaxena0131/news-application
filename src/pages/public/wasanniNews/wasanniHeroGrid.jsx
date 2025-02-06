import ArticleGrid from "@/components/article/articleGrid";

export default function WasanniHeroGrid({ articles = [] }) {
  return (
    <ArticleGrid
      categories={articles}
      gridClassName="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    />
  );
}
