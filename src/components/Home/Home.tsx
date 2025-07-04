import { useEffect, useState } from "react";
import type { TypePostsList } from "../../helpers/types";
import axiosApi from "../../axiosApi";
import Post from "../Post/Post";
import "./Home.css";
import Spinner from "../Spinner/Spinner";

const Home = () => {
    const [posts, setPosts] = useState<TypePostsList>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axiosApi.get("/posts.json");
                setPosts(data);
            } catch {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <Spinner />;
    }
    if (error) {
        return <p>Произошла ошибка</p>;
    }
    if (!posts) {
        return <p>Постов нет</p>;
    }

    const postsArr = [];
    for (const post in posts) {
        const newPost = { ...posts[post], id: post };
        postsArr.push(newPost);
    }
    return (
        <div className="postsList">
            {postsArr.map((post, index) => {
                return <Post key={`${post.date}-${index}`} post={post} />;
            })}
        </div>
    );
};

export default Home;
