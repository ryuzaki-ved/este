import { defer } from "react-router-dom";
import apiRequest from "./apiRequest";
import { filterProperties, properties } from "./propertyData";

export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest("/posts/" + params.id);
  return res.data;
};

export const listPageLoader = async ({ request }) => {
  const url = new URL(request.url);
  const searchParams = Object.fromEntries(url.searchParams);
  const filteredProperties = filterProperties(searchParams);
  
  return defer({
    postResponse: Promise.resolve({ data: filteredProperties })
  });
};

export const profilePageLoader = async () => {
  const postPromise = apiRequest("/users/profilePosts");
  const chatPromise = apiRequest("/chats");
  return defer({
    postResponse: postPromise,
    chatResponse: chatPromise,
  });
};