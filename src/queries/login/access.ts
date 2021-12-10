import { gql } from '@apollo/client';

const LOGIN_ACCESS = gql`
  query userOne($username: String!, $password: String!) {
    userOne(filter: { usuario: $username, senha: $password }) {
      _id
      usuario
      nome
      locais {
        nome
        cidade
        uf
      }
      pets {
        nome
        idade
        peso
        cor
        raca
      }
    }
  }
`;

export { LOGIN_ACCESS };
