import { Link } from "react-router-dom";

const Bloglist = ({blog}) => {
    return(
        <div className="row ">
          {blog.map((blogs) => (
            <div className="col-lg-4 col-md-4 col-6"  key={blogs.id}>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">{blogs.title}</h4>
                  
                  <p className="text-muted">Written By ~ {blogs.author}</p>
                  <Link to={`/blog/${blogs.id}`}><button className="btn btn-primary">Show</button></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
    )
}

export default Bloglist;