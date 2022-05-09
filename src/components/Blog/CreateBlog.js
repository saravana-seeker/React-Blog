import { useState } from "react";
import "./CreateBlog.css"
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
    const [title,setTitle] = useState()
    const [body,setBody] = useState()
    const [author,setAuthor] = useState('saravana')
    const history = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title,body,author}
        fetch("http://localhost:8000/blog",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(blog)
        }).then((res) => {
            if(!res.ok){
                throw Error
            }
            else{
                console.log("blog added")
                history('/')
            }
            
        }).catch((error) => {
            console.log(error)
        })
    }

    return(
        <div className="Create-blog">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 col-md-6">
                        <img src="https://img.freepik.com/free-vector/online-article-concept-illustration_114360-5321.jpg?t=st=1652004234~exp=1652004834~hmac=a5794e32ea1743d5a0c238581f66a1e7859a20f3180ad90e31ef7328c6846dc1&w=740" alt="" srcSet=""  className="img-fluid"/>
                    </div>
                    <div className="col-12 col-lg-6 col-md-6 Blog-add">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="article"> Article Name:</label><br />
                            <input type="text"  className="form-control" placeholder="Enter Article Title" required value={title} onChange={(e) => setTitle(e.target.value)}/><br />
                            <label htmlFor="Article body">Article Body:</label>
                            <textarea className="form-control" placeholder="Enter the article " rows="3" required value={body} onChange={(e) => setBody(e.target.value)}></textarea><br />
                            <label htmlFor="Select the author"> Select the author</label>
                            <select className="form-select" value={author} onChange={(e) => setAuthor(e.target.value)}>
                                <option value="saravana">saravana</option>
                                <option value="kumar">Kumar</option>
                            </select><br />
                            <button  className="btn btn-primary" type="submit">Add a Blog</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateBlog;