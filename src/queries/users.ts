import { gql } from '@apollo/client';

const GET_USERS = gql`
  query getUsers(
        $filter: FilterFindManyUsersInput
        $skip: Int
        $limit: Int
        $sort: SortFindManyUsersInput
    ) {
        getUsers(filter: $filter, skip: $skip, limit: $limit, sort: $sort) {
            _id
            nome
            email
        }
    }
`;

const USER_UPDATED = gql`
    subscription userUpdated($id: String!) {
        userUpdated(user:$id){
            _id
            nome
            email
        }
    }
`;
const USER_CREATED = gql`
    subscription userCreated{
        userCreated{
            nome
            email
            _id
        }
    }
`;

export { GET_USERS, USER_UPDATED, USER_CREATED };
