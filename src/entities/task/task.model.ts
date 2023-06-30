import { createStore, sample } from "effector";
import { TaskDto } from "../../shared/api/type";
import { getTasksFx } from "../../shared/api/get";

export const $taskKv = createStore<Record<number, TaskDto>>({})

sample({
  clock: getTasksFx.doneData,
  source: $taskKv,
  fn: (kv, data) => data.reduce((acc, prev) => ({...acc, [prev.id]: prev}), {}),
  target: $taskKv
})
