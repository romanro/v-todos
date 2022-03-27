import { useMutation } from 'react-query';
import { createPatchTodo } from '../../ui/utils/todo.utils';
import { deleteTodo, patchTodo } from '../api';
import { Action, PatchTodo, Todo } from '../models';
import { KeyboardEvent, useMemo, useState } from 'react';

export const useSingleTodoAction = (todo: Todo, refetchTodos: () => void) => {
    const { id, fields } = todo;
    const { Text, Tags, Status } = fields;

    const [newTagText, setNewTagText] = useState<string>('');

    const ParsedTags: string[] = useMemo(() => JSON.parse(Tags) || [], [Tags]);

    const { mutate: onDelete, isLoading: onDeleteIsLoading } = useMutation((id: string) => deleteTodo(id));
    const { mutate: onPatch, isLoading: onPatchIsLoading } = useMutation((todo: PatchTodo) => patchTodo(todo));

    const handleAction = (action: Action, e?: KeyboardEvent<HTMLInputElement>) => {
        switch (action) {
            case 'DELETE':
                onDelete(id, {
                    onSuccess: () => {
                        refetchTodos();
                    },
                });
                break;

            case 'TOGGLE_STATUS':
                const patchTodo: PatchTodo = createPatchTodo(id, {
                    Text,
                    Tags,
                    Status: Status === 'Todo' ? 'Done' : 'Todo',
                });
                onPatch(patchTodo, {
                    onSuccess: () => {
                        refetchTodos();
                    },
                });
                break;

            case 'ADD_NEW_TAG':
                e?.stopPropagation();
                const trimmed = newTagText?.trim();
                if (e?.code === 'Enter' && trimmed && !ParsedTags.includes(trimmed)) {
                    const patchTodo: PatchTodo = createPatchTodo(id, {
                        Text,
                        Tags: JSON.stringify([...ParsedTags, newTagText.trim()]),
                        Status,
                    });
                    onPatch(patchTodo, {
                        onSuccess: () => {
                            setNewTagText('');
                            refetchTodos();
                        },
                    });
                }
                break;

            default:
                console.error('action is not implemented!');
        }
    };

    return {
        onDeleteIsLoading,
        onPatchIsLoading,
        newTagText,
        setNewTagText,
        ParsedTags,
        handleAction,
    };
};
