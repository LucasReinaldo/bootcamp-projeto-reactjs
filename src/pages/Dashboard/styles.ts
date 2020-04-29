import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  color: #3a3a3a;
  font-size: 48px;
  line-height: 56px;
  margin-top: 80px;
  max-width: 450px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 715px;
  display: flex;

  input {
    flex: 1;
    height: 50px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #06d6a0;
    border-right: 0;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #ef476f;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 50px;
    background-color: #06d6a0;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${shade(0.1, `#06d6a0`)};
    }
  }
`;

export const Error = styled.span`
  color: #ef476f;
`;

export const Repositories = styled.div`
  margin-top: 60px;
  max-width: 700px;

  a {
    align-items: center;
    background-color: #feffff;
    display: block;
    display: flex;
    padding: 18px;
    text-decoration: none;
    transition: transform 0.3s;
    width: 700px;

    &:hover {
      transform: translateX(15px);
    }

    & + a {
      margin-top: 14px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 14px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 16px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #06d6a0;
    }
  }
`;
