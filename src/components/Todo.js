import React , {useState} from "react";


export default function Todo(props)
{
    const [isEditing,setEditing] = useState(false);
    const [newName,setNewName] = useState('');
    function handleChange(e) {
      console.log(e.target.value)
      setNewName(e.target.value);
    }
    function handleSubmit(e) {
      e.preventDefault();
      props.editTask(props.id,newName);
      setNewName("");
      setEditing(false)
    }
    const editingTemplate = (
      <form onSubmit={handleSubmit} className="stack-small">
        <div className="form-group">
          <label className="todo-label" htmlFor={props.id}>
            New name for {props.name}
          </label>
          <input onChange={handleChange} id={props.id} className="todo-text" type="text" />
        </div>
        <div className="btn-group">
          <button onClick={()=>setEditing(false)} type="button" className="btn todo-cancel">
            Cancel
            <span className="visually-hidden">renaming {props.name}</span>
          </button>
          <button type="submit" className="btn btn__primary todo-edit">
            Save
            <span className="visually-hidden">new name for {props.name}</span>
          </button>
        </div>
      </form>
    );
    const viewTemplate = (
      <div className="stack-small">
        <div className="c-cb">
            <input
              id={props.id}
              type="checkbox"
              defaultChecked={props.completed}
              onChange={() => props.toggleTaskCompleted(props.id)}
            />
            <label className="todo-label" htmlFor={props.id}>
              {props.name}
            </label>
          </div>
          <div className="btn-group">
            <button onClick={()=>setEditing(true)} type="button" className="btn">
              Edit <span className="visually-hidden">{props.name}</span>
            </button>
            <button
              type="button"
              className="btn btn__danger"
              onClick={() => props.deleteTask(props.id)}
            >
              Delete <span className="visually-hidden">{props.name}</span>
            </button>
          </div>
      </div>
    );
    
    return (
        <li className="todo" >
          {isEditing?editingTemplate:viewTemplate}
        </li>
    )

}