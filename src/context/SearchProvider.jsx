import React, { createContext, useReducer } from "react";

const INITIAL_STATE = {
  startDate: "",
  endDate: ""
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return { ...state, ...action.payload };
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  return (
    <SearchContext.Provider
      value={{
        startDate: state.startDate,
        endDate: state.endDate,
        setStartDate: (date) => dispatch({ type: "NEW_SEARCH", payload: { startDate: date } }),
        setEndDate: (date) => dispatch({ type: "NEW_SEARCH", payload: { endDate: date } }),
        resetSearch: () => dispatch({ type: "RESET_SEARCH" })
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
