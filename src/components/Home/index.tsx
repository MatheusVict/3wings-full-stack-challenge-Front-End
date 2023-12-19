import "./styles.css";
import { SearchInput } from "../SearchInput";
import { BlogItem } from "../BlogItem";
import { useEffect, useState } from "react";
import { PostApiResponse } from "../../interfaces";
import { getPosts } from "../../service/api/posts";
import { Link } from "react-router-dom";

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
      <div className="text-center mb-3">
        <Link className="btn btn-success ml-2" to="/post/create">
          Criar post
        </Link>
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
            picture="/3wings.png"
          />
        ))}
      </div>
    </div>
  );
}
