import React from 'react';

interface IButtonProps {
  callback: () => any;
  text: string;
  disabled: boolean;
}

const Button: React.FunctionComponent<IButtonProps> = (props) => {
  return (
    <button
      className='text-white bg-recunited hover:bg-recunitedLight py-1 px-2 rounded-md'
      onClick={() => !props.disabled && props.callback()}
    >
      {props.text}
    </button>
  );
};

export default Button;
