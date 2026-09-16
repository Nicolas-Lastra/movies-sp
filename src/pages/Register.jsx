export default function Register({ ref }) {

    return(
        <section ref={ref} className='auth-page'>
            <div className='card'>
                <form action="" className='form'>
                    <h1>Register</h1>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username"/>
                    <label htmlFor="username">Email</label>
                    <input type="email" id="email" name="email"/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password"/>
                    <button>Register</button>
                </form>
            </div>
        </section>
    )
}