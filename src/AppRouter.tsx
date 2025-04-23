import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { TaskForm } from './tasks/pages/form';

// import TaskLayout from './tasks/layout/TaskLayout';
const TaskLayout = lazy(async () => import("./tasks/layout/TaskLayout"));

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/tasks">
                    <Route index element={
                        <Suspense fallback={
                            <div className="flex justify-center items-center h-screen">
                                <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
                            </div>
                        }>
                            <TaskLayout />
                        </Suspense>
                    } />
                    <Route path="/tasks/:taskId" element={<TaskForm />} />
                </Route>

                <Route path="/" element={<Navigate to="tasks" />} />
                <Route path="*" element={<Navigate to="tasks" />} />
            </Routes>
        </BrowserRouter>
    )
}