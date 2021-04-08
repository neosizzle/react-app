import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

import useFetch from "./useFetch";

const BlogDetails = () => {



    const { id } = useParams()//grab route parameters
    const {data , isPending, error} = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory();

    const handleDelete = ()=>{
        //fetch request to delete blog from db
    
        fetch('http://localhost:8000/blogs/' + id , {
            method : 'DELETE'
        }).then(
            history.push('/')
        )
    }

    return ( 
        <div className = "blog-details">

             {/*conditional rendering*/}

            {isPending && <h1>loading...</h1>}
            {error && <h1>{error}</h1>}
            {data && 
            
            <article>
            <h2>{data.title}</h2>
            <div>
                <p>
                   Written by: {data.author}
                </p>

                <div>
                    {data.body}
                </div>
            </div>
            <button  onClick = {handleDelete}> Delete Blog </button>
            </article>

            }

        </div>
     );
}
 
export default BlogDetails;