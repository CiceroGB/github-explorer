import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 0.25rem;
    }
  }

`;

export const RepositoryInfo = styled.section`
  margin-top: 5rem;

  header {
    display: flex;
    align-items: center;
    flex: 1;

    img {
      width: 3.75rem;
      min-width: 3.75rem;
      height: 3.75rem;
      border-radius: 50%;
    }


    div {
      margin-left: 1.5rem;
      strong {
        font-size: 4rem;
        color: #3d3d4d;
      }
      p {
        font-size: 2.3rem;
        color: #737380;
      }
    }
  }
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    margin-top: 2.2rem;



    li {
      background: #fff;
      box-shadow: 0 0.25rem 1rem -0.5rem rgba(1, 1, 1, 0.1);
      display: flex;
      padding: 0.75rem;
      border-radius: 0.25rem;
      justify-content: center;
      align-items: center;
      transition: transform 0.3s;

      & + li {
        margin-left: 1rem;
      }

      &:hover {
        transform: translateY(-0.25px);
      }

      strong {
        margin-left: 0.25;
        display: block;
        font-size: 1.2rem;
        color: #3d3d4d;
      }

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0.25rem;
        margin-top: 0.25rem;
        color: #6c6c80;

        &:nth-child(2) {
          display: none;
        }

        &:nth-child(3) {
          font-weight: 500;
          background-color: rgba(27, 31, 35, 0.08);
          color: #444d56;
          padding-left: 0.25rem;
          padding-right: 0.25rem;
          border-radius: 0.35rem;
        }
      }
    }
  }
`;

export const Issues = styled.div`
  box-shadow: 0 0.25rem 1rem -0.75rem rgba(1, 1, 1, 0.1);
  margin-top: 5rem;
  a {
    background: #fff;
    border-radius: 0.25rem;
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
      transform: translateX(0.7rem);
    }
    div {
      margin: 0 1rem;
      flex: 1;
      strong {
        font-size: 1.2rem;
        color: #3d3d4d;
      }
      p {
        font-size: 1.1rem;
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
