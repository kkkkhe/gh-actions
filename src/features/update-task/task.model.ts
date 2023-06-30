import { combine, createEvent, createStore, sample } from "effector"
import { updateTaskFx } from "../../shared/api/update"
import { $taskKv } from "../../entities/task/task.model"

export const updateTaskFactory = () => {
  const titleChanged = createEvent<string>()
  const updateTaskTriggered = createEvent()
  const taskUpdated = createEvent()
  const notupdatedTriggered = createEvent()


  const $activeId = createStore<number | null>(null)
  $activeId.watch(s=>console.log(s))
  const $title = createStore('')
  const $isDirty = createStore(false)
  const $isAllowToSubmit = combine($isDirty, $title, (isDirty, title) => !!isDirty && Boolean(title.length))
  $isDirty.watch(s => console.log(s))
  sample({
    clock: titleChanged,
    target: $title
  })

  sample({
    clock: titleChanged,
    fn: () => true,
    target: $isDirty
  })
type Test = {
  kv: any,
  title: string,
  id: number | null,
  isAllowToSubmit: boolean
}
type Output = {
  kv: any,
  title: string,
  id: number,
  isAllowToSubmit: boolean
}
  sample({
    clock: updateTaskTriggered,
    source: {kv: $taskKv, title: $title, id: $activeId, isAllowToSubmit: $isAllowToSubmit},
    filter: (props:Test): props is Output => Boolean(props.id) && props.isAllowToSubmit,
    fn: ({kv, title, id}) => ({...kv[id], title}),
    target: updateTaskFx
  })
  sample({
    clock: updateTaskTriggered,
    source: {id: $activeId, isAllowToSubmit: $isAllowToSubmit},
    filter: ({id, isAllowToSubmit}) => Boolean(id) && !isAllowToSubmit,
    target: [notupdatedTriggered, $activeId.reinit]
  })
  notupdatedTriggered.watch(() => console.log('trigger'))
  sample({
    clock: updateTaskFx.doneData,
    source: $taskKv,
    fn: (kv, d) => ({...kv, [d.id]: d}),
    target: [$taskKv, taskUpdated, $activeId.reinit]
  })

  return {
    titleChanged,
    updateTaskTriggered,
    taskUpdated,
    notupdatedTriggered,
    $title,
    $activeId
  }
}
export type UpdatedTaskType = ReturnType<typeof updateTaskFactory>