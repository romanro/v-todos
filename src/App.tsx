import React, { useCallback, useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { getTodos } from './core/api';

import { TodosList } from './ui/components/TodosList/TodosList';
import { FiltersHeader } from './ui/components/FiltersHeader/FiltersHeader';
import { CreateTodoFooter } from './ui/components/CreateTodoFooter/CreateTodoFooter';
import { Todos } from './core/models';
import { Preloader } from './common/components/Preloader';

function App() {
    const [todos, setTodos] = useState<Todos>([]);

    const { mutate, isLoading } = useMutation(getTodos);

    useEffect(() => {
        mutateTodos();
    }, [todos.length]);

    const mutateTodos = useCallback(
        () =>
            mutate(void 0, {
                onSuccess: (resp) => {
                    setTodos(resp?.records || []);
                },
            }),
        [todos.length]
    );

    const refetchTodos = () => {
        mutateTodos();
    };

    return (
        <div className='App'>
            {isLoading && <Preloader />}
            <FiltersHeader />
            <TodosList todos={todos} refetchTodos={refetchTodos} />
            <CreateTodoFooter refetchTodos={refetchTodos} />
        </div>
    );
}

export default App;
