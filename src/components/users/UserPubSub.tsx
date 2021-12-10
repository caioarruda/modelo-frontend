import React from "react";
import { useSubscription } from "@apollo/client";
import UserType from "../../types/user";
import { USER_UPDATED } from "../../queries/users";
import { TableCell, TableRow } from "@mui/material";


type Props = {
    user: UserType
}

const UserPubSub: React.FC<Props> = (props) => {

    const result = useSubscription(USER_UPDATED, { variables: { id: props.user._id } });
    if (result?.error) {
        console.log(result?.error);
    }
    let nome = props.user.nome;
    let email = props.user.email;
    if (result?.data?.userUpdated) {
        nome = result?.data?.userUpdated.nome;
        email = result?.data?.userUpdated.email;
    }
    return (
        <TableRow>
            <TableCell>{nome}</TableCell>
            <TableCell>{email}</TableCell>
        </TableRow>
    );
};

export default UserPubSub;
