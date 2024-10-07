import axios from "axios";
// import { ApiUrl } from "../config";

export const fetchInterestData = async () => {
  try {
    const res = await fetch("/api/interests");
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching interests:", error);
    return [];
  }
};
export const fetchPopularData = async () => {
  const res = await fetch("/api/populars");
  const data = await res.json();
  return data;
};
export const fetchRecentData = async () => {
  const res = await fetch("/api/recent-additions");
  const data = await res.json();
  return data;
};
export const fetchPlaceData = async () => {
  const res = await fetch("/api/places");
  const data = await res.json();
  return data;
};
export const fetchFavouritePlaceData = async () => {
  const res = await fetch("/api/favourite-places");
  const data = await res.json();
  return data;
};
export const fetchSiteInfoData = async () => {
  const res = await fetch("/api/site-info");
  const data = await res.json();
  return data;
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
  const res = await fetch("/api/news");
  const data = await res.json();
  return data;
};
export const fetchNewData = async (id) => {
  const res = await fetch(`/api/news/${id}`);
  const data = await res.json();
  return data;
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
