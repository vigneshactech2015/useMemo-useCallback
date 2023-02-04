//usememo returns a memoized value
//if there is no function passed as props to child component then it is best usecase
//if function is passed as props to child component then use usecallback

import {useMemo} from 'react';
import ChildComponent from './ChildComponent'
function Parent(){
const[num,setNum] = 0

const optimisedComponent = useMemo(()=><ChildComponent/>,[])


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
