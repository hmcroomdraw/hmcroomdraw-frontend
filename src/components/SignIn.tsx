import {useState} from "react";


function SignIn(props: any) {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
     return (
        <div>
            <div className={"container"}>
                <h2>Sign In</h2>
                <label htmlFor={"username"}>User Name:</label>
                <input type={"text"} className={"username"} value={user} onChange={(e) => setUser(e.currentTarget.value)}/>
                <br/>
                <label htmlFor={"password"}>Password:</label>
                <input type={"password"} className={"password"} value={password} onChange={(e) => setPassword(e.currentTarget.value)}/>
                <br/>
                <input type={"submit"} value={"Sign In"}
                onClick={() => {
                    props.onClick(user);
                    setUser('');
                    setPassword('');
                }}/>
            </div>
        </div>
    )
}

export default SignIn;