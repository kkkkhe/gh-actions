import { createEvent, createStore, sample } from "effector";
import { changeTodayStatusFx } from "../shared/api/change-today-status";
import { Strategy } from "./type";

// export class TodayClass implements Strategy {
//     changeStatus(data: any):void{
//         const d = changeTodayStatus()
//         console.log(d)
//     }
// }


type Task = {
    title: string;
    description: string;
    status: 'done' | 'canceled'
}

export const inboxStrategy = (): Strategy => {
    const changeStatusTriggered = createEvent<{status: 'done' | 'canceled'}>()
    const $data  = createStore<Task | null>(null)
    sample({
        clock: changeStatusTriggered,
        target: changeTodayStatusFx
    })

    sample({
        clock: changeTodayStatusFx.doneData,
        target: $data
    })

    return {
        changeStatusTriggered,
        changeStatusFx: changeTodayStatusFx,
        $data
    }
}
