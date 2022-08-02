import Item from '../component/Item'
import './Project.css'
import { Projects } from '../Constant'

export default function Project() {
    return <>
        <div id="container">
            <div className='column'>
                {Projects.filter((e, i) => i%2==0).map((e) => <Item className='item' project={e}></Item>)}
            </div>
            <div className='column'>
                {Projects.filter((e, i) => i%2==1).map((e) => <Item className='item' project={e}></Item>)}
            </div>
        </div>
    </>
}