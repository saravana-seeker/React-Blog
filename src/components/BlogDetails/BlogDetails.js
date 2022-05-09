import "./BlogDetails.css";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { useNavigate } from "react-router-dom";

// it want to show title and body  and author and delete button

const BlogDetails = () => {
  const history = useNavigate();
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch(`http://127.0.0.1:8000/blog/${id}`);
  const handleSubmit = (e) => {
    fetch(`http://127.0.0.1:8000/blog/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => {
      console.log("Deleted");
      history("/");
    });
  };

  return (
    <div className="Blog-details">
      <div className="container">
        {error && <div>{error}</div>}
        {isPending && <div>{isPending}</div>}
        {blog && (
          <div className="Blog">
            <div className="card">
              <div className="card-header">
                <h3>{blog.title}</h3>
              </div>
              <div className="card-body text-start">
                <p>{blog.body}</p>
                <p className="text-mutted text-end"> ~ {blog.author}</p>
                <button
                  className="btn btn-danger"
                  type="submit"
                  onClick={handleSubmit}
                >
                  DELETE
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
