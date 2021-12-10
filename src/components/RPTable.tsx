import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Grid, TextField } from '@mui/material';

interface InputProps {
  data: any[];
  labels: string[];
  fields: string[];
  title: string;
}
// function getProperty<T, K extends keyof T>(o: T, propertyName: K): T[K] {
//     return o[propertyName]; // o[propertyName] is of type T[K]
// }

function listData(props: InputProps) {
  const { data, fields } = props;
  const rows = data.map((pet: any, index: number) => {
    return (
      <TableRow key={index}>
        {Object.keys(pet).map((key: string, index: number) => {
          return (
            <>
              {fields.includes(key) ? (
                <TableCell key={index}>{pet[key]}</TableCell>
              ) : null}
            </>
          );
        })}
      </TableRow>
    );
  });
  return <>{rows}</>;
}

const RPTable: React.FC<InputProps> = (props) => {
  return (
    <React.Fragment>
      <h1>{props.title}</h1>
      <Grid container spacing={4} style={{ marginBottom: 10 }}>
        <Grid item xs={4}>
          <TextField id="filled-basic" label="Filtro" variant="filled" />
        </Grid>
      </Grid>
      <Table size="small">
        <TableHead>
          <TableRow>
            {props.labels.map((label: string) => (
              <TableCell key={label}>{label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{listData(props)}</TableBody>
      </Table>
    </React.Fragment>
  );
};

export default RPTable;
