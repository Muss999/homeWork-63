import { useEffect, useState } from "react";
import type { TypePost } from "../../helpers/types";
import axiosApi from "../../axiosApi";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const AddForm = () => {
    const navigate = useNavigate();
    const params = useParams();

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [addPost, setAddPost] = useState<TypePost>({
        name: "",
        description: "",
        date: "",
    });

    useEffect(() => {
        if (params.id) {
            const fetchData = async () => {
                try {
                    const { data } = await axiosApi.get(
                        `/posts/${params.id}.json`
                    );
                    if (data) {
                        setAddPost(data);
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
        } else {
            setAddPost({ name: "", description: "", date: "" });
            setError(false);
            setLoading(false);
        }
    }, [params.id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(false);

        const newPost = {
            name: addPost.name.trim(),
            description: addPost.description.trim(),
            date: new Date().toISOString(),
        };

        if (newPost.name.length === 0 || newPost.description.length === 0) {
            alert("Some inputs are empty");
            return;
        }

        setLoading(true);
        try {
            if (params.id) {
                await axiosApi.put(`/posts/${params.id}.json`, newPost);
            } else {
                await axiosApi.post("/posts.json", newPost);
            }
            navigate("/");
        } catch {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <Spinner />;
    }
    if (error) {
        return <p>Произошла ошибка</p>;
    }

    return (
        <>
            <h2>Форма поста</h2>
            <form className="container mt-4" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="postTitle" className="form-label">
                        Название поста
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="postTitle"
                        placeholder="Введите название"
                        value={addPost.name}
                        onChange={(e) =>
                            setAddPost({ ...addPost, name: e.target.value })
                        }
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="postDescription" className="form-label">
                        Описание
                    </label>
                    <textarea
                        className="form-control"
                        id="postDescription"
                        placeholder="Введите описание"
                        value={addPost.description}
                        onChange={(e) =>
                            setAddPost({
                                ...addPost,
                                description: e.target.value,
                            })
                        }
                        required
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-success">
                    {params.id ? "Сохранить изменения" : "Добавить пост"}
                </button>
            </form>
        </>
    );
};

export default AddForm;
