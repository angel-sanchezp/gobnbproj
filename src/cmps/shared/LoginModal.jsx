
export function LoginModal () {
    return (
        <template>
            <section className="login-signup">
                <section className="login-modal">
                    <div>
                        <h3>Login</h3>
                    </div>
                    <div>
                        <form action="">
                            <div className="login">
                            <input 
                            type="text"
                            placeholder="Enter username" />
                            </div>
                            <div className="login">
                            <input type="text"
                            placeholder="Enter password" />
                            </div>
                            {/* onClick will submit inputs */}
                            <button><span>Continue</span></button>
                            <div>
                                <h4>Don't have and account? <button><span>Signup!</span></button></h4>
                                {/* on button click- puts login on hidden & removed signup from hidden */}
                            </div>
                        </form>
                    </div>
                </section>
                <section className="signup-modal hidden">
                    <div>
                        <h3>signup</h3>
                    </div>
                    <div>
                        <form action="">
                            <div className="signup">
                            <input 
                            type="text"
                            placeholder="Enter full name" />
                            </div>
                            <div className="signup">
                            <input 
                            type="text"
                            placeholder="Enter username" />
                            </div>
                            <div className="signup">
                            <input type="text"
                            placeholder="Enter email" />
                            </div>
                            <div className="signup">
                            <input type="text"
                            placeholder="Enter password" />
                            </div>
                            {/* onClick will submit inputs */}
                            <button><span>Continue</span></button>
                            <div>
                                <h4>Already have an account? <button><span>Login!</span></button></h4>
                                {/* on button click- puts signup on hidden & removed login from hidden */}
                            </div>
                        </form>
                    </div>
                </section>
            </section>
        </template>
    )
}