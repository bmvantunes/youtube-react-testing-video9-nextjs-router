import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { BeautifulHeader } from '../../components/BeautifulHeader';
import { Todo } from '../../Todo';

export interface TodoProps {
  todo: Todo;
}

export default function TodoDetails({ todo }: TodoProps) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BeautifulHeader />

      <div>Todo Title: {todo.title}</div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<TodoProps> = async (context) => {
  const id = context.params?.id?.toString();

  const todoResponse = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  const todo = (await todoResponse.json()) as Todo;

  return { props: { todo }, revalidate: 20 };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allTodosResponse = await fetch(
    `https://jsonplaceholder.typicode.com/todos`
  );

  const allTodos = (await allTodosResponse.json()) as Todo[];
  const paths = allTodos.map((t) => ({ params: { id: t.id.toString() } }));

  return {
    fallback: true,
    paths: paths.slice(0, 5),
  };
};
