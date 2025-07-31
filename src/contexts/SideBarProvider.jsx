import { createContext, useState } from 'react';

export const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <SideBarContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </SideBarContext.Provider>
  );
};
