import "./styles.css";
import { SearchInput } from "../SearchInput";
import { BlogItem } from "../BlogItem";
import { useEffect, useState } from "react";
import { PostApiResponse } from "../../interfaces";
import { getPosts } from "../../service/api/posts";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

export function Home() {
  const [posts, setPosts] = useState<PostApiResponse[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<PostApiResponse[]>([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    getPosts()
      ?.then((response) => {
        setPosts(response.data);
      })
      .catch((error: unknown) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    searchItems(search);
  }, [search, posts]);

  const onSearch = (search: string) => {
    setSearch(search);
  };

  const searchItems = (searchValue: string) => {
    setSearch(searchValue);
    if (searchValue !== "") {
      const filteredData = posts.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setFilteredPosts(filteredData);
    } else {
      setFilteredPosts(posts);
    }
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
        {posts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <BlogItem
              key={index}
              id={post.id}
              title={post.title}
              content={post.content}
              picture="/3wings.png"
            />
          ))
        ) : (
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ height: "70vh" }}
          >
            <Image src="/glass.png" fluid style={{ height: "150px" }} />
            <p className="text-body-secondary fw-bold text-center">
              Nenhuma postagem encontrada
            </p>
            <Link className="btn btn-success ml-2" to="/post/create">
              Criar postagem
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
