import { createEffect } from "effector";
import { TaskDto } from "./type";

export const createTaskFx = createEffect<void, TaskDto>(async () => {
    return new Promise(res => setTimeout(() => {
        res({
            id: 7,
            title: "last task",
            description: "my description",
            type: "inbox",
            status: "INPROGRESS",
            start_date: null,
            user_id: 1
        })
    },500))
})