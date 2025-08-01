import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [type, setType] = useState('');

  return (
    <SideBarContext.Provider value={{ isOpen, setOpen, type, setType }}>
      {children}
    </SideBarContext.Provider>
  );
};
