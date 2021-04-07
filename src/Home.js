import BlogList from "./BlogList";
import useFetch from "./useFetch"

const Home = () => {


  //fetch data from db 
const {data , isPending, error} = useFetch('http://localhost:8000/blogs')


  // const handleDelete = (id)=>{

  //   const newBlocks = blogs.filter((blog)=>{
  //    return blog.id != id
  //   })

  //   setBlogs(newBlocks)
  // }



  return (
    <div className="home">
      {/*conditional rendering*/}

      {isPending && <h1>loading...</h1>}
      {error && <h1>{error}</h1>}

      <BlogList blogs={data} title="All Blogs"  />
      {/* <BlogList blogs={blogs.filter(blog => blog.author === 'mario')} title="Mario's Blogs"  handleDelete = {handleDelete} /> */}
    </div>
  );
}
 
export default Home;