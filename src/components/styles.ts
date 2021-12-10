import { createStyles, Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
/* eslint-disable @typescript-eslint/no-explicit-any */
const useStyles: any = makeStyles((theme: Theme) =>
  createStyles({
    addButton: {
      margin: theme.spacing(2),
      display: 'flex',
      flexWrap: 'wrap',
      width: 250
    }
  })
);
export default useStyles;
