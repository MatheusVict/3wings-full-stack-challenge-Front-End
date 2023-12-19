import "./styles.css";
import { SearchInput } from "../SearchInput";
import { BlogItem } from "../BlogItem";
import { useEffect, useState } from "react";
import { PostApiResponse } from "../../interfaces";
import { getPosts } from "../../service/api/posts";

export function Home() {
  const [posts, setPosts] = useState<PostApiResponse[]>([]);
  useEffect(() => {
    getPosts()
      ?.then((response) => {
        setPosts(response.data);
      })
      .catch((error: unknown) => {
        console.log(error);
      });
  }, []);

  const onSearch = (search: string) => {
    console.log(search);
  };

  return (
    <div className="d-flex flex-column mb-3">
      <h1 className="display-6">Página incial</h1>
      <div className="search">
        <SearchInput onSearch={onSearch} />
      </div>
      <h3 className="text-body-secondary">Acompanhe as novidades da 3Wings</h3>
      <small className="text-body-secondary">
        Em qualquer lugar, fácil e rápido
      </small>
      <div className="posts_container">
        {posts.map((post, index) => (
          <BlogItem
            key={index}
            id={post.id}
            title={post.title}
            content={post.content}
            picture="https://rhp.com.br/wp-content/uploads/2021/11/LOGOTIPO_RHP.png"
          />
        ))}
      </div>
    </div>
  );
}
