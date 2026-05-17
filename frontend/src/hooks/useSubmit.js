import { useFetchUserData } from "./useFetchUserData.js";

export const useSubmit = (user,setLoading) =>{
    const {error,userLogin} = useFetchUserData(user,setLoading)
    const handleLogin = async(e) =>{
        e.preventDefault();
        try{
            await userLogin()
        }catch(err){
            console.log(err)
        }
    }
    const handleRegister = async(e) => {
        e.preventDefault();
        console.log('Registering with:', user);
    }


    return {handleLogin, handleRegister}    

}