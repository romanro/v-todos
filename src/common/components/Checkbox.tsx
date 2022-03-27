import * as React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox: React.FC<CheckboxProps> = ({ type, ...rest }) => {
    return <input type='checkbox' {...rest} />;
};

export default Checkbox;
