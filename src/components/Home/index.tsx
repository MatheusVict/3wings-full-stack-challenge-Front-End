import "./styles.css";
import { SearchInput } from "../SearchInput";
import { BlogItem } from "../BlogItem";

export function Home() {
  const onSearch = (search: string) => {
    console.log(search);
  };

  const allPosts = [
    {
      id: 1,
      title: "Today we did a new hospital system that will save lives",
      content:
        "What's up guys, today we did a new hospital system that will save lives. We are very happy to do this project and we hope that you like it. We are very happy to do this project and we hope that you like it. We are very happy to do this project and we hope that you like it. We are very happy to do this project and we hope that you like it.",
      picture:
        "https://static.wixstatic.com/media/7bead1_f2549890dd6e4547bafe0834e12fd586~mv2.png/v1/fill/w_175,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7bead1_f2549890dd6e4547bafe0834e12fd586~mv2.png",
    },
    {
      id: 2,
      title: "Today we did a new hospital system that will save lives",
      content:
        "What's up guys, today we did a new hospital system that will save",
      picture: "https://rhp.com.br/wp-content/uploads/2021/11/LOGOTIPO_RHP.png",
    },
    {
      id: 3,
      title: "Today we did a new hospital system that will save lives",
      content:
        "What's up guys, today we did a new hospital system that will save",
      picture:
        "https://super.abril.com.br/wp-content/uploads/2018/07/site_143.jpg?quality=90&strip=info&w=1000&resize=1200,800",
    },
  ];
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
        {allPosts.map((post, index) => (
          <BlogItem
            key={index}
            id={post.id}
            title={post.title}
            content={post.content}
            picture={post.picture}
          />
        ))}
      </div>
    </div>
  );
}
