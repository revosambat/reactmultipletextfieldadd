import React, { createContext } from "react";

export const DetailContext = createContext();

export default function DetailProvider({ children }) {

  return (
    <DetailContext.Provider>
      {children}
    </DetailContext.Provider>
  );
}
