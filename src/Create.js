import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    //uses controlled form, data is handled by react instead of DOM
    //blog title state
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('yoshi');
    const [isPending , setPending] = useState(false);
    const history = useHistory();

    //submit handler
    const handleSubmit = (e)=>{
        e.preventDefault()

        //set loading state 
        setPending(true)

        const newBlog = {
            title,
            body,
            author
        }

        fetch('http://localhost:8000/blogs' , {
            method : 'POST',
            headers : {'Content-Type' : "application/json" },
            body : JSON.stringify(newBlog)
        }).then((res)=>{
            
            //set pending state
            setPending(false)

            console.log("Blog created")
           // history.go(-1) //go back and forth in time

           //redirects page
           history.push('/')
        } 
        )
    }

    return (  
        <div className = "create">
            <h2>Create a new blog</h2>
            <form onSubmit = {handleSubmit}>
                <label>Blog title</label>
                <input
                type = "text"
                requried = "true"
                value = {title} //set default value using state
                onChange = {(e) =>{
                    setTitle(e.target.value)
                }} //on iput change, change the declared state
                ></input>

                <label>Blog body</label>
                <textarea
                requried = "true"
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
                
                {!isPending && <button> Submit </button>}
                
            </form>

            {/*conditional rendering for pending state*/}
            {isPending && <p>Creating blog...</p>}

        </div>
    );
}
 
export default Create;