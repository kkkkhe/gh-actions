import { combine, sample } from "effector";
import { $taskKv } from "./entities/task/task.model";
import { taskFactory } from "./shared/ui/task.model";
import { updateTaskFactory } from "./features/update-task/task.model";

export const $tasks = combine($taskKv, (kv) => {
    return Object.values(kv)
}) 


export const expandTaskModel = taskFactory()
export const updateTaskModel = updateTaskFactory()

sample({
    clock: expandTaskModel.createTaskTriggered,
    target: updateTaskModel.updateTaskTriggered
})


sample({
    clock: expandTaskModel.updateTaskTriggered,
    fn: (task) => task.title,
    target: updateTaskModel.$title
})
sample({
    clock: expandTaskModel.updateTaskTriggered,
    fn: (task) => task.id,
    target: updateTaskModel.$activeId
})
sample({
    clock: updateTaskModel.taskUpdated,
    target: [expandTaskModel.$updatedTask.reinit]
})
sample({
    clock: updateTaskModel.notupdatedTriggered,
    target: [expandTaskModel.$updatedTask.reinit]
})

//closeUpdateTaskWhen