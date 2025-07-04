import type { TypePost } from "../../helpers/types";
import "./Post.css";

interface Props {
    post: TypePost;
}

const Post = ({ post }: Props) => {
    const isoDate = post.date;
    const date = new Date(isoDate);
    const formattedDate = date.toLocaleString("ru-RU");

    return (
        <div
            className="card Post-card bg-body-tertiary"
            style={{ width: "18ram" }}
        >
            <div className="card-body">
                <h5 className="card-title">{post.name}</h5>
                <p className="card-text">{post.description}</p>
                <div className="Post__bottom">
                    <a href="#" className="card-link">
                        More Details...
                    </a>
                    <p>{formattedDate}</p>
                </div>
            </div>
        </div>
    );
};

export default Post;
