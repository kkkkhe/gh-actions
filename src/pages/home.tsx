import { useDispatch, useSelector } from "react-redux"
import { counterModel } from "./home.model"
import { store } from "../app"

export const Home = () => {
  console.log(store.getState())
  // console.log(counter)
  return (
    <div>
      {/* {counter} */}
      dfadfasdf
      {/* <button onClick={() => dispatch(counterModel.actions.increase(1))}>Click</button> */}
      {/* {counter} */}
    </div>
  )
}