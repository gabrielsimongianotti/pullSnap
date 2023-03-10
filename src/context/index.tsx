import React, { createContext, useState } from "react";

interface IUser {
  urlPullRequest: string;
  repo: string;
  imgUrl: string;
  nameDescription: string;
}

interface IAppContext {
  user?: IUser;
  updateUser(user: IUser): void;
}

const AppContext = createContext<IAppContext>({
  user: undefined,
  updateUser: () => {},
});

const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [data, setData] = useState<IUser>();

  function updateUser(user: IUser) {
    console.log("update called", user);
    setData(user);
  }

  return (
    <AppContext.Provider value={{ user: data, updateUser }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
