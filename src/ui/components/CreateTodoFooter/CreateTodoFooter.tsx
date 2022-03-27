import React, { FC, KeyboardEvent, useState } from 'react';
import { useMutation } from 'react-query';
import { postNewTodo } from '../../../core/api';
import { NewTodo } from '../../../core/models';

interface CreateTodoFooterProps {
    refetchTodos: () => void;
}

const createNewTodo = (text: string): NewTodo => {
    return {
        fields: {
            Text: text,
            Tags: JSON.stringify([]),
            Status: 'Todo',
        },
    };
};

export const CreateTodoFooter: FC<CreateTodoFooterProps> = ({ refetchTodos }) => {
    const [newTagText, setNewTagText] = useState<string>('');

    const { mutate, isLoading } = useMutation((todoText: string) => postNewTodo(createNewTodo(todoText)));

    const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter' && !isLoading) {
            if (newTagText) {
                mutate(newTagText, {
                    onSuccess: () => {
                        refetchTodos?.();
                        setNewTagText('');
                    },
                });
            }
        }
    };

    return (
        <div>
            <input
                type='text'
                disabled={isLoading}
                value={newTagText}
                onKeyDown={handleEnter}
                onChange={(e) => setNewTagText(e.target.value)}
            />
        </div>
    );
};
