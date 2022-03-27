import React, { useCallback, useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { getTodos } from './core/api';
import { TodosList } from './ui/components/TodosList/TodosList';
import { FiltersHeader } from './ui/components/FiltersHeader/FiltersHeader';
import { CreateTodoFooter } from './ui/components/CreateTodoFooter/CreateTodoFooter';
import { Todos } from './core/models';
import { Preloader } from './common/components/Preloader';
import { useTagFilters } from './core/hooks';

function App() {
    const [todos, setTodos] = useState<Todos>([]);

    const { mutate, isLoading, isError } = useMutation(getTodos);

    const mutateTodos = useCallback(
        () =>
            mutate(void 0, {
                onSuccess: (resp) => {
                    setTodos(resp?.records || []);
                },
            }),
        [JSON.stringify(todos)]
    );

    useEffect(() => {
        mutateTodos();
    }, [JSON.stringify(todos)]);

    const refetchTodos = () => {
        mutateTodos();
    };

    const { filteredTodos, filterTodos, searchText } = useTagFilters(todos);

    return isError ? (
        <h1>Error loading TODOS</h1>
    ) : (
        <div className='App'>
            {isLoading && <Preloader />}
            <FiltersHeader initialText={searchText} onFilter={(text) => filterTodos(text)} />
            <TodosList todos={filteredTodos} refetchTodos={refetchTodos} />
            <CreateTodoFooter refetchTodos={refetchTodos} />
        </div>
    );
}

export default App;
