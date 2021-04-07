import { useState } from "react";

const Create = () => {
    //uses controlled form, data is handled by react instead of DOM
    //blog title state
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [author, setAuthor] = useState('yoshi');

    return (  
        <div className = "create">
            <h2>Create a new blog</h2>
            <form>
                <label>Blog title</label>
                <input
                type = "text"
                requried 
                value = {title} //set default value using state
                onChange = {(e) =>{
                    setTitle(e.target.value)
                }} //on iput change, change the declared state
                ></input>

                <label>Blog body</label>
                <textarea
                requried 
                value = {body} //set default value using state
                onChange = {(e) =>{
                    setBody(e.target.value)
                }} //on iput change, change the declared state
                ></textarea>

            <label>Blog author</label>
                <select
                value = {author} //set default value using state
                onChange = {(e) =>{
                    setAuthor(e.target.value)
                }} //on iput change, change the declared state
                >
                    <option value = "mario">mario</option>
                    <option value = "yoshi">yoshi</option>

                </select>

                <button> Submit </button>
            </form>

            <p>{title}</p>
            <p>{body}</p>

        </div>
    );
}
 
export default Create;