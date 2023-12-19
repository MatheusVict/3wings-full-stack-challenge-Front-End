import { PostApiResponse } from "../../../interfaces";
import { api } from "../config/axios";

export function getPosts() {
  try {
    return api.get<PostApiResponse[]>("/posts");
  } catch (error) {
    console.error(error);
  }
}

export function getPost(id: string) {
  try {
    return api.get<PostApiResponse>(`/posts/${id}`);
  } catch (error) {
    console.error(error);
  }
}
