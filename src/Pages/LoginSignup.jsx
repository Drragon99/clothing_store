import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Зарегистрироваться</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Имя' />
          <input type="email" placeholder='Email' />
          <input type="text" placeholder='Пароль' />
        </div>
        <button>Продолжить </button>
        <p className='loginsignup-login'> уже есть аккаунт ? <span>войти</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>я принимаю условия пользовательского соглашения</p>
        </div>
      </div>

    </div>
  )
}
