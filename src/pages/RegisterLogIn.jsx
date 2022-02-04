import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

function RegisterLogIn ({setUsers}){
    return(
        <main className="login">
            <SignIn setUsers={setUsers}/>
            <SignUp setUsers={setUsers}/>
        </main>
    )
}
export default RegisterLogIn
