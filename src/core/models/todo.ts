export type Todos = Todo[];

export type Todo = {
    id: TodoId;
    createdTime: string;
    fields: {
        Status: 'Todo' | 'Done';
        Tags: string;
        Text: string;
    };
};

export type TodoId = `rec${string}`;

export type NewTodo = Omit<Todo, 'id' | 'createdTime'>;

export type PatchTodo = Omit<Todo, 'createdTime'>;

export type TodosResponse = { records: Todos };

export type Action = 'DELETE' | 'TOGGLE_STATUS' | 'ADD_NEW_TAG';
