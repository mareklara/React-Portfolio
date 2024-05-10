import { useState } from "react"

export const Todo = ({item, onUpdate, onDelete}) => {

    const [isEdit, setIsEdit] = useState(false)

    const FormEdit = () =>{

        const [newValue, setNewValue] = useState(item.title)

        const handleSubmit = (e) =>{
            e.preventDefault()
        }

    const handleChange = (e) =>{
        const value = e.target.value
        setNewValue(value)
    }

    const handleClick = () =>{
        onUpdate(item.id, newValue)
        setIsEdit(false)
    }
        return(
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={newValue} />
                <button className="bg-transparent hover:bg-amber-400 text-blue-700 font-semibold hover:text-white  px-2 border border-blue-500 hover:border-transparent rounded" onClick={handleClick}>Update</button>
            </form>
        )
    }

    const TodoElement = () =>{
        return(
        <div className="gap-11">
            {item.title} <button className="bg-transparent hover:bg-orange-400 text-blue-700 font-semibold hover:text-white  px-2 border border-blue-500 hover:border-transparent rounded" onClick={() => setIsEdit(true)} >edit</button>
            <button className="bg-transparent hover:bg-red-600 text-blue-700 font-semibold hover:text-white  px-2 border border-blue-500 hover:border-transparent rounded" onClick={(e) => onDelete(item.id)}>Delete</button>
        </div>
        )
    }

    return (
    <div className="todo">
        {isEdit ? <FormEdit/> : <TodoElement/>}
    </div>

      
  )}