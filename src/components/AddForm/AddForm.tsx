import { useState } from "react";
import type { TypePost } from "../../helpers/types";
import axiosApi from "../../axiosApi";
import { useNavigate } from "react-router-dom";

const AddForm = () => {
    const navigate = useNavigate();

    const [addPost, setAddPost] = useState<TypePost>({
        name: "",
        description: "",
        date: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newPost = {
            name: addPost.name.trim(),
            description: addPost.description.trim(),
            date: new Date().toISOString(),
        };

        if (newPost.name.length === 0 || newPost.description.length === 0) {
            alert("Some inputs are empty");
            return;
        }

        try {
            await axiosApi.post("/posts.json", newPost);
        } finally {
            navigate("/");
        }
    };

    return (
        <>
            <h2>Форма создания поста</h2>
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
                    Добавить пост
                </button>
            </form>
        </>
    );
};

export default AddForm;
