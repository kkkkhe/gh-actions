import { useUnit } from "effector-react/effector-react.mjs"
import { UpdatedTaskType } from "./task.model"

export const UpdateTaskForm = ({model}: {model: UpdatedTaskType}) => {
    const [
        title,
        changeTitle
    ] = useUnit([
        model.$title,
        model.titleChanged
    ])
    return (
        <div>
            <input className="outline-none bg-transparent w-full" type="text" value={title} onChange={(e) => changeTitle(e.target.value)}/>
        </div>
    )
}