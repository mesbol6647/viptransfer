// // import { useSelector } from "react-redux"
// // import { Navigate, Outlet } from "react-router-dom"

// // const PrivateRouter = () => {
// //   const {user} =useSelector((state)=>state.auth)

// //   return user ? <Outlet /> : <Navigate to="/" />
// // }

// // export default PrivateRouter


// import { Navigate, Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";

// const PrivateRouter = () => {
//   const { user } = useSelector((state) => state.auth);
//   // return user ? <Outlet /> : <Navigate to="/login" />;
//   return user ? <Outlet /> : <Navigate to="/login" replace />;
// };

// export default PrivateRouter;


import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRouter = () => {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRouter;