import * as React from 'react';
import { Button } from '@mui/material';
import useStyles from './styles';

type RPButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'text' | 'outlined' | 'contained' | undefined;
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | undefined;
};

const RPButton: React.FC<RPButtonProps> = (props) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.addButton}
      variant={props.variant}
      startIcon={props.icon}
      size="small"
      onClick={props.onClick}
      color={props.color}
    >
      {props.children}
    </Button>
  );
};

export default RPButton;
