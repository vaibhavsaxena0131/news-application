import {
  AFRIKA_PAGE_ARTICLES,
  AFRIKA_REGION_MAIN_SECTION_ARTICLES,
  AFRIKA_REGION_NEWS_FEED_SECTION_ARTICLES,
  DUNIYA_PAGE_ARTICLES,
  HOME_PAGE_ARTICLES,
  KASAR_HAUSA_PAGE_ARTICLES,
  KASUWANCI_PAGE_ARTICLES,
  WASANNI_PAGE_ARTICLES,
  WASANNI_PAGE_NEWS_FEEDS_ARTICLES,
  YANAYI_PAGE_ARTICLES,
} from "./actionsType";

export const HomePageArticles = () => ({
  type: HOME_PAGE_ARTICLES,
  method: "POST",
  URLEndPoint: HOME_PAGE_ARTICLES,
  axiosService: true,
  toaster: {
    loading: true,
  },
});

export const KasarHausaPageArticles = (payload) => ({
  type: KASAR_HAUSA_PAGE_ARTICLES,
  method: "POST",
  URLEndPoint: KASAR_HAUSA_PAGE_ARTICLES,
  data: payload,
  axiosService: true,
  toaster: {
    loading: true,
  },
});

export const AfrikaPageArticles = (payload) => ({
  type: AFRIKA_PAGE_ARTICLES,
  method: "POST",
  URLEndPoint: AFRIKA_PAGE_ARTICLES,
  data: payload,
  axiosService: true,
  toaster: {
    loading: true,
  },
});

export const DuniyaPageArticles = (payload) => ({
  type: DUNIYA_PAGE_ARTICLES,
  method: "POST",
  URLEndPoint: DUNIYA_PAGE_ARTICLES,
  data: payload,
  axiosService: true,
  toaster: {
    loading: true,
  },
});

export const KasuwanciPageArticles = (payload) => ({
  type: KASUWANCI_PAGE_ARTICLES,
  method: "POST",
  URLEndPoint: KASUWANCI_PAGE_ARTICLES,
  data: payload,
  axiosService: true,
  toaster: {
    loading: true,
  },
});

export const WasanniPageArticles = (payload) => ({
  type: WASANNI_PAGE_ARTICLES,
  method: "POST",
  URLEndPoint: WASANNI_PAGE_ARTICLES,
  data: payload,
  axiosService: true,
  toaster: {
    loading: true,
  },
});

export const WasanniPageNewsFeedsArticles = (payload) => ({
  type: WASANNI_PAGE_NEWS_FEEDS_ARTICLES,
  method: "POST",
  URLEndPoint: WASANNI_PAGE_NEWS_FEEDS_ARTICLES,
  data: payload,
  axiosService: true,
  toaster: {
    loading: true,
  },
});

export const YanayiPageArticles = (payload) => ({
  type: YANAYI_PAGE_ARTICLES,
  method: "POST",
  URLEndPoint: YANAYI_PAGE_ARTICLES,
  data: payload,
  axiosService: true,
  toaster: {
    loading: true,
  },
});

export const fetchAfrikaRegionMainArticlesAction = (payload) => ({
  type: AFRIKA_REGION_MAIN_SECTION_ARTICLES,
  method: "POST",
  URLEndPoint: AFRIKA_REGION_MAIN_SECTION_ARTICLES,
  data: payload,
  axiosService: true,
  toaster: {
    loading: true,
  },
});

export const fetchAfrikaRegionNewsFeedArticlesAction = (payload) => ({
  type: AFRIKA_REGION_NEWS_FEED_SECTION_ARTICLES,
  method: "POST",
  URLEndPoint: AFRIKA_REGION_NEWS_FEED_SECTION_ARTICLES,
  data: payload,
  axiosService: true,
  toaster: {
    loading: true,
  },
});
