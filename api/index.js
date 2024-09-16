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
