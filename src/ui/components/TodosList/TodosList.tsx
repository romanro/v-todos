import { isEmpty } from 'lodash';
import React, { FC } from 'react';
import styled from 'styled-components';
import { Todos } from '../../../core/models';
import { SingleTodo } from './SingleTodo';

const StyledList = styled.ul`
    list-style: none;
    padding: 10px;
    margin: 10px;
`;

interface TodosListProps {
    todos: Todos;
    refetchTodos: () => void;
}

export const TodosList: FC<TodosListProps> = ({ todos = [], refetchTodos }) => {
    return isEmpty(todos) ? (
        <h2>No Todos</h2>
    ) : (
        <StyledList>
            {todos.map((todo) => (
                <SingleTodo key={todo.id} todo={todo} refetchTodos={refetchTodos} />
            ))}
        </StyledList>
    );
};
