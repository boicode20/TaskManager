import { useState } from "react";

export const useError = () => {
    const [error, setError] = useState(null);

    const handleError = (err) => {
        setError(err);
    };

    return { error, handleError }
}