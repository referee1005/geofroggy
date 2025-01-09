import {
  FETCH_LANDING_ABOUTUS_REQUEST,
  FETCH_LANDING_ABOUTUS_SUCCESS,
  FETCH_LANDING_ABOUTUS_FAILURE,
  FETCH_POPULAR_COUNTRIES_REQUEST,
  FETCH_POPULAR_COUNTRIES_SUCCESS,
  FETCH_POPULAR_COUNTRIES_FAILURE,
  FETCH_RECENT_ADDITIONS_REQUEST,
  FETCH_RECENT_ADDITIONS_SUCCESS,
  FETCH_RECENT_ADDITIONS_FAILURE,
  FETCH_FAVOURITE_PLACES_REQUEST,
  FETCH_FAVOURITE_PLACES_SUCCESS,
  FETCH_FAVOURITE_PLACES_FAILURE,
  FETCH_SPOTLIGHT_STORIES_REQUEST,
  FETCH_SPOTLIGHT_STORIES_SUCCESS,
  FETCH_SPOTLIGHT_STORIES_FAILURE,
  FETCH_PLACES_REQUEST,
  FETCH_PLACES_SUCCESS,
  FETCH_PLACES_FAILURE,
  FETCH_CULTURAL_HERITAGE_REQUEST,
  FETCH_CULTURAL_HERITAGE_SUCCESS,
  FETCH_CULTURAL_HERITAGE_FAILURE,
  FETCH_JOIN_ADVENTURE_REQUEST,
  FETCH_JOIN_ADVENTURE_SUCCESS,
  FETCH_JOIN_ADVENTURE_FAILURE,
  FETCH_COMMUNITY_VIBES_REQUEST,
  FETCH_COMMUNITY_VIBES_SUCCESS,
  FETCH_COMMUNITY_VIBES_FAILURE,
} from "../types";

export const fetchLandingAboutusRequest = () => ({
  type: FETCH_LANDING_ABOUTUS_REQUEST,
});

export const fetchLandingAboutusSuccess = (data) => ({
  type: FETCH_LANDING_ABOUTUS_SUCCESS,
  payload: data,
});

export const fetchLandingAboutusFailure = (error) => ({
  type: FETCH_LANDING_ABOUTUS_FAILURE,
  payload: error,
});
export const fetchPopularCountriesRequest = () => ({
  type: FETCH_POPULAR_COUNTRIES_REQUEST,
});

export const fetchPopularCountriesSuccess = (data) => ({
  type: FETCH_POPULAR_COUNTRIES_SUCCESS,
  payload: data,
});

export const fetchPopularCountriesFailure = (error) => ({
  type: FETCH_POPULAR_COUNTRIES_FAILURE,
  payload: error,
});
export const fetchRecentAdditionsRequest = () => ({
  type: FETCH_RECENT_ADDITIONS_REQUEST,
});

export const fetchRecentAdditionsSuccess = (data) => ({
  type: FETCH_RECENT_ADDITIONS_SUCCESS,
  payload: data,
});

export const fetchRecentAdditionsFailure = (error) => ({
  type: FETCH_RECENT_ADDITIONS_FAILURE,
  payload: error,
});
export const fetchPlacesRequest = () => ({
  type: FETCH_PLACES_REQUEST,
});

export const fetchPlacesSuccess = (data) => ({
  type: FETCH_PLACES_SUCCESS,
  payload: data,
});

export const fetchPlacesFailure = (error) => ({
  type: FETCH_PLACES_FAILURE,
  payload: error,
});

export const fetchFavouritePlacesRequest = () => ({
  type: FETCH_FAVOURITE_PLACES_REQUEST,
});
export const fetchFavouritePlacesSuccess = (data) => ({
  type: FETCH_FAVOURITE_PLACES_SUCCESS,
  payload: data,
});
export const fetchFavouritePlacesFailure = (error) => ({
  type: FETCH_FAVOURITE_PLACES_FAILURE,
  payload: error,
});

export const fetchSpotlightStoriesRequest = () => ({
  type: FETCH_SPOTLIGHT_STORIES_REQUEST,
});
export const fetchSpotlightStoriesSuccess = (data) => ({
  type: FETCH_SPOTLIGHT_STORIES_SUCCESS,
  payload: data,
});
export const fetchSpotlightStoriesFailure = (error) => ({
  type: FETCH_SPOTLIGHT_STORIES_FAILURE,
  payload: error,
});

export const fetchCulturalHeritageRequest = () => ({
  type: FETCH_CULTURAL_HERITAGE_REQUEST,
});
export const fetchCulturalHeritageSuccess = (data) => ({
  type: FETCH_CULTURAL_HERITAGE_SUCCESS,
  payload: data,
});
export const fetchCulturalHeritageFailure = (error) => ({
  type: FETCH_CULTURAL_HERITAGE_FAILURE,
  payload: error,
});

export const fetchJoinAdventureRequest = () => ({
  type: FETCH_JOIN_ADVENTURE_REQUEST,
});
export const fetchJoinAdventureSuccess = (data) => ({
  type: FETCH_JOIN_ADVENTURE_SUCCESS,
  payload: data,
});
export const fetchJoinAdventureFailure = (error) => ({
  type: FETCH_JOIN_ADVENTURE_FAILURE,
  payload: error,
});

export const fetchCommunityVibesRequest = () => ({
  type: FETCH_COMMUNITY_VIBES_REQUEST,
});
export const fetchCommunityVibesSuccess = (data) => ({
  type: FETCH_COMMUNITY_VIBES_SUCCESS,
  payload: data,
});
export const fetchCommunityVibesFailure = (error) => ({
  type: FETCH_COMMUNITY_VIBES_FAILURE,
  payload: error,
});
