import { createEffect } from "effector";
import { TaskDto } from "./type";

const tasks = [
    {
        id: 1,
        title: "without date",
        description: "",
        type: "inbox",
        status: "INPROGRESS",
        start_date: null,
        user_id: 1
    },
    {
        id: 2,
        title: "dfsfasdf",
        description: "",
        type: "inbox",
        status: "INPROGRESS",
        start_date: null,
        user_id: 1
    },
    {
        id: 3,
        title: "enw task",
        description: "",
        type: "inbox",
        status: "FINISHED",
        start_date: null,
        user_id: 1
    },
    {
        id: 4,
        title: "asdfasdfasdf",
        description: "",
        type: "inbox",
        status: "FINISHED",
        start_date: null,
        user_id: 1
    },
    {
        id: 5,
        title: "asdfasdfsdf",
        description: "",
        type: "inbox",
        status: "INPROGRESS",
        start_date: null,
        user_id: 1
    },
    {
        id: 6,
        title: "asdfasdafdafsdafsdfasdf",
        description: "",
        type: "inbox",
        status: "INPROGRESS",
        start_date: null,
        user_id: 1
    }
]

export const getTasksFx = createEffect<void, TaskDto[]>(async () => {
    return await new Promise(res => res(tasks))
})