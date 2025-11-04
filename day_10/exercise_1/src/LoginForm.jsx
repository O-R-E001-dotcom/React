import { useRef, useState, useEffect } from "react";

function LoginForm() {
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //To auto-focus email input on mount
  useEffect(() => {
    emailRef.current.focus()
  }, []);

  function handleLogin(e) {
    e.preventDefault();
  }

  function handleClear() {
    setEmail("");
    setPassword("");
    emailRef.current.focus();
  }

  function handleOnEnter(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      passRef.current.focus();
    }
  }

  return (
    <div>
      <h2>Login Form</h2>

      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input ref={emailRef} 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleOnEnter}/>

        <label htmlFor="password">Password:</label>
        <input type="password"
            ref={passRef}
            value={password}
            onChange={(e) => setPassword(e.target.value)} />

        <div>
            <button type="submit">Login</button>
            <button onClick={handleClear}>Clear</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
