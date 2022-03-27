export type Todos = Todo[];

export type Todo = {
    id: TodoId;
    createdTime: string;
    fields: {
        Status: 'Todo';
        Tags: string;
        Text: string;
    };
};

export type TodoId = `rec${string}`;

export type NewTodo = Omit<Todo, 'id' | 'createdTime'>;

export type TodosResponse = { records: Todos };

export type Action = 'DELETE';
