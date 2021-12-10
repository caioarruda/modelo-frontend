import * as React from 'react';

type RPFormInputProps = {
  verify?: (value: string) => boolean;
  inputComponent: React.ReactElement<any, any>;
};
const RPFormInput: React.FC<RPFormInputProps> = (props) => {
  return <>{props.inputComponent}</>;
};

export default RPFormInput;
