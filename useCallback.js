import {useCallback,useMemo} from 'react';
import ChildComponent from './ChildComponent'
function Parent(){
const[num,setNum] = 0

const handleChangeHandler=useCallback(()=>{
  //called on every parent rendered
},[])

const optimisedComponent = useMemo(()=><ChildComponent handleChange={handleChangeHandler}>,[handleChangeHandler])


return{
<div>
{num}
{optimisedComponent}
<button onClick={()=>setNum(num+1)}>+</button>
</div>
}

}
export default Parent

export function ChildComponent(){
console.log("child component rendered")
return
<h1>hello</h1>

}
