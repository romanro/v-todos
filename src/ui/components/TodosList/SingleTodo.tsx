import React, { FC, useMemo } from 'react';
import { useMutation } from 'react-query';
import styled from 'styled-components';
import { deleteTodo } from '../../../core/api/todos/todos.api';
import { Action, Todo, TodoId } from '../../../core/models/todo';

export interface SingleTodoProps {
    todo: Todo;
    refetchTodos: () => void;
}

const TodoWrapper = styled.div`
    padding: 10px;
    margin: 10px 0;
    background: yellow;
    box-shadow: 2px 2px 6px #000000;

    .todoInfo {
        display: flex;
        justify-content: space-between;
    }
`;

const TagList = styled.ul`
    list-style: none;
    padding: 0;
`;

const Tag = styled.li`
    display: inline-block;
    padding: 5px;
    background: #fff;
    border: 1px solid black;
    border-radius: 10px;
`;

export const SingleTodo: FC<SingleTodoProps> = ({ todo, refetchTodos }) => {
    const { id } = todo;
    const { Text, Tags } = todo.fields;

    const ParsedTags: string[] = useMemo(() => JSON.parse(Tags) || [], [Tags]);

    const { mutate, isLoading } = useMutation((id: string) => deleteTodo(id));

    const handleDelete = (action: Action) => {
        switch (action) {
            case 'DELETE':
                mutate(id, {
                    onSuccess: (res) => {
                        refetchTodos();
                    },
                });
                break;
        }
    };

    return (
        <TodoWrapper>
            <div className='todoInfo'>
                <p>{Text}</p>
                <button disabled={isLoading} onClick={() => handleDelete('DELETE')}>
                    DELETE
                </button>
            </div>
            <div className='todoTags'>
                <TagList>
                    {ParsedTags.map((tag, index) => (
                        <Tag key={index}>{tag}</Tag>
                    ))}
                </TagList>
            </div>
        </TodoWrapper>
    );
};
