import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>GitHub Repositories Explorer</Title>

      <Form>
        <input placeholder="Repository name" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars3.githubusercontent.com/u/26369276?s=460&u=1ff4ab81ad6beca14ff319fb09c6d10dbb919d6c&v=4"
            alt="Lucas Melo"
          />
          <div>
            <strong>LucasReinaldo/bootcamp</strong>
            <p>Easy peasy lemmon squeazy</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars3.githubusercontent.com/u/26369276?s=460&u=1ff4ab81ad6beca14ff319fb09c6d10dbb919d6c&v=4"
            alt="Lucas Melo"
          />
          <div>
            <strong>LucasReinaldo/bootcamp</strong>
            <p>Easy peasy lemmon squeazy</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars3.githubusercontent.com/u/26369276?s=460&u=1ff4ab81ad6beca14ff319fb09c6d10dbb919d6c&v=4"
            alt="Lucas Melo"
          />
          <div>
            <strong>LucasReinaldo/bootcamp</strong>
            <p>Easy peasy lemmon squeazy</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
