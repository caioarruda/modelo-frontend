import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';

import { Grid, Paper, Table, TableHead, TableBody, TableCell, TableRow, } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';
import theme from '../styles/theme';
import { useQuery, useSubscription } from '@apollo/client';
import { GET_USERS, USER_CREATED } from '../queries/users';
import UserPubSub from '../components/users/UserPubSub';
import UserType from '../types/user';

const useStyles: any = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1
    },
    header: {
      textAlign: 'center',
      background: '#253083',
    },
    card: {
      marginTop: theme.spacing(10)
    }
  })
);


const Home: NextPage = () => {
  const { data, loading } = useQuery(GET_USERS);
  const result = useSubscription(USER_CREATED);
  const [users, setUsers] = React.useState<UserType[]>([]);
  React.useEffect(() => {
    if (!loading && data.getUsers?.length > 0) {
      setUsers(data.getUsers);
    }
  }, [data]);
  React.useEffect(() => {
    if (result.data?.userCreated) {
      const newUsers = [...users];
      const newUser: UserType = {} as UserType;
      newUser._id = result.data.userCreated._id;
      newUser.nome = result.data.userCreated.nome;
      newUser.email = result.data.userCreated.email;
      newUsers.push(newUser);
      setUsers(newUsers);
    }
  }, [result]);
  return (
    <Container maxWidth="lg">
      <Grid >
        <Paper>
          <Grid color={'Menu'} flexDirection={'column'} className={useStyles(theme).header} >
            <h1>Usuários</h1>
          </Grid>
        </Paper>
      </Grid>

      <Grid >
        <Paper className={useStyles(theme).card} >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell>Carregando... </TableCell>
                </TableRow>
              ) : users.length ? users.map((user: UserType) => (<UserPubSub key={user._id} user={user} />)) : (<TableRow>
                <TableCell>Nenhum usuário encontrado </TableCell>
              </TableRow>)}
            </TableBody>
          </Table>
        </Paper>
      </Grid>

    </Container>
  );
};

export default Home;
