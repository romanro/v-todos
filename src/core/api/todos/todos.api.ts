import { NewTodo, PatchTodo, TodosResponse } from '../../models';
import API from '../api';

export const getTodos = (): Promise<TodosResponse> => API.get({});

export const postNewTodo = (todo: NewTodo): Promise<TodosResponse> => API.post({ body: { records: [todo] } });

export const deleteTodo = (id: string): Promise<TodosResponse> => API.delete({ id });

export const patchTodo = (todo: PatchTodo): Promise<TodosResponse> => API.patch({ body: { records: [todo] } });
