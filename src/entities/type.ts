import { Event, Store, Effect } from 'effector'

export type Task = {
    title: string;
    description: string;
    status: 'done' | 'canceled'
}
export interface Strategy {
    changeStatusTriggered: Event<{
        status: 'done' | 'canceled';
    }>
    changeStatusFx: Effect<Pick<Task, 'status'>, Task>,
    $data: Store<Task | null>
} 