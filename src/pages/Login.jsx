export default function Login() {
    
    return (
        <>
            <div className="card">
                <h2>You need an account to post a movie.</h2>
                <form action="">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" placeholder=""/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password"/>
                </form>
            </div>
        </>
    )
}