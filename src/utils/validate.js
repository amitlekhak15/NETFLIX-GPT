export const checkValidate=(email,password)=>{
    const isEmailValid=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    // eslint-disable-next-line
    const isPasswordValid=/^((?=(.*[\d0-9\@\&#\$\?\%!\|(){}[\]]){2,})(?=(.*[a-zA-Z]){2,}).{8,})*$/.test(password);
    
    if(!isEmailValid) return "Email Id is not Valid"
    if(isPasswordValid)return "Password is not valid"
    return null

}