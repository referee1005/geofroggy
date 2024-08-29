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
export const fetchSiteInfoData = async () => {
  const res = await fetch("/api/site-info");
  const data = await res.json();
  return data;
};
