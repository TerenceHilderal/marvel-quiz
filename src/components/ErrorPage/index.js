import React from 'react'
import Batman from'../../images/batman.png'

const ErrorPage = () => {
  return (
    <div className="quiz-bg">
      <div className="container">
        <h2>Oups, this page doesn't exist</h2>
        <img src={Batman} alt="errorpage"/>
      </div>
    </div>
  )
}

export default ErrorPage
