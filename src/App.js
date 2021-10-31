import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import RideDetail from "./Pages/RideDetail/RideDetail";
import MyBookings from "./Pages/MyBookings/MyBookings";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import AuthProvider from "./context/AuthProvider";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <PrivateRoute exact path="/rideDetail/:rideId">
                        <RideDetail />
                    </PrivateRoute>
                    <PrivateRoute path="/manageMyBookings">
                        <MyBookings />
                    </PrivateRoute>
                </Switch>
                <Footer />
            </Router>
        </AuthProvider>
    );
}

export default App;
