import { useEffect, useRef, useState } from 'react';
import { processTagString } from '../../ui/utils/todo.utils';
import { END_TAGS_SYMBOL, SUBTAG_SYMBOL } from '../consts/tags.consts';
import { Todos } from '../models';

export const useTagFilters = (todos: Todos) => {
    const [filteredTodos, setFilteredTodos] = useState<Todos>(todos);
    const [searchText, setSearchText] = useState<string>('');

    useEffect(() => {
        setSearchText('');
        setFilteredTodos([...todos]);
    }, [JSON.stringify(todos)]);

    const reference = useRef<Todos>();
    reference.current = todos;

    const filterTodos = async (text: string) => {
        const searchString = processTagString(text);
        setSearchText(text);

        if (searchString) {
            const filtered = reference?.current?.filter((todo) => {
                const tagsStrings: string[] = JSON.parse(todo.fields.Tags);
                return tagsStrings.some(
                    (tag) =>
                        tag.startsWith(`${searchString}${SUBTAG_SYMBOL}`) ||
                        tag.startsWith(`${searchString}${END_TAGS_SYMBOL}`)
                );
            });

            setFilteredTodos([...(filtered || [])]);
        } else {
            setFilteredTodos([...(reference?.current || [])]);
        }
    };

    return { filteredTodos, filterTodos, searchText };
};
