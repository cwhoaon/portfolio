import './Item.css'

export default function Item(props) {

    const project = props.project
    return <>
        <div id='item'>
            <h3>{project.name}</h3>
            <h4>{project.type}</h4>
            <ul>{project.tools.map(e => <li>{e}</li>)}</ul>
            <div id='paragraph'>
                <p>{project.desc}</p>
            </div>
        </div>
    </>
}