import { Fragment, PropsWithChildren } from "react"
import { getTasksFx } from "./shared/api/get"
import { $tasks, expandTaskModel, updateTaskModel } from "./model"
import { useUnit } from "effector-react"
import { Task } from "./shared/ui/task"
import { UpdateTaskForm } from "./features/update-task/ui"
import { Provider } from 'react-redux'
import { Home } from "./pages/home"
import { store } from "./app"

getTasksFx()

function App() {

	return (
		<Provider store={store}>
			<Home/>
		</Provider>
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
