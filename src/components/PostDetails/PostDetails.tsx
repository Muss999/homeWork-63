import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosApi from "../../axiosApi";
import type { TypePost } from "../../helpers/types";
import { formatDate } from "../../helpers/functions";
import Spinner from "../Spinner/Spinner";

const PostDetails = () => {
    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [postDetails, setPostDetails] = useState<TypePost>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axiosApi.get(`/posts/${params.id}.json`);
                if (data) {
                    setPostDetails(data);
                } else {
                    setError(true);
                }
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
    if (!postDetails) {
        return <p>Поста нет</p>;
    }

    const formattedDate = formatDate(postDetails.date);

    return (
        <div className="card Post-card bg-body-tertiary">
            <div className="card-body">
                <h5 className="card-title">{postDetails.name}</h5>
                <p className="card-text">{postDetails.description}</p>
                <div className="Post__bottom">
                    <p className="m-0">{formattedDate}</p>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;
