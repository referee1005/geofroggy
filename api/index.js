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
  const res1 = await axios.get(
    `https://geofroggy.com/wp-json/gfrog/v1/faq/advice-and-answer`
  );
  const res2 = await axios.get(
    `https://geofroggy.com/wp-json/gfrog/v1/faq/general`
  );
  const res3 = await axios.get(
    `https://geofroggy.com/wp-json/gfrog/v1/faq/geography`
  );
  return {
    advice_answers: res1.data,
    general_faqs: res2.data,
    geography_faqs: res3.data,
  };
};
export const fetchDonateData = async () => {
  const res = await axios.get(
    `https://geofroggy.com/wp-json/gfrog/v1/donation/content`
  );
  return res.data;
};
export const fetchContactData = async () => {
  const res = await fetch("/api/contact");
  const data = await res.json();
  return data;
};
export const fetchJobPositionsData = async () => {
  const res = await axios.get(
    `https://geofroggy.com/wp-json/gfrog/v1/career/positions`
  );
  return res.data;
};
export const fetchJobTagsData = async () => {
  const res = await axios.get(
    `https://geofroggy.com/wp-json/gfrog/v1/career/tags`
  );
  return res.data;
};
export const fetchJobResultsData = async (query) => {
  const res = await axios.get(
    "https://geofroggy.com/wp-json/gfrog/v1/career/query/?" + query
  );
  return res.data;
};
export const fetchJobDetailData = async (slug) => {
  const res = await axios.get(
    "https://geofroggy.com/wp-json/gfrog/v1/career/" + slug
  );
  return res.data;
};
export const postNoteData = async (postData) => {
  const res = await fetch("/api/note");
  const data = await res.json();
  return data;
};
export const fetchNewsData = async () => {
  const res = await axios.get(
    "https://geofroggy.com/wp-json/gfrog/v1/news/all-posts?per_page=8&page_no=1&total_count=15"
  );
  return res.data;
};
export const fetchLatestArticlesData = async () => {
  const res = await axios.get(
    "https://geofroggy.com/wp-json/gfrog/v1/news/all-posts?orderby=date&order=desc&per_page=10"
  );
  return res.data;
};
export const fetchNewData = async (slug) => {
  const res = await axios.get(
    `https://geofroggy.com/wp-json/gfrog/v1/news-single/${slug}`
  );
  return res.data;
};
export const fetchTrendsData = async () => {
  const res = await axios.get(
    `https://geofroggy.com/wp-json/gfrog/v1/news/all-posts?orderby=id&order=desc&per_page=6`
  );
  return res.data;
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
export const fetchSponsorData = async () => {
  const res = await axios.get(
    `https://geofroggy.com/wp-json/gfrog/v1/sponsor/content`
  );
  return res.data;
};
export const fetchSponsorFaqData = async () => {
  const res = await axios.get(
    `https://geofroggy.com/wp-json/gfrog/v1/sponsor/faq`
  );
  return res.data;
};
export const fetchSponsorTeamData = async () => {
  const res = await axios.get(
    `https://geofroggy.com/wp-json/gfrog/v1/sponsor/team`
  );
  return res.data;
};
export const fetchNewsletterOptionsData = async () => {
  const res = await axios.get(
    `https://geofroggy.com/wp-json/gfrog/v1/newsletter/captions`
  );
  return res.data;
};
export const postNewsletterSubscribeData = async (data) => {
  const res = await axios.post(
    `https://geofroggy.com/wp-json/gfrog/v1/subscribe/receive-callback?email=noopor@gmail.com&category[]=general&category[]=marketing`,
    data
  );
  return res.data;
};
export const postJobApplyorContactData = async (data) => {
  const res = await axios.post(
    `https://geofroggy.com/wp-json/gfrog/v1/job/apply?type=${data.type}&name=John Doe&email=johndoe@gmail.com&slug=${data.slug}`,
    data
  );
  return res.data;
};
export const fetchAdvertiseBodyData = async () => {
  const res = await axios.get(
    `https://geofroggy.com/wp-json/gfrog/v1/advertise/body`
  );
  return res.data;
};
export const fetchAdvertiseSocialData = async () => {
  const res = await axios.get(
    `https://geofroggy.com/wp-json/gfrog/v1/advertise/social-icons`
  );
  return res.data;
};
export const fetchAdvertisePlansData = async () => {
  const res = await axios.get(
    `https://geofroggy.com/wp-json/gfrog/v1/advertise/plans`
  );
  return res.data;
};
