import React, { FC } from 'react';
import { DeleteButton, TextInput } from '../../../common/components';
import Checkbox from '../../../common/components/Checkbox';
import { useSingleTodoAction } from '../../../core/hooks';
import { Todo } from '../../../core/models/todo';
import { Tag, TagList, TodoWrapper } from './TodosList.styles';

export interface SingleTodoProps {
    todo: Todo;
    refetchTodos: () => void;
}

export const SingleTodo: FC<SingleTodoProps> = ({ todo, refetchTodos }) => {
    const { fields } = todo;
    const { Text, Status } = fields;

    const { onDeleteIsLoading, onPatchIsLoading, newTagText, setNewTagText, ParsedTags, handleAction } =
        useSingleTodoAction(todo, refetchTodos);

    return (
        <TodoWrapper>
            <div className='todoInfo'>
                <Checkbox
                    defaultChecked={Status === 'Done'}
                    onChange={() => handleAction('TOGGLE_STATUS')}
                    disabled={onPatchIsLoading}
                />
                <p>{Text}</p>
                <DeleteButton disabled={onDeleteIsLoading} onClick={() => handleAction('DELETE')} />
            </div>
            <div className='todoTags'>
                <TagList>
                    {ParsedTags.map((tag, index) => (
                        <Tag key={index}>{tag}</Tag>
                    ))}
                </TagList>
                <div className='inputWrapper'>
                    <TextInput
                        placeholder='add new tag'
                        value={newTagText}
                        disabled={onPatchIsLoading}
                        onKeyDown={(e) => handleAction('ADD_NEW_TAG', e)}
                        onChange={(e) => setNewTagText(e.target.value)}
                    />
                </div>
            </div>
        </TodoWrapper>
    );
};
