import { useSelector, useDispatch } from 'react-redux'
import counterSlice from './counterSlice'

export default function Counter() {

  const counter: any = useSelector((store: any) => store.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <h1>Counter</h1>

        <p>Current value: {counter.value}</p>
        <p>Last updated: {counter.lastUpdated}</p>
        
        <button onClick={() => dispatch(counterSlice.actions.increment())}>
          Increment
        </button>
        
        <button onClick={() => dispatch(counterSlice.actions.decrement())}>
          Decrement
        </button>

        <button onClick={() => {
          const actionObject = {type: 'incrementAsync'}                                
          dispatch(actionObject)
        }}>
          Increment asynchronously
        </button>

      </div>
    </div>
  )
}