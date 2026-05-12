export const useSubmit = (user) =>{

    const handleLogin = async(e) =>{
        e.preventDefault();
        console.log('Logging in with:', user);
    }
    const handleRegister = async(e) => {
        e.preventDefault();
        console.log('Registering with:', user);
    }


    return {handleLogin, handleRegister}    

}