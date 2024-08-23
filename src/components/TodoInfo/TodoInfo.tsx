import React from 'react';
import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

interface TodoInfoProps {
  todo: Todo;
}

export const TodoInfo: React.FC<TodoInfoProps> = ({ todo }) => (
  <article
    key={todo.id}
    data-id={todo.id}
    className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <UserInfo user={todo.user} />
  </article>
);
