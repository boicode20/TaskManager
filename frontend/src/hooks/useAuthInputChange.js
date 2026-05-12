export const useAuthInputChange = (setUser) => {
     const handleChange = (e) => {
    const { name, value } = e.target;
        setUser(prevUser => ({
        ...prevUser,
        [name]: value
        }));
    }
    return { handleChange };
}