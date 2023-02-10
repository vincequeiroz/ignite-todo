import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoItem } from './TodoItem';
import styles from './TodoList.module.css';
import clipboard from '../assets/clipboard.png';

export type TodoType = {
  id: string;
  content: string;
  isDone: boolean;
};

export function TodoList() {
  const [todoInput, setTodoInput] = useState('');
  const [todoList, setTodoList] = useState<TodoType[]>([]);

  const totalOfTodos = todoList.length;
  const isTodoListEmpty = totalOfTodos === 0;

  function onChangeTodoInput(event: ChangeEvent<HTMLInputElement>) {
    setTodoInput(event.target.value);
  }

  function handleNewTask(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (todoInput === '') return;

    const todo: TodoType = {
      id: uuidv4(),
      content: todoInput,
      isDone: false,
    };

    setTodoList([...todoList, todo]);
    setTodoInput('');
  }

  function removeTask(idTodoToDelete: string) {
    const todoListWithoutDeteledOne = todoList.filter(todo => {
      return todo.id !== idTodoToDelete;
    });

    setTodoList(todoListWithoutDeteledOne);
  }

  function doneTask(todoToUpdate: TodoType) {
    const todoListWithUpdatedOne = todoList.map(todo => {
      if (todo.id === todoToUpdate.id) {
        return todoToUpdate;
      }

      return todo;
    });

    setTodoList(todoListWithUpdatedOne);
  }

  function getTotalTasksDone(): number {
    const filterList = todoList.filter(todo => todo.isDone);
    return filterList.length;
  }

  function getIntervalOfTotalTasksDoneMessage() {
    if (totalOfTodos === 0) {
      return 0;
    }

    return `${getTotalTasksDone()} de ${totalOfTodos}`;
  }

  return (
    <main className={styles.wrapper}>
      <form className={styles.form}>
        <input
          placeholder="Adicione uma nova tarefa"
          value={todoInput}
          onChange={onChangeTodoInput}
        />
        <button onClick={handleNewTask}>
          Criar
          <PlusCircle size={16} />
        </button>
      </form>

      <header className={styles.todosHeader}>
        <div>
          Tarefas criadas
          <span>{totalOfTodos}</span>
        </div>
        <div>
          Concluídas
          <span>{getIntervalOfTotalTasksDoneMessage()}</span>
        </div>
      </header>

      {isTodoListEmpty && (
        <div className={styles.todoEmpty}>
          <img src={clipboard} width={56} />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <br />
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      )}

      {!isTodoListEmpty && (
        <ul aria-label="Lista de Tarefas">
          {todoList.map(todo => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                onRemoveTask={removeTask}
                onDoneTask={doneTask}
              />
            );
          })}
        </ul>
      )}
    </main>
  );
}
