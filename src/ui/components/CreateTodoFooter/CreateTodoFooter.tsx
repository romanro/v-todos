import React, { FC, KeyboardEvent, useState } from 'react';
import { useMutation } from 'react-query';
import styled from 'styled-components';
import { TextInput } from '../../../common/components';
import { postNewTodo } from '../../../core/api';
import { createNewTodo } from '../../utils/todo.utils';

interface CreateTodoFooterProps {
    refetchTodos: () => void;
}

const StyledCreateTodoFooter = styled.div`
    padding: 20px;
    padding-top: 0;
`;

export const CreateTodoFooter: FC<CreateTodoFooterProps> = ({ refetchTodos }) => {
    const [newTodoText, setNewTodoText] = useState<string>('');

    const { mutate, isLoading } = useMutation((todoText: string) => postNewTodo(createNewTodo(todoText)));

    const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        e.stopPropagation();
        if (e.code === 'Enter' && !isLoading) {
            if (newTodoText) {
                mutate(newTodoText, {
                    onSuccess: () => {
                        refetchTodos?.();
                        setNewTodoText('');
                    },
                });
            }
        }
    };

    return (
        <StyledCreateTodoFooter>
            <TextInput
                placeholder='add new todo'
                disabled={isLoading}
                value={newTodoText}
                onKeyDown={handleEnter}
                onChange={(e) => setNewTodoText(e.target.value)}
                fullWidth
            />
        </StyledCreateTodoFooter>
    );
};
