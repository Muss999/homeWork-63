import { useEffect, useState } from "react";
import type { TypePostsList } from "../../helpers/types";
import axiosApi from "../../axiosApi";
import Post from "../Post/Post";
import "./Home.css";

const Home = () => {
    const [posts, setPosts] = useState<TypePostsList>();

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axiosApi.get("/posts.json");
            setPosts(data);
            // console.log(data);
        };
        fetchData();
    }, []);

    const postsArr = [];
    for (const post in posts) {
        postsArr.push(posts[post]);
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
