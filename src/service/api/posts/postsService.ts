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

export async function updatePost(id: string, data: PostApiRequest) {
  try {
    const { status } = await api.put(`/posts/${id}`, data);
    if (status === 204) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export async function deletePost(id: string) {
  try {
    const { status } = await api.delete(`/posts/${id}`);
    if (status === 204) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
