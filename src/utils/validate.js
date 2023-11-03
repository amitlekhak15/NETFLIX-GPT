export const checkValidate=(email,password)=>{
    const isEmailValid=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    // eslint-disable-next-line
    const isPasswordValid=/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/.test(password);
    
    if(!isEmailValid) return "Email Id is not Valid"
    if(isPasswordValid)return "Password is not valid"
    return null

}