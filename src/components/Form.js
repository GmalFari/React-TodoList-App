import React, {useState} from  "react";

function Form(props) {
    const [name,setName] = useState('');
    function handelChange(e) {
        setName(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        if(name.length !== 0){
            props.addTask(name);
            setName("");
        }else {
            console.log("you must write any thing");
        
        }
            
    }
    return (
        
        <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          hjkhkjhfkjhk
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done? asfas
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="name"
          autoComplete="off"
          
          onChange={handelChange}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    )
}


export default Form;