import React, { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    fullWidth?: boolean;
}

const StyledTextInput = styled.input<TextInputProps>`
    width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
`;

export const TextInput: FC<TextInputProps> = ({ type, fullWidth, ...rest }) => {
    return <StyledTextInput type='text' fullWidth={fullWidth} {...rest} />;
};
