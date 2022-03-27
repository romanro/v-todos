import React, { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    fullWidth?: boolean;
    helperText?: string;
}

const StyledTextInput = styled.input<TextInputProps>`
    width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
`;

const StyledHelperText = styled.p`
    color: grey;
    font-size: 0.7rem;
    margin-top: 0;
`;

const StyledTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TextInput: FC<TextInputProps> = ({ type, fullWidth, helperText, ...rest }) => {
    return (
        <StyledTextWrapper>
            <StyledTextInput type='text' fullWidth={fullWidth} {...rest} />
            {helperText && <StyledHelperText>{`*${helperText}`}</StyledHelperText>}
        </StyledTextWrapper>
    );
};
