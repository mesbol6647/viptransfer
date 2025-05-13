import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRouter from "./router/AppRouter";
import { blueGrey, red } from "@mui/material/colors";
import { Provider } from "react-redux";
import store, { persistor } from "./app/store";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { SearchContextProvider } from "./context/SearchProvider";
import { PriceProvider } from "./context/PriceContext"; 
import FloatingButtons from "./components/FloatingButtons";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: red["700"],
      },
      secondary: {
        main: blueGrey["900"],
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
             <PriceProvider>
          <SearchContextProvider> 
          <AppRouter />
          <FloatingButtons />
                 <ToastContainer />
           </SearchContextProvider> 
          </PriceProvider>         
          </PersistGate>
        </Provider>
        <ToastContainer />
     </ThemeProvider>
     </>
  );
}

export default App;


