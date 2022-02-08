import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function SignIn({ setUsers }) {
    const navigate = useNavigate();
    function signIn(username, password) {
        fetch(`http://localhost:3000/users/${username}`)
            .then((resp) => resp.json())
            .then((users) => {
                if (users.password === password) {
                    navigate("/");
                    setUsers(users);
                }else{
                    console.log("nope")
                }
            });
    }
    return (
        <div className="sign-in">
            <h2>Sign In</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const formEl = e.target;
                    signIn(formEl.email.value, formEl.password.value);
                }}
            >
                <TextField
                    name="email"
                    type="email"
                    label="EMAIL ADDRESS"
                    variant="outlined"
                    required
                />
                <TextField
                    name="password"
                    type="password"
                    label="PASSWORD"
                    variant="outlined"
                    required
                />
                <Button type="submit" variant="contained">
                    Sign In
                </Button>
            </form>
        </div>
    );
}

export default SignIn;
