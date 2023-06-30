

// export class InboxClass implements Strategy {
//     changeStatus(data: any):void{
//         const d = changeInboxStatus()
//         console.log(d)
//     }
//     changeFx = createEffect(() => {
//         return
//     })
// }

type Task = {
    title: string;
    description: string;
    status: 'done' | 'canceled'
}
// export const inboxStrategy = (): Strategy => {
//     const changeStatusTriggered = createEvent<{status: 'done' | 'canceled'}>()
//     const $data  = createStore<Task | null>(null)
//     sample({
//         clock: changeStatusTriggered,
//         target: changeInboxStatusFx
//     })

//     sample({
//         clock: changeInboxStatusFx.doneData,
//         target: $data
//     })

//     return {
//         changeStatusTriggered,
//         changeStatusFx: changeInboxStatusFx,
//         $data
//     }
// }


