import { Fragment, PropsWithChildren } from "react"
import { getTasksFx } from "./shared/api/get"
import { $tasks, expandTaskModel, updateTaskModel } from "./model"
import { useUnit } from "effector-react"
import { Task } from "./shared/ui/task"
import { UpdateTaskForm } from "./features/update-task/ui"


getTasksFx()

function App() {
	const [
		tasks,
		updatedTask,
		updateTaskTriggered,
		createTaskTriggered
	] = useUnit([
		$tasks,
		expandTaskModel.$updatedTask,
		expandTaskModel.updateTaskTriggered,
		expandTaskModel.createTaskTriggered
	])
	return (
		<div className="h-screen bg-[#23242b] p-5 grid grid-rows-[1fr_50px]">
			<div>
				{tasks.map((item) => {
					return (
						<Fragment key={item.id}>
							{updatedTask == item.id ?
							<TaskWrapper>
								<UpdateTaskForm model={updateTaskModel}/>
							</TaskWrapper>	
							: <Task task={item} onDoubleClick={() => updateTaskTriggered(item)}/>
						}
						</Fragment>
					)
				})}
			</div>
			<span>
				<button onClick={() => createTaskTriggered()} className="text-[#07afc8] hover:bg-[#394a61] p-1 rounded-[5px]">
					Create task
				</button>
			</span>
		</div>
	)
}

function TaskWrapper({children}: PropsWithChildren){
	return (
		<div className='p-2 bg-blue-400 text-white rounded-[5px]'>
			{children}
		</div>
	)
}


export default App
