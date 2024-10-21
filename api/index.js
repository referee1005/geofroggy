import axios from "axios";
// import { ApiUrl } from "../config";

export const fetchInterestData = async () => {
  try {
    const res = await axios.get(
      `https://geofroggy.com/wp-json/gfrog/v1/home/ofinterest`
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching interests:", error);
    return [];
  }
};
export const fetchPopularData = async () => {
  const res = await axios.get(
    `https://geofroggy.com/wp-json/gfrog/v1/home/popular-countries`
  );
  return res.data;
};
export const fetchRecentData = async () => {
  const res = await axios.get(
    `https://geofroggy.com/wp-json/gfrog/v1/home/recent-additions`
  );
  return res.data;
};
export const fetchPlaceData = async () => {
  const res = await axios.get(
    `https://geofroggy.com/wp-json/gfrog/v1/home/banner`
  );
  return res.data;
};
export const fetchFavouritePlaceData = async () => {
  const res = await axios.get(
    `https://geofroggy.com/wp-json/gfrog/v1/home/favourite-places`
  );
  return res.data;
};
export const fetchSiteInfoData = async () => {
  const res = await axios.get(
    `https://geofroggy.com/wp-json/gfrog/v1/about/content`
  );
  return res.data;
};
export const fetchAboutAdvertData = async () => {
  const res = await axios.get(
    `https://geofroggy.com/wp-json/gfrog/v1/about/advert`
  );
  return res.data;
};
export const fetchFaqData = async (query) => {
  const realQuery = query === undefined ? "" : "?" + query;
  const res = await fetch("/api/faq" + realQuery);
  const data = await res.json();
  return data;
};
export const fetchDonateData = async () => {
  const res = await fetch("/api/donate-amount");
  const data = await res.json();
  return data;
};
export const fetchContactData = async () => {
  const res = await fetch("/api/contact");
  const data = await res.json();
  return data;
};
export const fetchJobOptionsData = async () => {
  const res = await fetch("/api/job_search_list");
  const data = await res.json();
  return data;
};
export const fetchJobResultsData = async () => {
  const res = await fetch("/api/job_search_results");
  const data = await res.json();
  return data;
};
export const fetchJobDetailData = async () => {
  const res = await fetch("/api/job");
  const data = await res.json();
  return data;
};
export const postNoteData = async (postData) => {
  const res = await fetch("/api/note");
  const data = await res.json();
  return data;
};
export const fetchNewsData = async () => {
  const res = await axios.get(
    "https://geofroggy.com/wp-json/wp/v2/posts?_fields=id,date,slug,link,title,content,excerpt,categories,tags,author,yoast_head,yoast_head_json,jetpack_featured_media_url&orderby=id&order=desc&per_page=8"
  );
  return res.data;
};
export const fetchLatestArticlesData = async () => {
  const res = await axios.get(
    "https://geofroggy.com/wp-json/wp/v2/posts?_fields=id,date,slug,link,title,content,excerpt,categories,tags,author,yoast_head,yoast_head_json,jetpack_featured_media_url&orderby=date&order=desc&per_page=15"
  );
  return res.data;
};
export const fetchNewData = async (slug) => {
  const res = await axios.get(
    `https://geofroggy.com/wp-json/wp/v2/posts?slug=${slug}&_fields=id,date,slug,link,title,content,excerpt,categories,tags,author,yoast_head,yoast_head_json,jetpack_featured_media_url`
  );
  return res.data;
};
export const fetchTrendsData = async () => {
  const res = await fetch("/api/trends");
  const data = await res.json();
  return data;
};
export const fetchEventsData = async () => {
  const res = await fetch("/api/events");
  const data = await res.json();
  return data;
};
export const fetchEventData = async (id) => {
  const res = await fetch(`/api/events/detail`);
  const data = await res.json();
  return data;
};
export const fetchGroupsData = async () => {
  const res = await fetch("/api/groups");
  const data = await res.json();
  return data;
};
export const fetchCommunitiesData = async () => {
  const res = await fetch("/api/communities");
  const data = await res.json();
  return data;
};
export const fetchRecommendsData = async () => {
  const res = await fetch("/api/recommends");
  const data = await res.json();
  return data;
};
export const fetchUserData = async () => {
  const res = await fetch("/api/user");
  const data = await res.json();
  return data;
};
