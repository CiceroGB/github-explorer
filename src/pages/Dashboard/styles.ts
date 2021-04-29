import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}


export const Title = styled.h1`
  font-size: 4rem;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 4rem;
  margin-top: 5rem;

`;

export const Form = styled.form<FormProps>`
  margin-top: 2.5rem;  
  max-width: 43.75rem;
  
  display: flex;

  input {
    flex: 1;
    height: 4rem;
    padding: 0 1.5rem;
    border: 0;
    border-radius: 0.3rem 0 0 0.3rem;
    color: #3a3a3a;
    border: 0.1rem solid #fff;
    font-size: 1.1rem;

    ${props =>
    props.hasError &&
    css`
        border-color: #c53030;
      `}
  

    &::placeholder{
      color: #a8a8b3;
    }

  }

  button {
    height: 4rem;
    font-size: 1.1rem;
    width: 13.125rem;
    background: #04d361;
    border-radius: 0 0.3rem 0.3rem 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;


    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
    
  }

`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 0.5rem;
`;

export const Repositories = styled.div`
  margin-top: 4rem;  
  max-width: 43.75rem;

  a {
    background: #fff;
    border-radius: 0.3rem;
    width: 100%;
    padding: 1.5rem;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 1rem;
    }

    &:hover {
      transform: translateX(0.6rem);
    }

    img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }

    div {
      margin: 0 1rem;
      flex: 1;

      strong {
        font-size: 2.2rem;
        color: #3d3d4d;
      }

      p {
        font-size: 1.5rem;
        color: #a8a8b3;
        margin-top: 0.25rem;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }

`;
