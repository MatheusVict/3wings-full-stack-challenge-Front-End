/* eslint-disable @typescript-eslint/no-explicit-any */
import { PostApiResponse, PostApiRequest } from "../../../interfaces";
import { popUpAlert } from "../../../utils/pop-up-alert/popUpAlert";
import { api } from "../config/axios";

export async function getPosts(): Promise<PostApiResponse[] | any> {
  try {
    return await api.get<PostApiResponse[]>("/posts");
  } catch (error) {
    console.log(error);
  }
}

export async function getPost(id: string): Promise<PostApiResponse | any> {
  try {
    return await api.get<PostApiResponse>(`/posts/${id}`);
  } catch (error) {
    popUpAlert("Erro ao buscar a postagem", "error");
    return;
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
    popUpAlert("Erro ao criar postagem", "error");
    return;
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
    popUpAlert("Erro ao editar postagem", "error");
    return;
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
    popUpAlert("Erro ao deletar postagem", "error");
    return;
  }
}
