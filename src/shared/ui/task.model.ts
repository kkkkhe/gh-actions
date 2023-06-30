import { createEvent, createStore, sample } from 'effector';
import { TaskDto } from '../api/type';


export const taskFactory = () => {
  const createTaskTriggered = createEvent()
  const updateTaskTriggered = createEvent<TaskDto>()
  const closeTaskTriggered = createEvent()

  const $newTask = createStore(false)
  const $updatedTask = createStore<number | null>(null)
  const $isNewTask = createStore(false)


  sample({
    clock: createTaskTriggered,
    fn: () => true,
    target: $newTask
  })
  sample({
    clock: updateTaskTriggered,
    fn: (task) => task.id,
    target: $updatedTask
  })
  sample({
    clock: closeTaskTriggered,
    target: [$newTask.reinit, $updatedTask.reinit]
  })
  return {
    createTaskTriggered,
    updateTaskTriggered,
    closeTaskTriggered,
    $newTask,
    $updatedTask,
    $isNewTask
  }
}
