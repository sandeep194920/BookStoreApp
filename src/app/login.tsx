// INFO : This must be a client component as we are using redux
'use client'

import React, { useState } from 'react'
import { logIn, logOut, toggleModerator } from '@/redux/features/auth-slice'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '@/redux/store'

function Login() {
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()
  const { isAuth } = useAppSelector((state) => state.authReducer.value)

  const onClickLogin = () => {
    dispatch(logIn(username))
  }
  const onClickToggle = () => {
    dispatch(toggleModerator())
  }
  const onClickLogout = () => {
    dispatch(logOut())
  }

  return (
    <div>
      <input
        className="text-black"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <button onClick={onClickLogin}>Login</button>
      <br />
      <button onClick={onClickLogout}>Logout</button>
      <br />
      {isAuth && <button onClick={onClickToggle}>Toggle mode status</button>}
    </div>
  )
}

export default Login
