import { PatchTodo, Todo, TodoId } from './../../core/models/todo';
import { NewTodo } from '../../core/models';

export const createNewTodo = (text: string): NewTodo => {
    return {
        fields: {
            Text: text,
            Tags: JSON.stringify([]),
            Status: 'Todo',
        },
    };
};

export const createPatchTodo = (id: TodoId, fields: Todo['fields']): PatchTodo => {
    const { Text, Tags, Status } = fields;
    return { id, fields: { Text, Tags, Status } };
};
