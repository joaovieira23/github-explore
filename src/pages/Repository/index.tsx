import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useRouteMatch, Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface repositoryParams {
  repository: string;
}


const Repository: React.FC = () => {
  const { params } = useRouteMatch<repositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explore" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://avatars1.githubusercontent.com/u/45154356?s=460&u=3ae25f40bfcf6c661c7fad6f27ea1f471acf88ac&v=4" alt="João Vieira"></img>
          <div>
            <strong>joaovieira23/github-explore</strong>
            <p>Descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>950</strong>
            <span>Stars</span>
          </li>

          <li>
            <strong>20</strong>
            <span>Forks</span>
          </li>

          <li>
            <strong>42</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to={"teste"}>
          <div>
            <strong>Teste</strong>
            <p>Teste</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
