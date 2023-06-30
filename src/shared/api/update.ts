import { createEffect } from "effector";
import { TaskDto } from "./type";

export const updateTaskFx = createEffect<TaskDto, TaskDto>(async (task: TaskDto) => {
    return new Promise(res => setTimeout(() => {
        res(task)
    }, 500))
})