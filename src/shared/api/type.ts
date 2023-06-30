export type TaskDto = {
    id: number,
    title: string,
    description: string,
    type: string,
    status: string,
    start_date: Date | null,
    user_id: number
}
