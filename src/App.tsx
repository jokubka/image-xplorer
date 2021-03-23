import { Provider } from "react-redux";
import { store, persistor } from "./state";
import { ImageHero, ImageList } from "./components";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ImageHero />
                <ImageList />
            </PersistGate>
        </Provider>
    );
};

export default App;
