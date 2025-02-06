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
} from "../actions/actionsType";

import {
  formatHomeArticleData,
  formatAfricaArticleData,
  formatWasanniArticleData,
} from "@/utills/dataFormatter/articleDataformatter";

const initialState = {
  home: {},
  kasarHausa: {},
  afrika: {},
  duniya: {},
  kasuwanci: {},
  wasanni: {},
  yanayi_a_yau: {},
  afrikaRegionMainArticles: [],
  afrikaRegionNewsFeedArticles: [],
  afirkaRegionBasedData: {},
  wasanniFeeds: {},
};

// Helper function to merge and filter unique rows
const mergeUniqueRows = (existingRows, newRows) => {
  const mergedRows = [...existingRows, ...newRows];
  return mergedRows.filter(
    (item, index, self) => self.findIndex((row) => row.id === item.id) === index
  );
};

const ArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESET_NEWS_ARTICLES":
      return initialState;

    case `${HOME_PAGE_ARTICLES}_SUCCESS`:
      return {
        ...state,
        home: formatHomeArticleData(action.payload),
        wasanni: {},
        wasanniFeeds: {},
        duniya: {},
      };

    case `${KASAR_HAUSA_PAGE_ARTICLES}_SUCCESS`:
      return {
        ...state,
        kasarHausa: action.payload,
        wasanni: {},
        wasanniFeeds: {},
        duniya: {},
      };

    case `${AFRIKA_PAGE_ARTICLES}_SUCCESS`:
      return {
        ...state,
        afrika: formatAfricaArticleData(action.payload),
        wasanni: {},
        wasanniFeeds: {},
        duniya: {},
      };

    case `${DUNIYA_PAGE_ARTICLES}_SUCCESS`: {
      const { count = 0, rows = [] } = action.payload || {};
      const existingRows = state.duniya?.rows || [];
      return {
        ...state,
        duniya: {
          ...state.duniya,
          count,
          rows: mergeUniqueRows(existingRows, rows),
        },
        wasanni: {},
        wasanniFeeds: {},
      };
    }

    case `${KASUWANCI_PAGE_ARTICLES}_SUCCESS`:
      return {
        ...state,
        kasuwanci: action.payload,
        wasanni: {},
        wasanniFeeds: {},
        duniya: {},
      };

    case `${AFRIKA_REGION_MAIN_SECTION_ARTICLES}_SUCCESS`:
      return {
        ...state,
        afrikaRegionMainArticles: action.payload,
        wasanni: {},
        wasanniFeeds: {},
        duniya: {},
      };

    case `${AFRIKA_REGION_NEWS_FEED_SECTION_ARTICLES}_SUCCESS`:
      return {
        ...state,
        afrikaRegionNewsFeedArticles: action.payload,
        wasanni: {},
        wasanniFeeds: {},
        duniya: {},
      };

    case `${WASANNI_PAGE_ARTICLES}_SUCCESS`:
      return {
        ...state,
        wasanni: formatWasanniArticleData(action.payload),
        duniya: {},
      };

    case `${WASANNI_PAGE_NEWS_FEEDS_ARTICLES}_SUCCESS`: {
      const { count = 0, rows = [] } = action.payload?.allArticle || {};
      const existingRows = state.wasanniFeeds?.rows || [];
      return {
        ...state,
        wasanniFeeds: {
          ...state.wasanniFeeds,
          count,
          rows: mergeUniqueRows(existingRows, rows),
        },
        duniya: {},
      };
    }

    case `${YANAYI_PAGE_ARTICLES}_SUCCESS`:
      return {
        ...state,
        yanayi_a_yau: action.payload,
        wasanni: {},
        wasanniFeeds: {},
        duniya: {},
      };

    default:
      return state;
  }
};

export default ArticlesReducer;
