import { PatchTodo, Todo, TodoId } from './../../core/models/todo';
import { NewTodo } from '../../core/models';
import { END_TAGS_SYMBOL, SUBTAG_SYMBOL } from '../../core/consts/tags.consts';

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

export const processTagString = (text: string): string =>
    text.trim().replaceAll(' ', SUBTAG_SYMBOL).replaceAll(',', SUBTAG_SYMBOL).replaceAll(END_TAGS_SYMBOL, '');
