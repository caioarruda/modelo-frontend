import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';

import { Grid, Paper, Table, TableHead, TableBody, TableCell, TableRow, } from '@mui/material';
import { createStyles, Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import theme from '../styles/theme';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../queries/users';
import UserPubSub from '../components/users/UserPubSub';

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
      background: '#000',
    },
    card: {
      marginTop: theme.spacing(10)
    }
  })
);


const Home: NextPage = () => {
  const { data, loading, error, refetch } = useQuery(GET_USERS);

  return (
    <Container maxWidth="lg">
      <Grid >
        <Paper>
          <Grid spacing={3} color={'Menu'} flexDirection={'column'} className={useStyles(theme).header} >
            <h1>Usuários</h1>
          </Grid>
        </Paper>
      </Grid>

      <Grid >
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {loading ? <>Carregando</> : data.getUsers.map((user: any) => (<UserPubSub user={user} />))}
            </TableBody>
          </Table>
        </Paper>
      </Grid>

    </Container>
  );
};

export default Home;
