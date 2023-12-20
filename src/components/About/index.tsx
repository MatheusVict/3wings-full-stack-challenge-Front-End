import { Link } from "react-router-dom";

export function About() {
  return (
    <div className="container">
      <h1 className="display-1">Blog 3Wings</h1>
      <img
        src="/3wings.png"
        alt="3Wings logo"
        className="img-fluid mb-4 mt-3"
      />
      <p className="lead">
        Este é uma aplicação de gerenciamento de posts de blog de atividades e
        novidades da empresa e para clientes, além de um relatório sobre
        comunicados importantes
        <span className="fw-bold"> 3Wings</span>.
      </p>
      <hr className="my-4" />
      <p>
        Este projeto consome uma API Rest feita em{" "}
        <span className="fw-bold">Spring Boot</span> para a vaga de
        desenvolvedor Full Stack.
      </p>

      <p>
        Para mais informações sobre o projeto, acesse o repositório no GitHub:
      </p>
      <a
        className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
        href="https://github.com/MatheusVict/3wings-full-stack-challenge-Front-End"
      >
        Repositório no GitHub
      </a>
      <br />
      <br />
      <p className="lead">
        <Link className="btn btn-primary btn-lg" to="/" role="button">
          Voltar para a página principal
        </Link>
      </p>
    </div>
  );
}
