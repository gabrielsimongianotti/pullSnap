import React, { createContext, useState } from 'react'
import { env } from '@/env'

interface IUser {
  repo: string
  name: string
  prUrl: string
}

interface IAppContext {
  user?: IUser
  updateUser(user: IUser): void
}

const AppContext = createContext<IAppContext>({
  user: { name: '????', repo: '????', prUrl: env.homeUrl },
  updateUser: () => {},
})

const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [data, setData] = useState<IUser>({
    name: '????',
    repo: '????',
    prUrl: env.homeUrl,
  })

  function updateUser(user: IUser) {
    setData(user)
  }

  return (
    <AppContext.Provider value={{ user: data, updateUser }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
