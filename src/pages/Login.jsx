// import Avatar from "@mui/material/Avatar"
// import Container from "@mui/material/Container"
// import Grid from "@mui/material/Grid"
// import Typography from "@mui/material/Typography"
// import LockIcon from "@mui/icons-material/Lock"
// import image from "../../public/images/logo5.png"
// import { Link } from "react-router-dom"
// import Box from "@mui/material/Box"
// import TextField from "@mui/material/TextField"
// import { Button } from "@mui/material"
// import { Form, Formik } from "formik"
// import { object, string, number, date, InferType } from 'yup';


// import { useNavigate, useLocation } from "react-router-dom";

// import useAuthCalls from "../service/useAuthCalls"



// const Login = () => {
//    const {login}=useAuthCalls()

//    const navigate = useNavigate();
// const location = useLocation();
// const from = location.state?.from?.pathname || "/"; // hedef adres yoksa "/home"
  
//   const loginSchema = object({
    
//     email: string().email("Please enter a valid email ").required("Email is a required field"),
//     password: string()
//     .required("Password is a required field")
//     .min(8, "Şifre en az 8 karakter olmalıdır.")
//     .max(16, "Şifre en fazla 16 karakter olmalıdır.")
//     .matches(/\d+/, "Şifre en az bir rakam içermelidir")
//     .matches(/[a-z]/, "Şifre en az bir küçük karakter içermelidir")
//     .matches(/[A-Z]/, "Şifre en az bir büyük harf içermelidir")
//     .matches(/[@$!%*?&]+/, "Şifre en az bir özel karakter içermelidir"),
    
//   });
//     return (
//     <Container maxWidth="lg">
//       <Grid
//         container
//         justifyContent="center"
//         direction="row-reverse"
//         sx={{
//           height: "100vh",
//           p: 2,
//         }}
//       >
//         <Grid item xs={12} mb={3}>
//           <Typography variant="h3" color='#be123c' align="center">
//            RENT A CAR 
//           </Typography>
//         </Grid>

//         <Grid item xs={12} sm={10} md={6}>
//           <Avatar
//             sx={{
//               backgroundColor: '#be123c',
//               m: "auto",
//               width: 40,
//               height: 40,
//             }}
//           >
//             <LockIcon size="30" />
//           </Avatar>
//           <Typography
//             variant="h4"
//             align="center"
//             mb={4}
//             color="secondary.light"
//           >
//             Login
//           </Typography>

// <Formik
// initialValues={{email:"", password:""}}
// validationSchema={loginSchema}
// onSubmit={(values, actions)=>{
//   //? TODO login(post) isteği
//   //? Veriler global state'e aktarilabilir  
//   //? Navigasyon yapılabilir
//   login(values)
//   navigate(from, { replace: true });  // başarılı giriş sonrası yönlendirme
//   actions.resetForm()  //?form silinir
//   actions.setSubmitting(false)
// }}
// > 
// {({handleChange, values,  touched, errors, handleBlur })=>(
//   <Form>
//     <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}
//           >
//             <TextField
//               label="Email"
//               name="email"
//               id="email"
//               type="email"
//               variant="outlined"
//               value={values.email}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               error={touched.email && Boolean(errors.email)}
//               helperText={errors.email}
//             />
//             <TextField
//               label="password"
//               name="password"
//               id="password"
//               type="password"
//               variant="outlined"
//               value={values.password}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               error={touched.password && Boolean(errors.password)}
//               helperText={errors.password}
//             />
//             <Button variant="contained" type="submit" sx={{backgroundColor: "#be123c" , display: 'flex', justifyContent: 'center' }}>
//               Submit
//             </Button>
//           </Box></Form>
// )}
// </Formik>
          

//           <Box sx={{ textAlign: "center", mt: 2, mb:2 }}>
//             <Link to="/register">Do you have not an account?</Link>
//           </Box>
//         </Grid>

//         <Grid item xs={10} sm={7} md={6}>
//           <Container>
//             <img src={image} alt="img"  />
//           </Container>
//         </Grid>
//       </Grid>
//     </Container>
//   )
// }

// export default Login
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/result6.png";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import { object, string } from "yup";

import { useNavigate, useLocation } from "react-router-dom";
import useAuthCalls from "../service/useAuthCalls";

const Login = () => {
  const { login } = useAuthCalls();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const loginSchema = object({
    email: string().email("Please enter a valid email").required("Email is a required field"),
    password: string()
      .required("Password is a required field")
      .min(8, "Şifre en az 8 karakter olmalıdır.")
      .max(16, "Şifre en fazla 16 karakter olmalıdır.")
      .matches(/\d+/, "Şifre en az bir rakam içermelidir")
      .matches(/[a-z]/, "Şifre en az bir küçük karakter içermelidir")
      .matches(/[A-Z]/, "Şifre en az bir büyük harf içermelidir")
      .matches(/[@$!%*?&]+/, "Şifre en az bir özel karakter içermelidir"),
  });

  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundColor: "white", // Lacivert arka plan
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12} mb={3}>
          <Typography variant="h4" color="black" align="center">
            ANTALYA AIR VIP TRANSFER
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "white",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography variant="h4" align="center" mb={4} color="secondary.light">
            Login
          </Typography>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
              login(values);
              navigate(from, { replace: true });
              actions.resetForm();
              actions.setSubmitting(false);
            }}
          >
            {({ handleChange, values, touched, errors, handleBlur }) => (
              <Form>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    variant="outlined"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={errors.email}
                  />
                  <TextField
                    label="Password"
                    name="password"
                    id="password"
                    type="password"
                    variant="outlined"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={errors.password}
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ backgroundColor: "green", display: "flex", justifyContent: "center" }}
                  >
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2, mb: 2 }}>
            <Link to="/register">Do you have not an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={10} sm={7} md={6}>
          <Container>
            <img src={image} alt="img" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
