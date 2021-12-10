import { Button } from '@mui/material';
import * as React from 'react';
import { RPButton } from '..';
import useStyles from './styles';

type RPFormHandlerProps = {
  onSave: () => void;
  children: React.ReactNode;
};
const RPFormHandler: React.FC<RPFormHandlerProps> = (props) => {
  const [inputValues, setInputValues] = React.useState<{
    [key: string]: string;
  }>({});
  const [inputErrors, setInputErrors] = React.useState<{
    [key: string]: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputValues({ ...inputValues, [name]: value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputErrors({ ...inputErrors, [name]: value });
  };

  React.Children.toArray(props.children).map((child: React.ReactNode) => {
    if (React.isValidElement(child) && child.props.inputComponent) {
      const inputComponent: React.ReactElement<any, any> =
        child.props.inputComponent;
      console.log(inputComponent);
      // Object.preventExtensions(inputComponent);
      // inputComponent.props.onChange = handleChange;
      // inputComponent.props.onBlur = handleBlur;
    }
  });

  return (
    <>
      {props.children}
      <RPButton variant="contained" color="success" onClick={props.onSave}>
        Salvar
      </RPButton>
    </>
  );
};
export default RPFormHandler;
