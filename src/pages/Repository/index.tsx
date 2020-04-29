import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Header, RepositoryData, IssuesList } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Back
        </Link>
      </Header>

      <RepositoryData>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/26369276?s=460&u=1ff4ab81ad6beca14ff319fb09c6d10dbb919d6c&v=4"
            alt="Lucas Reinaldo"
          />
          <div>
            <strong>LucasReinaldo/wadev-omnistack</strong>
            <p>Descrição</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>90</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>90</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>90</strong>
            <span>Opened Issues</span>
          </li>
        </ul>
      </RepositoryData>
      <IssuesList>
        <Link to="a">
          <div>
            <strong>Full Name</strong>
            <p>Description</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </IssuesList>
    </>
  );
};

export default Repository;
