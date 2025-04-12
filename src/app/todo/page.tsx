"use client";

import { useEffect, useState } from "react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch todos");
        }
        const data = await response.json();
        setTodos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Todo List
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="px-6 py-8">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium w-24">
                      User ID:
                    </span>
                    <span className="text-gray-900">{todo.userId}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium w-24">
                      Todo ID:
                    </span>
                    <span className="text-gray-900">{todo.id}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-600 font-medium w-24">
                      Title:
                    </span>
                    <span className="text-gray-900 flex-1">{todo.title}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium w-24">
                      Status:
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-sm font-medium ${
                        todo.completed
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {todo.completed ? "Completed" : "Pending"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
