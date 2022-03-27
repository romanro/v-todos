import React, { FC } from 'react';
import styled from 'styled-components';
import { TextInput } from '../../../common/components';

interface FiltersHeaderProps {}

const StyledFiltersHeader = styled.div`
    padding: 20px;
    padding-bottom: 0;
`;

export const FiltersHeader: FC<FiltersHeaderProps> = (props) => {
    return (
        <StyledFiltersHeader>
            <TextInput placeholder='filter todos by tags' fullWidth />
        </StyledFiltersHeader>
    );
};
