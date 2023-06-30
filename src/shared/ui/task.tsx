import { TaskDto } from "../api/type"

export const Task = ({task, onDoubleClick}: {task: TaskDto, onDoubleClick: () => void}) => {
    return (
        <div>
            <button onDoubleClick={() => onDoubleClick()} className="p-1 rounded-[5px] text-left text-white hover:bg-[#394a61] w-full select-none">
                {task.title}
            </button>
        </div>
    )
}