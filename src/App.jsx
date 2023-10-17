import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className=" w-full">
      {!loading ? (
        <div className=" bg-[#d7e3fc] flex flex-col items-center h-screen">
          <div className="flex-none w-full h-14">
            <Header />
          </div>

          <main className="grow h-3/5">
            <Outlet />
          </main>

          <div className="flex-none w-full items-end">
            <Footer />
          </div>
        </div>
      ) : (
        <div className="w-full bg-red-400"></div>
      )}
    </div>
  );
}

export default App;
