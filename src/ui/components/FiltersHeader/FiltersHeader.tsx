import { debounce } from 'lodash';
import React, { FC, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { TextInput } from '../../../common/components';

interface FiltersHeaderProps {
    initialText: string;
    onFilter: (text: string) => Promise<void>;
}

const StyledFiltersHeader = styled.div`
    padding: 20px;
    padding-bottom: 0;
`;

export const FiltersHeader: FC<FiltersHeaderProps> = ({ onFilter, initialText }) => {
    const [search, setSearch] = useState<string>(initialText);

    useEffect(() => {
        setSearch(initialText);
    }, [initialText]);

    const handleInput = async (text: string) => {
        await onFilter(text);
    };

    const debouncedChangeHandler = useCallback(debounce(handleInput, 700), []);

    return (
        <StyledFiltersHeader>
            <TextInput
                placeholder='filter todos by tags'
                fullWidth
                value={search}
                helperText='use comma or space to search subtags'
                onChange={(e) => {
                    setSearch(e.currentTarget.value);
                    debouncedChangeHandler(e.currentTarget.value);
                }}
            />
        </StyledFiltersHeader>
    );
};
