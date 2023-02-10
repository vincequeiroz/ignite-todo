import { fireEvent, render, screen, within } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import { TodoList } from './TodoList';

describe('TodoList', () => {
  beforeEach(() => {
    render(<TodoList />);
  });

  function addItemInTodoList({ message }: { message: string }) {
    fireEvent.change(screen.getByPlaceholderText('Adicione uma nova tarefa'), {
      target: { value: message },
    });
    fireEvent.click(screen.getByText('Criar'));
  }

  function expectTodoListToBeEmpty() {
    expect(
      screen.getByText('Você ainda não tem tarefas cadastradas')
    ).toBeInTheDocument();

    expect(
      screen.getByText('Crie tarefas e organize seus itens a fazer')
    ).toBeInTheDocument();

    const totalOfTodos = screen.getByText('Tarefas criadas');
    expect(totalOfTodos.lastChild?.textContent).toBe('0');

    const intervalOfTodosDoneMessage = screen.getByText('Concluídas');
    expect(intervalOfTodosDoneMessage.lastChild?.textContent).toBe('0');
  }

  function expectTotalOfTodosToBe(total: string) {
    const totalOfTodos = screen.getByText('Tarefas criadas');
    expect(totalOfTodos.lastChild?.textContent).toBe(total);
  }

  function expectIntervalOfTodosDoneMessageToBe(message: string) {
    let intervalOfTodosDoneMessage = screen.getByText('Concluídas');
    expect(intervalOfTodosDoneMessage.lastChild?.textContent).toBe(message);
  }

  it('has to be empty', expectTodoListToBeEmpty);

  it('should add tasks', () => {
    const todoMessage = 'Something to do!';
    addItemInTodoList({ message: todoMessage });

    const list = screen.getByRole('list');

    const { getAllByRole } = within(list);

    expect(getAllByRole('listitem').length).toBe(1);

    expect(screen.getByText(todoMessage)).toBeInTheDocument();

    expectTotalOfTodosToBe('1');
    expectIntervalOfTodosDoneMessageToBe('0 de 1');

    addItemInTodoList({ message: 'Something to do!' });
    expect(getAllByRole('listitem').length).toBe(2);

    expectTotalOfTodosToBe('2');
    expectIntervalOfTodosDoneMessageToBe('0 de 2');
  });

  it('should not allow add an empty task', () => {
    fireEvent.change(screen.getByPlaceholderText('Adicione uma nova tarefa'), {
      target: { value: '' },
    });
    const clickResult = fireEvent.click(screen.getByText('Criar'));

    expect(clickResult).toBeFalsy();
    expectTodoListToBeEmpty();
  });

  it('should remove a task', () => {
    addItemInTodoList({ message: 'Something to do!' });

    fireEvent.click(screen.getByTitle('Remover tarefa'));

    expectTodoListToBeEmpty();
  });

  it('should change a task as done', () => {
    addItemInTodoList({ message: 'Something to do!' });

    fireEvent.click(screen.getByTitle('Marcar tarefa como concluída'));

    expectTotalOfTodosToBe('1');
    expectIntervalOfTodosDoneMessageToBe('1 de 1');

    addItemInTodoList({ message: 'Something to do!' });
    addItemInTodoList({ message: 'Something to do!' });

    expectTotalOfTodosToBe('3');
    expectIntervalOfTodosDoneMessageToBe('1 de 3');

    const removeButtons = screen.getAllByTitle('Marcar tarefa como concluída');
    fireEvent.click(removeButtons[removeButtons.length - 1]);

    expectTotalOfTodosToBe('3');
    expectIntervalOfTodosDoneMessageToBe('2 de 3');
  });

  it('should show total of tasks', () => expectTotalOfTodosToBe('0'));

  it('should show the interval between all pending and completed tasks', () =>
    expectIntervalOfTodosDoneMessageToBe('0'));
});
