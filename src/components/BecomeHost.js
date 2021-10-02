import React from 'react'
import { Link } from 'react-router-dom'
import './BecomeHost.css'

function BecomeHost() {
    return (
        <section className='becomeHostContainer'>
            <a href='https://google.com'>
                <article className='becomeHost'>
                    <div className='becomeHostInfo'>
                        <h2 className='MT1'>Become a Host</h2>
                        <p className='MT1 MB3 subtitle textWhite'>
                            Earn extra income and unlock new opportunities by
                            sharing your space.
                        </p>
                        <a href='https:google.com'>
                            <button type='button' className='btn btnWhite'>
                                Learn more
                            </button>
                        </a>
                    </div>
                </article>
            </a>
            <div className="hosting">
                <Link className="tryHosting " to="/login">Try Hosting</Link>
            </div>
        </section>
    )
}

export default BecomeHost
