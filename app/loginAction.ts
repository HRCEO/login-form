"use server"
export const handleLoginForm = async (prevState:any,formData:FormData) => {
    await new Promise((resolve)=> setTimeout(resolve, 3000));

    const passwordData = formData.get('password')

    if(passwordData !== '12345'){
        return {
            error:['wrong password']
        }
    }
    return 'OK'
}