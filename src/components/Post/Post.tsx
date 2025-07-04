import { Link } from "react-router-dom";
import type { TypePostMutation } from "../../helpers/types";
import "./Post.css";
import { formatDate } from "../../helpers/functions";

interface Props {
    post: TypePostMutation;
}

const Post = ({ post }: Props) => {
    const formattedDate = formatDate(post.date);

    return (
        <div className="card Post-card bg-body-tertiary">
            <div className="card-body">
                <h5 className="card-title">{post.name}</h5>
                <div className="Post__bottom">
                    <Link to={"/posts/" + post.id}>Read more</Link>
                    <p className="m-0">{formattedDate}</p>
                </div>
            </div>
        </div>
    );
};

export default Post;
