import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


export type NavigatorType = {
  anime: boolean,
  manga: boolean,
  search: boolean,
  library: boolean,
  profile: boolean
}

export type NavigatorContextType = {
  isHidden: boolean,
  setHidden: Dispatch<SetStateAction<boolean>>
  isNavigator: NavigatorType
  setNavigator: Dispatch<SetStateAction<NavigatorType>>
}

export const NavigatorContext = createContext<NavigatorContextType>({
  isNavigator: {
    anime: true,
    manga: false,
    search: false,
    library: false,
    profile: false
  },
  setNavigator: () => { },
  isHidden: false,
  setHidden: () => { }
})

export function NavigatorProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isNavigator, setNavigator] = useState<NavigatorType>({
    anime: true,
    manga: false,
    library: false,
    profile: false,
    search: false
  });
  const [isHidden, setHidden] = useState<boolean>(false)
  useEffect(() => {
    const path = location.pathname.split("/")[1];
    setNavigator({
      anime: path === "anime",
      manga: path === "manga",
      library: path === "library",
      profile: path === "profile",
      search: path === "search"
    })
  }, [location])
  return <NavigatorContext.Provider value={{ isNavigator, setNavigator, isHidden, setHidden }}>
    {children}
  </NavigatorContext.Provider>
}