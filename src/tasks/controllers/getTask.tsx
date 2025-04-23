import { Task } from "../components/columns";
import { getData } from "./getData";

export async function getTask(id: string): Promise<Task | null> {
    const data = await getData();

    const task = data.find((task) => task.id === id);

    if (!task) return null;

    return task;
}