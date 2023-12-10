import React from 'react'

import './NewsLetter.css'

export const NewLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Получайте эксклюзивные предложения по почте</h1>
        <p>подписаться на рассылку</p>
        <div>
            <input type="email" placeholder='ваш Email' />
            <button> подписаться</button>
        </div>

    </div>
  )
}
