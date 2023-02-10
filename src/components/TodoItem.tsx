import * as Checkbox from '@radix-ui/react-checkbox';
import { Check, Trash } from 'phosphor-react';
import { TodoType } from './TodoList';

import styles from './TodoItem.module.css';

interface TodoItemProps {
  todo: TodoType;
  onRemoveTask(id: string): any;
  onDoneTask(todo: TodoType): any;
}

export function TodoItem({
  todo,
  onRemoveTask,
  onDoneTask: onDoneTask,
}: TodoItemProps) {
  function handleRemoveTask() {
    onRemoveTask(todo.id);
  }

  function handleConcludeTask() {
    todo.isDone = !todo.isDone;
    onDoneTask(todo);
  }

  return (
    <li className={styles.TodoItem}>
      <label
        htmlFor={todo.id}
        className={todo.isDone ? styles.TodoItemConcluded : ''}>
        {todo.content}
      </label>

      <Checkbox.Root
        className={styles.CheckboxRoot}
        id={todo.id}
        checked={todo.isDone}
        onClick={handleConcludeTask}
        title="Marcar tarefa como concluída">
        <Checkbox.Indicator className={styles.CheckboxIndicator}>
          <Check size={16} weight="bold" />
        </Checkbox.Indicator>
      </Checkbox.Root>

      <button
        className={styles.Trash}
        onClick={handleRemoveTask}
        title="Remover tarefa">
        <Trash size={18} />
      </button>
    </li>
  );
}
