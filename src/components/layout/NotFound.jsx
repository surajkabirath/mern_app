import React from 'react'
import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <section className="not_found">
    <main className='not_found_details'>
      <div className='error_div'>
        <MdError />
        <h1>404</h1>
      </div>

      <p>Page not found, click below to go to home page.</p>
      <Link to="/">Go to Home</Link>
    </main>
  </section>
  )
}

export default NotFound;