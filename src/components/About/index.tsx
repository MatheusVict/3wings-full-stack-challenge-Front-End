import { Link } from "react-router-dom";

export function About() {
  return (
    <div className="container">
      <h1 className="display-1">Sobre</h1>
      <h3 className="display-6">Blog 3Wings</h3>
      <p className="lead">
        Este é uma aplicação de gerenciamento de posts de blog que consome uma
        API REST feita em Spring boot.
      </p>
      <hr className="my-4" />
      <p>Este projeto foi feito para um processo seletivo da empresa 3Wings.</p>
      <p>
        Para mais informações sobre o projeto, acesse o repositório no GitHub:
      </p>
      <a
        className="btn  btn-lg"
        href="https://github.com/MatheusVict/3wings-full-stack-challenge-Front-End"
      >
        Repositório no GitHub
      </a>
      <br />
      <br />
      <p className="lead">
        <Link className="btn btn-primary btn-lg" to="/home" role="button">
          Voltar para a página principal
        </Link>
      </p>

      <h3 className="display-6">Entre em contato</h3>
    </div>
  );
}
