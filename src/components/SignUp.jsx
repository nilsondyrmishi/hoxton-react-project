import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function SignUp({ setUsers }) {
    const navigate = useNavigate();
    function createNewUserOnServer(users) {
        fetch("http://localhost:3000/users/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(users)
        });
    }
    function signUp(e) {
        e.preventDefault();
        const formEl = e.target;
        const users = {
            id: formEl.email.value,
            password: formEl.password.value,
            firstName: formEl.firstName.value,
            lastName: formEl.lastName.value,
            address: formEl.address.value,
            bucket: []
        };
        formEl.reset();
        fetch(`http://localhost:3000/users/${users.id}`).then((resp) => {
            if (!resp.ok) {
                navigate("/");
                setUsers(users);
                createNewUserOnServer(users);
            }
        });
    }
    return (
        <div className="sign-up">
            <h2>Sign Up</h2>
            <form onSubmit={signUp}>
                <TextField
                    name="firstName"
                    type="text"
                    label="FIRST NAME"
                    variant="outlined"
                    required
                />
                <TextField
                    name="lastName"
                    type="text"
                    label="LAST NAME"
                    variant="outlined"
                    required
                />
                <TextField
                    name="address"
                    type="text"
                    label="ADDRESS"
                    variant="outlined"
                    required
                />
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
                    Sign Up
                </Button>
            </form>
        </div>
    );
}

export default SignUp;
