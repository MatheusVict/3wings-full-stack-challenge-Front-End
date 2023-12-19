/* eslint-disable @typescript-eslint/no-explicit-any */
import { PostApiResponse, PostApiRequest } from "../../../interfaces";
import { api } from "../config/axios";

export async function getPosts(): Promise<PostApiResponse[] | any> {
  try {
    return await api.get<PostApiResponse[]>("/posts");
  } catch (error) {
    console.error(error);
  }
}

export async function getPost(id: string): Promise<PostApiResponse | any> {
  try {
    return await api.get<PostApiResponse>(`/posts/${id}`);
  } catch (error) {
    console.error(error);
  }
}

export async function createPost(
  data: PostApiRequest
): Promise<boolean | undefined> {
  try {
    const { status } = await api.post("/posts", data);
    if (status === 201) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return undefined;
  }
}
