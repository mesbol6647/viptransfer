// // // // // // // // // // import * as React from "react";
// // // // // // // // // // import {
// // // // // // // // // //   AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar,
// // // // // // // // // //   Button, Tooltip, MenuItem
// // // // // // // // // // } from "@mui/material";
// // // // // // // // // // import MenuIcon from "@mui/icons-material/Menu";
// // // // // // // // // // import image from "../assets/result6.png";
// // // // // // // // // // import useAuthCalls from "../service/useAuthCalls";
// // // // // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // // // // const pages = [
// // // // // // // // // //   { name: "Ana Sayfa", path: "/" },
// // // // // // // // // //   { name: "Hakkımızda", path: "/about" },
// // // // // // // // // //   { name: "Tüm Bölgeler", path: "/bolgeler" },
// // // // // // // // // //   { name: "Blog", path: "/blog" },
// // // // // // // // // //   { name: "Sık Sorulanlar", path: "/faq" },
// // // // // // // // // //   { name: "Yorumlar", path: "/yorum" },
// // // // // // // // // // ];

// // // // // // // // // // const settings = ["Profile", "Account", "Dashboard", "Logout"];

// // // // // // // // // // function Navbar() {
// // // // // // // // // //   const { logout } = useAuthCalls();
// // // // // // // // // //   const navigate = useNavigate();
// // // // // // // // // //   const [anchorElNav, setAnchorElNav] = React.useState(null);
// // // // // // // // // //   const [anchorElUser, setAnchorElUser] = React.useState(null);

// // // // // // // // // //   const handleOpenNavMenu = (event) => {
// // // // // // // // // //     setAnchorElNav(event.currentTarget);
// // // // // // // // // //   };

// // // // // // // // // //   const handleOpenUserMenu = (event) => {
// // // // // // // // // //     setAnchorElUser(event.currentTarget);
// // // // // // // // // //   };

// // // // // // // // // //   const handleCloseNavMenu = () => {
// // // // // // // // // //     setAnchorElNav(null);
// // // // // // // // // //   };

// // // // // // // // // //   const handleCloseUserMenu = () => {
// // // // // // // // // //     setAnchorElUser(null);
// // // // // // // // // //   };

// // // // // // // // // //   const handleNavigate = (path) => {
// // // // // // // // // //     navigate(path);
// // // // // // // // // //     handleCloseNavMenu();
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <AppBar
// // // // // // // // // //       position="fixed"
// // // // // // // // // //       elevation={0}
// // // // // // // // // //       sx={{
// // // // // // // // // //         backgroundColor: "rgba(0, 0, 0, 0.8)", // siyah opak
// // // // // // // // // //         color: "#fff", // yazılar beyaz
// // // // // // // // // //       }}
// // // // // // // // // //     >
// // // // // // // // // //       <Container maxWidth="xl">
// // // // // // // // // //         <Toolbar disableGutters>
// // // // // // // // // //           <Box
// // // // // // // // // //             component="img"
// // // // // // // // // //             src={image}
// // // // // // // // // //             alt="logo"
// // // // // // // // // //             width="90px"
// // // // // // // // // //             height="90px"
// // // // // // // // // //             sx={{
// // // // // // // // // //               marginRight: "30px",
// // // // // // // // // //               display: { xs: "none", md: "flex" },
// // // // // // // // // //             }}
// // // // // // // // // //           />
// // // // // // // // // //           <Typography
// // // // // // // // // //             variant="h6"
// // // // // // // // // //             noWrap
// // // // // // // // // //             component="div"
// // // // // // // // // //             sx={{
// // // // // // // // // //               display: { xs: "none", md: "flex" },
// // // // // // // // // //               fontWeight: 700,
// // // // // // // // // //               letterSpacing: ".2rem",
// // // // // // // // // //               color: "#fff",
// // // // // // // // // //               fontSize: "1rem",
// // // // // // // // // //               lineHeight: 1.2,
// // // // // // // // // //             }}
// // // // // // // // // //           >
// // // // // // // // // //             ANTALYA AIR<br />VIP TRANSFER
// // // // // // // // // //           </Typography>

// // // // // // // // // //           {/* Mobil menü */}
// // // // // // // // // //           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
// // // // // // // // // //             <IconButton onClick={handleOpenNavMenu} sx={{ color: "#fff" }}>
// // // // // // // // // //               <MenuIcon />
// // // // // // // // // //             </IconButton>
// // // // // // // // // //             <Menu
// // // // // // // // // //               anchorEl={anchorElNav}
// // // // // // // // // //               anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
// // // // // // // // // //               transformOrigin={{ vertical: "top", horizontal: "left" }}
// // // // // // // // // //               open={Boolean(anchorElNav)}
// // // // // // // // // //               onClose={handleCloseNavMenu}
// // // // // // // // // //             >
// // // // // // // // // //               {pages.map((page) => (
// // // // // // // // // //                 <MenuItem key={page.name} onClick={() => handleNavigate(page.path)}>
// // // // // // // // // //                   <Typography textAlign="center">{page.name}</Typography>
// // // // // // // // // //                 </MenuItem>
// // // // // // // // // //               ))}
// // // // // // // // // //             </Menu>
// // // // // // // // // //           </Box>

// // // // // // // // // //           {/* Mobil logo */}
// // // // // // // // // //           <Box
// // // // // // // // // //             component="img"
// // // // // // // // // //             src={image}
// // // // // // // // // //             alt="logo"
// // // // // // // // // //             width="30px"
// // // // // // // // // //             sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}
// // // // // // // // // //           />

// // // // // // // // // //           <Typography
// // // // // // // // // //             variant="h5"
// // // // // // // // // //             noWrap
// // // // // // // // // //             component="div"
// // // // // // // // // //             sx={{
// // // // // // // // // //               flexGrow: 1,
// // // // // // // // // //               display: { xs: "flex", md: "none" },
// // // // // // // // // //               fontWeight: 700,
// // // // // // // // // //               color: "#fff",
// // // // // // // // // //               letterSpacing: ".1rem",
// // // // // // // // // //               textDecoration: "none",
// // // // // // // // // //             }}
// // // // // // // // // //           >
// // // // // // // // // //             ANTALYA AIR VIP TRANSFER
// // // // // // // // // //           </Typography>

// // // // // // // // // //           {/* Masaüstü menü */}
// // // // // // // // // //           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
// // // // // // // // // //             {pages.map((page) => (
// // // // // // // // // //               <Button
// // // // // // // // // //                 key={page.name}
// // // // // // // // // //                 onClick={() => handleNavigate(page.path)}
// // // // // // // // // //                 sx={{
// // // // // // // // // //                   my: 2,
// // // // // // // // // //                   color: "#fff",
// // // // // // // // // //                   display: "block",
// // // // // // // // // //                   fontWeight: "bold",
// // // // // // // // // //                   "&:hover": {
// // // // // // // // // //                     backgroundColor: "rgba(255,255,255,0.2)",
// // // // // // // // // //                   },
// // // // // // // // // //                 }}
// // // // // // // // // //               >
// // // // // // // // // //                 {page.name}
// // // // // // // // // //               </Button>
// // // // // // // // // //             ))}
// // // // // // // // // //           </Box>

// // // // // // // // // //           {/* Kullanıcı menüsü */}
// // // // // // // // // //           <Box sx={{ flexGrow: 0 }}>
// // // // // // // // // //             <Tooltip title="Open settings">
// // // // // // // // // //               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
// // // // // // // // // //                 <Avatar alt="User" src="/static/images/avatar/2.jpg" />
// // // // // // // // // //               </IconButton>
// // // // // // // // // //             </Tooltip>
// // // // // // // // // //             <Menu
// // // // // // // // // //               anchorEl={anchorElUser}
// // // // // // // // // //               open={Boolean(anchorElUser)}
// // // // // // // // // //               onClose={handleCloseUserMenu}
// // // // // // // // // //               sx={{ mt: "45px" }}
// // // // // // // // // //             >
// // // // // // // // // //               {settings.map((setting) => (
// // // // // // // // // //                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
// // // // // // // // // //                   <Typography textAlign="center">{setting}</Typography>
// // // // // // // // // //                 </MenuItem>
// // // // // // // // // //               ))}
// // // // // // // // // //             </Menu>
// // // // // // // // // //           </Box>
// // // // // // // // // //         </Toolbar>
// // // // // // // // // //       </Container>
// // // // // // // // // //     </AppBar>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // // export default Navbar;

// // // // // // // // // import * as React from "react";
// // // // // // // // // import {
// // // // // // // // //   AppBar,
// // // // // // // // //   Box,
// // // // // // // // //   Toolbar,
// // // // // // // // //   IconButton,
// // // // // // // // //   Typography,
// // // // // // // // //   Menu,
// // // // // // // // //   Container,
// // // // // // // // //   Avatar,
// // // // // // // // //   Button,
// // // // // // // // //   Tooltip,
// // // // // // // // //   MenuItem,
// // // // // // // // // } from "@mui/material";
// // // // // // // // // import MenuIcon from "@mui/icons-material/Menu";
// // // // // // // // // import image from "../assets/result6.png";
// // // // // // // // // import useAuthCalls from "../service/useAuthCalls";
// // // // // // // // // import { useNavigate } from "react-router-dom";
// // // // // // // // // import { useTranslation } from "react-i18next";
// // // // // // // // // import i18n from "i18next";

// // // // // // // // // function Navbar() {
// // // // // // // // //   const { logout } = useAuthCalls();
// // // // // // // // //   const navigate = useNavigate();
// // // // // // // // //   const { t } = useTranslation();

// // // // // // // // //   const [anchorElNav, setAnchorElNav] = React.useState(null);
// // // // // // // // //   const [anchorElUser, setAnchorElUser] = React.useState(null);

// // // // // // // // //   const handleOpenNavMenu = (event) => {
// // // // // // // // //     setAnchorElNav(event.currentTarget);
// // // // // // // // //   };

// // // // // // // // //   const handleOpenUserMenu = (event) => {
// // // // // // // // //     setAnchorElUser(event.currentTarget);
// // // // // // // // //   };

// // // // // // // // //   const handleCloseNavMenu = () => {
// // // // // // // // //     setAnchorElNav(null);
// // // // // // // // //   };

// // // // // // // // //   const handleCloseUserMenu = () => {
// // // // // // // // //     setAnchorElUser(null);
// // // // // // // // //   };

// // // // // // // // //   const handleNavigate = (path) => {
// // // // // // // // //     navigate(path);
// // // // // // // // //     handleCloseNavMenu();
// // // // // // // // //   };

// // // // // // // // //   const pages = React.useMemo(
// // // // // // // // //     () => [
// // // // // // // // //       { name: t("navbar.home"), path: "/" },
// // // // // // // // //       { name: t("navbar.about"), path: "/about" },
// // // // // // // // //       { name: t("navbar.regions"), path: "/bolgeler" },
// // // // // // // // //       { name: t("navbar.blog"), path: "/blog" },
// // // // // // // // //       { name: t("navbar.faq"), path: "/faq" },
// // // // // // // // //       { name: t("navbar.comments"), path: "/yorum" },
// // // // // // // // //     ],
// // // // // // // // //     [t]
// // // // // // // // //   );

// // // // // // // // //   const settings = ["Profile", "Account", "Dashboard", "Logout"];

// // // // // // // // //   return (
// // // // // // // // //     <AppBar
// // // // // // // // //       position="fixed"
// // // // // // // // //       elevation={0}
// // // // // // // // //       sx={{
// // // // // // // // //         backgroundColor: "rgba(0, 0, 0, 0.8)",
// // // // // // // // //         color: "#fff",
// // // // // // // // //       }}
// // // // // // // // //     >
// // // // // // // // //       <Container maxWidth="xl">
// // // // // // // // //         <Toolbar disableGutters>
// // // // // // // // //           {/* Masaüstü logo */}
// // // // // // // // //           <Box
// // // // // // // // //             component="img"
// // // // // // // // //             src={image}
// // // // // // // // //             alt="logo"
// // // // // // // // //             width="90px"
// // // // // // // // //             height="90px"
// // // // // // // // //             sx={{ marginRight: "30px", display: { xs: "none", md: "flex" } }}
// // // // // // // // //           />
// // // // // // // // //           <Typography
// // // // // // // // //             variant="h6"
// // // // // // // // //             noWrap
// // // // // // // // //             component="div"
// // // // // // // // //             sx={{
// // // // // // // // //               display: { xs: "none", md: "flex" },
// // // // // // // // //               fontWeight: 700,
// // // // // // // // //               letterSpacing: ".2rem",
// // // // // // // // //               color: "#fff",
// // // // // // // // //               fontSize: "1rem",
// // // // // // // // //               lineHeight: 1.2,
// // // // // // // // //             }}
// // // // // // // // //           >
// // // // // // // // //             ANTALYA AIR
// // // // // // // // //             <br />
// // // // // // // // //             VIP TRANSFER
// // // // // // // // //           </Typography>

// // // // // // // // //           {/* Mobil menü */}
// // // // // // // // //           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
// // // // // // // // //             <IconButton onClick={handleOpenNavMenu} sx={{ color: "#fff" }}>
// // // // // // // // //               <MenuIcon />
// // // // // // // // //             </IconButton>
// // // // // // // // //             <Menu
// // // // // // // // //               anchorEl={anchorElNav}
// // // // // // // // //               anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
// // // // // // // // //               transformOrigin={{ vertical: "top", horizontal: "left" }}
// // // // // // // // //               open={Boolean(anchorElNav)}
// // // // // // // // //               onClose={handleCloseNavMenu}
// // // // // // // // //             >
// // // // // // // // //               {pages.map((page) => (
// // // // // // // // //                 <MenuItem
// // // // // // // // //                   key={page.name}
// // // // // // // // //                   onClick={() => handleNavigate(page.path)}
// // // // // // // // //                 >
// // // // // // // // //                   <Typography textAlign="center">{page.name}</Typography>
// // // // // // // // //                 </MenuItem>
// // // // // // // // //               ))}
// // // // // // // // //             </Menu>
// // // // // // // // //           </Box>

// // // // // // // // //           {/* Mobil logo */}
// // // // // // // // //           <Box
// // // // // // // // //             component="img"
// // // // // // // // //             src={image}
// // // // // // // // //             alt="logo"
// // // // // // // // //             width="30px"
// // // // // // // // //             sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}
// // // // // // // // //           />
// // // // // // // // //           <Typography
// // // // // // // // //             variant="h5"
// // // // // // // // //             noWrap
// // // // // // // // //             component="div"
// // // // // // // // //             sx={{
// // // // // // // // //               flexGrow: 1,
// // // // // // // // //               display: { xs: "flex", md: "none" },
// // // // // // // // //               fontWeight: 700,
// // // // // // // // //               color: "#fff",
// // // // // // // // //               letterSpacing: ".1rem",
// // // // // // // // //               textDecoration: "none",
// // // // // // // // //             }}
// // // // // // // // //           >
// // // // // // // // //             ANTALYA AIR VIP TRANSFER
// // // // // // // // //           </Typography>

// // // // // // // // //           {/* Masaüstü menü */}
// // // // // // // // //           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
// // // // // // // // //             {pages.map((page) => (
// // // // // // // // //               <Button
// // // // // // // // //                 key={page.name}
// // // // // // // // //                 onClick={() => handleNavigate(page.path)}
// // // // // // // // //                 sx={{
// // // // // // // // //                   my: 2,
// // // // // // // // //                   color: "#fff",
// // // // // // // // //                   display: "block",
// // // // // // // // //                   fontWeight: "bold",
// // // // // // // // //                   "&:hover": {
// // // // // // // // //                     backgroundColor: "rgba(255,255,255,0.2)",
// // // // // // // // //                   },
// // // // // // // // //                 }}
// // // // // // // // //               >
// // // // // // // // //                 {page.name}
// // // // // // // // //               </Button>
// // // // // // // // //             ))}
// // // // // // // // //           </Box>

// // // // // // // // //           {/* Bayraklı Dil Değiştirici */}
// // // // // // // // //           {/* Bayraklı Dil Değiştirici - Avatar'dan önce gelsin */}
// // // // // // // // //           <Box sx={{ display: "flex", gap: 1, alignItems: "center", mr: 2 }}>
// // // // // // // // //             <img
// // // // // // // // //               src="/flags/tr.png"
// // // // // // // // //               alt="TR"
// // // // // // // // //               width={24}
// // // // // // // // //               onClick={() => i18n.changeLanguage("tr")}
// // // // // // // // //               style={{ cursor: "pointer" }}
// // // // // // // // //             />
// // // // // // // // //             <img
// // // // // // // // //               src="/flags/en.png"
// // // // // // // // //               alt="EN"
// // // // // // // // //               width={24}
// // // // // // // // //               onClick={() => i18n.changeLanguage("en")}
// // // // // // // // //               style={{ cursor: "pointer" }}
// // // // // // // // //             />
// // // // // // // // //             <img
// // // // // // // // //               src="/flags/de.png"
// // // // // // // // //               alt="DE"
// // // // // // // // //               width={24}
// // // // // // // // //               onClick={() => i18n.changeLanguage("de")}
// // // // // // // // //               style={{ cursor: "pointer" }}
// // // // // // // // //             />
// // // // // // // // //             <img
// // // // // // // // //               src="/flags/ru.png"
// // // // // // // // //               alt="RU"
// // // // // // // // //               width={24}
// // // // // // // // //               onClick={() => i18n.changeLanguage("ru")}
// // // // // // // // //               style={{ cursor: "pointer" }}
// // // // // // // // //             />
// // // // // // // // //           </Box>

// // // // // // // // //           {/* Kullanıcı menüsü */}
// // // // // // // // //           <Box sx={{ flexGrow: 0 }}>
// // // // // // // // //             <Tooltip title="Open settings">
// // // // // // // // //               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
// // // // // // // // //                 <Avatar alt="User" src="/static/images/avatar/2.jpg" />
// // // // // // // // //               </IconButton>
// // // // // // // // //             </Tooltip>
// // // // // // // // //             <Menu
// // // // // // // // //               anchorEl={anchorElUser}
// // // // // // // // //               open={Boolean(anchorElUser)}
// // // // // // // // //               onClose={handleCloseUserMenu}
// // // // // // // // //               sx={{ mt: "45px" }}
// // // // // // // // //             >
// // // // // // // // //               {settings.map((setting) => (
// // // // // // // // //                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
// // // // // // // // //                   <Typography textAlign="center">{setting}</Typography>
// // // // // // // // //                 </MenuItem>
// // // // // // // // //               ))}
// // // // // // // // //             </Menu>
// // // // // // // // //           </Box>
// // // // // // // // //         </Toolbar>
// // // // // // // // //       </Container>
// // // // // // // // //     </AppBar>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // export default Navbar;

// // // // // // // // import * as React from "react";
// // // // // // // // import {
// // // // // // // //   AppBar,
// // // // // // // //   Box,
// // // // // // // //   Toolbar,
// // // // // // // //   IconButton,
// // // // // // // //   Typography,
// // // // // // // //   Menu,
// // // // // // // //   Container,
// // // // // // // //   Avatar,
// // // // // // // //   Button,
// // // // // // // //   Tooltip,
// // // // // // // //   MenuItem,
// // // // // // // // } from "@mui/material";
// // // // // // // // import MenuIcon from "@mui/icons-material/Menu";
// // // // // // // // import image from "../assets/result6.png";
// // // // // // // // import useAuthCalls from "../service/useAuthCalls";
// // // // // // // // import { useNavigate } from "react-router-dom";
// // // // // // // // import { useTranslation } from "react-i18next";
// // // // // // // // import i18n from "i18next";

// // // // // // // // function Navbar() {
// // // // // // // //   const { logout } = useAuthCalls();
// // // // // // // //   const navigate = useNavigate();
// // // // // // // //   const { t } = useTranslation();

// // // // // // // //   const [anchorElNav, setAnchorElNav] = React.useState(null);
// // // // // // // //   const [anchorElUser, setAnchorElUser] = React.useState(null);

// // // // // // // //   const handleOpenNavMenu = (event) => {
// // // // // // // //     setAnchorElNav(event.currentTarget);
// // // // // // // //   };

// // // // // // // //   const handleOpenUserMenu = (event) => {
// // // // // // // //     setAnchorElUser(event.currentTarget);
// // // // // // // //   };

// // // // // // // //   const handleCloseNavMenu = () => {
// // // // // // // //     setAnchorElNav(null);
// // // // // // // //   };

// // // // // // // //   const handleCloseUserMenu = () => {
// // // // // // // //     setAnchorElUser(null);
// // // // // // // //   };

// // // // // // // //   const handleNavigate = (path) => {
// // // // // // // //     navigate(path);
// // // // // // // //     handleCloseNavMenu();
// // // // // // // //   };

// // // // // // // //   const pages = React.useMemo(
// // // // // // // //     () => [
// // // // // // // //       { name: t("navbar.home"), path: "/" },
// // // // // // // //       { name: t("navbar.about"), path: "/about" },
// // // // // // // //       { name: t("navbar.regions"), path: "/bolgeler" },
// // // // // // // //       { name: t("navbar.blog"), path: "/blog" },
// // // // // // // //       { name: t("navbar.faq"), path: "/faq" },
// // // // // // // //       { name: t("navbar.comments"), path: "/yorum" },
// // // // // // // //     ],
// // // // // // // //     [t]
// // // // // // // //   );

// // // // // // // //   const settings = ["Profile", "Account", "Dashboard", "Logout"];

// // // // // // // //   return (
// // // // // // // //     <AppBar
// // // // // // // //       position="sticky"
// // // // // // // //       elevation={4}
// // // // // // // //       sx={{
// // // // // // // //         top: 0,
// // // // // // // //         zIndex: 1300,
// // // // // // // //         backgroundColor: "#050b16",
// // // // // // // //         transition: "background-color 0.3s ease-in-out",
// // // // // // // //       }}
// // // // // // // //     >
// // // // // // // //       <Container maxWidth="xl">
// // // // // // // //         <Toolbar disableGutters>
// // // // // // // //           {/* Masaüstü logo */}
// // // // // // // //           <Box
// // // // // // // //             component="img"
// // // // // // // //             src={image}
// // // // // // // //             alt="logo"
// // // // // // // //             width="90px"
// // // // // // // //             height="90px"
// // // // // // // //             sx={{ marginRight: "30px", display: { xs: "none", md: "flex" } }}
// // // // // // // //           />
// // // // // // // //           <Typography
// // // // // // // //             variant="h6"
// // // // // // // //             noWrap
// // // // // // // //             component="div"
// // // // // // // //             sx={{
// // // // // // // //               display: { xs: "none", md: "flex" },
// // // // // // // //               fontWeight: 700,
// // // // // // // //               letterSpacing: ".2rem",
// // // // // // // //               color: "#fff",
// // // // // // // //               fontSize: "1rem",
// // // // // // // //               lineHeight: 1.2,
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             ANTALYA AIR
// // // // // // // //             <br />
// // // // // // // //             VIP TRANSFER
// // // // // // // //           </Typography>

// // // // // // // //           {/* Mobil menü */}
// // // // // // // //           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
// // // // // // // //             <IconButton onClick={handleOpenNavMenu} sx={{ color: "#fff" }}>
// // // // // // // //               <MenuIcon />
// // // // // // // //             </IconButton>
// // // // // // // //             <Menu
// // // // // // // //               anchorEl={anchorElNav}
// // // // // // // //               anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
// // // // // // // //               transformOrigin={{ vertical: "top", horizontal: "left" }}
// // // // // // // //               open={Boolean(anchorElNav)}
// // // // // // // //               onClose={handleCloseNavMenu}
// // // // // // // //             >
// // // // // // // //               {pages.map((page) => (
// // // // // // // //                 <MenuItem
// // // // // // // //                   key={page.name}
// // // // // // // //                   onClick={() => handleNavigate(page.path)}
// // // // // // // //                 >
// // // // // // // //                   <Typography textAlign="center">{page.name}</Typography>
// // // // // // // //                 </MenuItem>
// // // // // // // //               ))}
// // // // // // // //             </Menu>
// // // // // // // //           </Box>

// // // // // // // //           {/* Mobil logo */}
// // // // // // // //           <Box
// // // // // // // //             component="img"
// // // // // // // //             src={image}
// // // // // // // //             alt="logo"
// // // // // // // //             width="30px"
// // // // // // // //             sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}
// // // // // // // //           />

// // // // // // // //           {/* Mobilde ortalanmış bayraklar */}
// // // // // // // //           <Box
// // // // // // // //             sx={{
// // // // // // // //               flexGrow: 1,
// // // // // // // //               display: { xs: "flex", md: "none" },
// // // // // // // //               justifyContent: "center",
// // // // // // // //               gap: 1,
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             <img
// // // // // // // //               src="/flags/tr.png"
// // // // // // // //               alt="TR"
// // // // // // // //               width={24}
// // // // // // // //               onClick={() => i18n.changeLanguage("tr")}
// // // // // // // //               style={{ cursor: "pointer" }}
// // // // // // // //             />
// // // // // // // //             <img
// // // // // // // //               src="/flags/en.png"
// // // // // // // //               alt="EN"
// // // // // // // //               width={24}
// // // // // // // //               onClick={() => i18n.changeLanguage("en")}
// // // // // // // //               style={{ cursor: "pointer" }}
// // // // // // // //             />
// // // // // // // //             <img
// // // // // // // //               src="/flags/de.png"
// // // // // // // //               alt="DE"
// // // // // // // //               width={24}
// // // // // // // //               onClick={() => i18n.changeLanguage("de")}
// // // // // // // //               style={{ cursor: "pointer" }}
// // // // // // // //             />
// // // // // // // //             <img
// // // // // // // //               src="/flags/ru.png"
// // // // // // // //               alt="RU"
// // // // // // // //               width={24}
// // // // // // // //               onClick={() => i18n.changeLanguage("ru")}
// // // // // // // //               style={{ cursor: "pointer" }}
// // // // // // // //             />
// // // // // // // //           </Box>

// // // // // // // //           {/* Masaüstü menü */}
// // // // // // // //           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
// // // // // // // //             {pages.map((page) => (
// // // // // // // //               <Button
// // // // // // // //                 key={page.name}
// // // // // // // //                 onClick={() => handleNavigate(page.path)}
// // // // // // // //                 sx={{
// // // // // // // //                   my: 2,
// // // // // // // //                   color: "#fff",
// // // // // // // //                   display: "block",
// // // // // // // //                   fontWeight: "bold",
// // // // // // // //                   "&:hover": {
// // // // // // // //                     backgroundColor: "rgba(255,255,255,0.2)",
// // // // // // // //                   },
// // // // // // // //                 }}
// // // // // // // //               >
// // // // // // // //                 {page.name}
// // // // // // // //               </Button>
// // // // // // // //             ))}
// // // // // // // //           </Box>

// // // // // // // //           {/* Masaüstü bayraklar */}
// // // // // // // //           <Box
// // // // // // // //             sx={{
// // // // // // // //               display: { xs: "none", md: "flex" },
// // // // // // // //               gap: 1,
// // // // // // // //               alignItems: "center",
// // // // // // // //               mr: 2,
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             <img
// // // // // // // //               src="/flags/tr.png"
// // // // // // // //               alt="TR"
// // // // // // // //               width={24}
// // // // // // // //               onClick={() => i18n.changeLanguage("tr")}
// // // // // // // //               style={{ cursor: "pointer" }}
// // // // // // // //             />
// // // // // // // //             <img
// // // // // // // //               src="/flags/en.png"
// // // // // // // //               alt="EN"
// // // // // // // //               width={24}
// // // // // // // //               onClick={() => i18n.changeLanguage("en")}
// // // // // // // //               style={{ cursor: "pointer" }}
// // // // // // // //             />
// // // // // // // //             <img
// // // // // // // //               src="/flags/de.png"
// // // // // // // //               alt="DE"
// // // // // // // //               width={24}
// // // // // // // //               onClick={() => i18n.changeLanguage("de")}
// // // // // // // //               style={{ cursor: "pointer" }}
// // // // // // // //             />
// // // // // // // //             <img
// // // // // // // //               src="/flags/ru.png"
// // // // // // // //               alt="RU"
// // // // // // // //               width={24}
// // // // // // // //               onClick={() => i18n.changeLanguage("ru")}
// // // // // // // //               style={{ cursor: "pointer" }}
// // // // // // // //             />
// // // // // // // //           </Box>

// // // // // // // //           {/* Kullanıcı menüsü */}
// // // // // // // //           <Box sx={{ flexGrow: 0 }}>
// // // // // // // //             <Tooltip title="Open settings">
// // // // // // // //               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
// // // // // // // //                 <Avatar alt="User" src="/static/images/avatar/2.jpg" />
// // // // // // // //               </IconButton>
// // // // // // // //             </Tooltip>
// // // // // // // //             <Menu
// // // // // // // //               anchorEl={anchorElUser}
// // // // // // // //               open={Boolean(anchorElUser)}
// // // // // // // //               onClose={handleCloseUserMenu}
// // // // // // // //               sx={{ mt: "45px" }}
// // // // // // // //             >
// // // // // // // //               {settings.map((setting) => (
// // // // // // // //                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
// // // // // // // //                   <Typography textAlign="center">{setting}</Typography>
// // // // // // // //                 </MenuItem>
// // // // // // // //               ))}
// // // // // // // //             </Menu>
// // // // // // // //           </Box>
// // // // // // // //         </Toolbar>
// // // // // // // //       </Container>
// // // // // // // //     </AppBar>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // export default Navbar;

// // // // // // // import * as React from "react";
// // // // // // // import {
// // // // // // //   AppBar,
// // // // // // //   Box,
// // // // // // //   Toolbar,
// // // // // // //   IconButton,
// // // // // // //   Typography,
// // // // // // //   Menu,
// // // // // // //   Container,
// // // // // // //   Avatar,
// // // // // // //   Button,
// // // // // // //   Tooltip,
// // // // // // //   MenuItem,
// // // // // // // } from "@mui/material";
// // // // // // // import MenuIcon from "@mui/icons-material/Menu";
// // // // // // // import image from "../assets/result6.png";
// // // // // // // import useAuthCalls from "../service/useAuthCalls";
// // // // // // // import { useNavigate } from "react-router-dom";
// // // // // // // import { useTranslation } from "react-i18next";
// // // // // // // import i18n from "i18next";

// // // // // // // // Açılış animasyonu için stil
// // // // // // // const animationStyle = {
// // // // // // //   animation: "slideFadeIn 0.6s ease-out",
// // // // // // //   "@keyframes slideFadeIn": {
// // // // // // //     "0%": { opacity: 0, transform: "translateY(-30px)" },
// // // // // // //     "100%": { opacity: 1, transform: "translateY(0)" },
// // // // // // //   },
// // // // // // // };

// // // // // // // function Navbar() {
// // // // // // //   const { logout } = useAuthCalls();
// // // // // // //   const navigate = useNavigate();
// // // // // // //   const { t, i18n } = useTranslation();

// // // // // // //   const [anchorElNav, setAnchorElNav] = React.useState(null);
// // // // // // //   const [anchorElUser, setAnchorElUser] = React.useState(null);

// // // // // // //   const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
// // // // // // //   const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
// // // // // // //   const handleCloseNavMenu = () => setAnchorElNav(null);
// // // // // // //   const handleCloseUserMenu = () => setAnchorElUser(null);

// // // // // // //   const handleNavigate = (path) => {
// // // // // // //     navigate(path);
// // // // // // //     handleCloseNavMenu();
// // // // // // //   };

// // // // // // //   const pages = React.useMemo(
// // // // // // //     () => [
// // // // // // //       { name: t("navbar.home"), path: "/" },
// // // // // // //       { name: t("navbar.about"), path: "/about" },
// // // // // // //       { name: t("navbar.regions"), path: "/bolgeler" },
// // // // // // //       { name: t("navbar.blog"), path: "/blog" },
// // // // // // //       { name: t("navbar.faq"), path: "/faq" },
// // // // // // //       { name: t("navbar.comments"), path: "/yorum" },
// // // // // // //     ],
// // // // // // //     [t, i18n.language]
// // // // // // //   );

// // // // // // //   const settings = ["Profile", "Account", "Dashboard", "Logout"];

// // // // // // //   return (
// // // // // // //     <AppBar
// // // // // // //       position="sticky"
// // // // // // //       elevation={4}
// // // // // // //       sx={{
// // // // // // //         top: 0,
// // // // // // //         zIndex: 1300,
// // // // // // //         backgroundColor: "#0d1117",
// // // // // // //         ...animationStyle,
// // // // // // //       }}
// // // // // // //     >
// // // // // // //       <Container maxWidth="xl">
// // // // // // //         <Toolbar disableGutters>
// // // // // // //           {/* Masaüstü logo ve yazı */}
// // // // // // //           <Box
// // // // // // //             // component="img"
// // // // // // //             // src={image}
// // // // // // //             // alt="logo"
// // // // // // //             width="90px"
// // // // // // //             height="90px"
// // // // // // //             sx={{
// // // // // // //               flexGrow: 1,
// // // // // // //               display: { xs: "none", md: "flex" },
// // // // // // //               justifyContent: "center", // ortalama
// // // // // // //               gap: 2,
// // // // // // //             }}
// // // // // // //           />
// // // // // // //           <Typography
// // // // // // //             variant="h6"
// // // // // // //             noWrap
// // // // // // //             component="div"
// // // // // // //             sx={{
// // // // // // //               display: { xs: "none", md: "flex" },
// // // // // // //               fontWeight: 700,
// // // // // // //               letterSpacing: ".2rem",
// // // // // // //               color: "#fff",
// // // // // // //               fontSize: "1rem",
// // // // // // //               lineHeight: 1.2,
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             ANTALYA AIR
// // // // // // //             <br />
// // // // // // //             VIP TRANSFER
// // // // // // //           </Typography>

// // // // // // //           {/* Mobil Menü */}
// // // // // // //           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
// // // // // // //             <IconButton onClick={handleOpenNavMenu} sx={{ color: "#fff" }}>
// // // // // // //               <MenuIcon />
// // // // // // //             </IconButton>
// // // // // // //             <Menu
// // // // // // //               anchorEl={anchorElNav}
// // // // // // //               anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
// // // // // // //               transformOrigin={{ vertical: "top", horizontal: "left" }}
// // // // // // //               open={Boolean(anchorElNav)}
// // // // // // //               onClose={handleCloseNavMenu}
// // // // // // //             >
// // // // // // //               {pages.map((page) => (
// // // // // // //                 <MenuItem
// // // // // // //                   key={page.name}
// // // // // // //                   onClick={() => handleNavigate(page.path)}
// // // // // // //                 >
// // // // // // //                   <Typography textAlign="center">{page.name}</Typography>
// // // // // // //                 </MenuItem>
// // // // // // //               ))}
// // // // // // //             </Menu>
// // // // // // //           </Box>

// // // // // // //           {/* Mobil logo */}
// // // // // // //           <Box
// // // // // // //             component="img"
// // // // // // //             src={image}
// // // // // // //             alt="logo"
// // // // // // //             width="30px"
// // // // // // //             sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
// // // // // // //           />

// // // // // // //           {/* Mobilde ortalı bayraklar (yazı kaldırıldı) */}
// // // // // // //           <Box
// // // // // // //             sx={{
// // // // // // //               flexGrow: 1,
// // // // // // //               display: { xs: "flex", md: "none" },
// // // // // // //               justifyContent: "center",
// // // // // // //               alignItems: "center",
// // // // // // //               gap: 1,
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             {["tr", "en", "de", "ru"].map((lang) => (
// // // // // // //               <img
// // // // // // //                 key={lang}
// // // // // // //                 src={`/flags/${lang}.png`}
// // // // // // //                 alt={lang}
// // // // // // //                 width={24}
// // // // // // //                 onClick={() => i18n.changeLanguage(lang)}
// // // // // // //                 style={{ cursor: "pointer" }}
// // // // // // //               />
// // // // // // //             ))}
// // // // // // //           </Box>

// // // // // // //           {/* Masaüstü menü */}
// // // // // // //           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
// // // // // // //             {pages.map((page) => (
// // // // // // //               <Button
// // // // // // //                 key={page.name}
// // // // // // //                 onClick={() => handleNavigate(page.path)}
// // // // // // //                 sx={{
// // // // // // //                   my: 2,
// // // // // // //                   color: "#fff",
// // // // // // //                   fontWeight: "bold",
// // // // // // //                   "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 {page.name}
// // // // // // //               </Button>
// // // // // // //             ))}
// // // // // // //           </Box>

// // // // // // //           {/* Masaüstü bayraklar */}
// // // // // // //           <Box
// // // // // // //             sx={{
// // // // // // //               display: { xs: "none", md: "flex" },
// // // // // // //               alignItems: "center",
// // // // // // //               gap: 1,
// // // // // // //               mr: 2,
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             {["tr", "en", "de", "ru"].map((lang) => (
// // // // // // //               <img
// // // // // // //                 key={lang}
// // // // // // //                 src={`/flags/${lang}.png`}
// // // // // // //                 alt={lang}
// // // // // // //                 width={24}
// // // // // // //                 onClick={() => i18n.changeLanguage(lang)}
// // // // // // //                 style={{ cursor: "pointer" }}
// // // // // // //               />
// // // // // // //             ))}
// // // // // // //           </Box>

// // // // // // //           {/* Kullanıcı avatar menüsü */}
// // // // // // //           <Box sx={{ flexGrow: 0 }}>
// // // // // // //             <Tooltip title="Open settings">
// // // // // // //               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
// // // // // // //                 <Avatar alt="User" src="/static/images/avatar/2.jpg" />
// // // // // // //               </IconButton>
// // // // // // //             </Tooltip>
// // // // // // //             <Menu
// // // // // // //               anchorEl={anchorElUser}
// // // // // // //               open={Boolean(anchorElUser)}
// // // // // // //               onClose={handleCloseUserMenu}
// // // // // // //               sx={{ mt: "45px" }}
// // // // // // //             >
// // // // // // //               {settings.map((setting) => (
// // // // // // //                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
// // // // // // //                   <Typography textAlign="center">{setting}</Typography>
// // // // // // //                 </MenuItem>
// // // // // // //               ))}
// // // // // // //             </Menu>
// // // // // // //           </Box>
// // // // // // //         </Toolbar>
// // // // // // //       </Container>
// // // // // // //     </AppBar>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default Navbar;
// // // // // // import * as React from "react";
// // // // // // import {
// // // // // //   AppBar,
// // // // // //   Box,
// // // // // //   Toolbar,
// // // // // //   IconButton,
// // // // // //   Typography,
// // // // // //   Menu,
// // // // // //   Container,
// // // // // //   Avatar,
// // // // // //   Button,
// // // // // //   Tooltip,
// // // // // //   MenuItem,
// // // // // // } from "@mui/material";
// // // // // // import MenuIcon from "@mui/icons-material/Menu";
// // // // // // import useAuthCalls from "../service/useAuthCalls";
// // // // // // import { useNavigate } from "react-router-dom";
// // // // // // import { useTranslation } from "react-i18next";
// // // // // // import i18n from "i18next";

// // // // // // // Animasyon
// // // // // // const animationStyle = {
// // // // // //   animation: "slideFadeIn 0.6s ease-out",
// // // // // //   "@keyframes slideFadeIn": {
// // // // // //     "0%": { opacity: 0, transform: "translateY(-30px)" },
// // // // // //     "100%": { opacity: 1, transform: "translateY(0)" },
// // // // // //   },
// // // // // // };

// // // // // // function Navbar() {
// // // // // //   const { logout } = useAuthCalls();
// // // // // //   const navigate = useNavigate();
// // // // // //   const { t, i18n } = useTranslation();

// // // // // //   const [anchorElNav, setAnchorElNav] = React.useState(null);
// // // // // //   const [anchorElUser, setAnchorElUser] = React.useState(null);

// // // // // //   const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
// // // // // //   const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
// // // // // //   const handleCloseNavMenu = () => setAnchorElNav(null);
// // // // // //   const handleCloseUserMenu = () => setAnchorElUser(null);
// // // // // //   const handleNavigate = (path) => {
// // // // // //     navigate(path);
// // // // // //     handleCloseNavMenu();
// // // // // //   };

// // // // // //   const pages = React.useMemo(
// // // // // //     () => [
// // // // // //       { name: t("navbar.home"), path: "/" },
// // // // // //       { name: t("navbar.about"), path: "/about" },
// // // // // //       { name: t("navbar.regions"), path: "/bolgeler" },
// // // // // //       { name: t("navbar.blog"), path: "/blog" },
// // // // // //       { name: t("navbar.faq"), path: "/faq" },
// // // // // //       { name: t("navbar.comments"), path: "/yorum" },
// // // // // //     ],
// // // // // //     [t, i18n.language]
// // // // // //   );

// // // // // //   const settings = ["Profile", "Account", "Dashboard", "Logout"];

// // // // // //   return (
// // // // // //     <AppBar
// // // // // //       position="sticky"
// // // // // //       elevation={4}
// // // // // //       sx={{
// // // // // //         top: 0,
// // // // // //         zIndex: 1300,
// // // // // //         backgroundColor: "#0d1117",
// // // // // //         ...animationStyle,
// // // // // //       }}
// // // // // //     >
// // // // // //       <Container maxWidth="xl">
// // // // // //         <Toolbar disableGutters>
// // // // // //           {/* Mobil Menü Butonu */}
// // // // // //           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
// // // // // //             <IconButton onClick={handleOpenNavMenu} sx={{ color: "#fff" }}>
// // // // // //               <MenuIcon />
// // // // // //             </IconButton>
// // // // // //             <Menu
// // // // // //               anchorEl={anchorElNav}
// // // // // //               anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
// // // // // //               transformOrigin={{ vertical: "top", horizontal: "left" }}
// // // // // //               open={Boolean(anchorElNav)}
// // // // // //               onClose={handleCloseNavMenu}
// // // // // //             >
// // // // // //               {pages.map((page) => (
// // // // // //                 <MenuItem
// // // // // //                   key={page.name}
// // // // // //                   onClick={() => handleNavigate(page.path)}
// // // // // //                 >
// // // // // //                   <Typography textAlign="center">{page.name}</Typography>
// // // // // //                 </MenuItem>
// // // // // //               ))}
// // // // // //             </Menu>
// // // // // //           </Box>

// // // // // //           {/* Mobilde Ortalı Bayraklar */}
// // // // // //           <Box
// // // // // //             sx={{
// // // // // //               flexGrow: 1,
// // // // // //               display: { xs: "flex", md: "none" },
// // // // // //               justifyContent: "center",
// // // // // //               alignItems: "center",
// // // // // //               gap: 1,
// // // // // //             }}
// // // // // //           >
// // // // // //             {["tr", "en", "de", "ru"].map((lang) => (
// // // // // //               <img
// // // // // //                 key={lang}
// // // // // //                 src={`/flags/${lang}.png`}
// // // // // //                 alt={lang}
// // // // // //                 width={24}
// // // // // //                 onClick={() => i18n.changeLanguage(lang)}
// // // // // //                 style={{ cursor: "pointer" }}
// // // // // //               />
// // // // // //             ))}
// // // // // //           </Box>

// // // // // //           {/* Masaüstü Menü - SOLDA ve BÜYÜK */}
// // // // // //           <Box
// // // // // //             sx={{
// // // // // //               flexGrow: 1,
// // // // // //               display: { xs: "none", md: "flex" },
// // // // // //               justifyContent: "flex-start",
// // // // // //               gap: 2,
// // // // // //             }}
// // // // // //           >
// // // // // //             {pages.map((page) => (
// // // // // //               <Button
// // // // // //                 key={page.name}
// // // // // //                 onClick={() => handleNavigate(page.path)}
// // // // // //                 sx={{
// // // // // //                   my: 2,
// // // // // //                   color: "#fff",
// // // // // //                   fontWeight: "bold",
// // // // // //                   fontSize: "1rem",
// // // // // //                   px: 3,
// // // // // //                   py: 1.5,
// // // // // //                   "&:hover": {
// // // // // //                     backgroundColor: "rgba(255,255,255,0.2)",
// // // // // //                   },
// // // // // //                 }}
// // // // // //               >
// // // // // //                 {page.name}
// // // // // //               </Button>
// // // // // //             ))}
// // // // // //           </Box>

// // // // // //           {/* Masaüstü Bayraklar */}
// // // // // //           <Box
// // // // // //             sx={{
// // // // // //               display: { xs: "none", md: "flex" },
// // // // // //               alignItems: "center",
// // // // // //               gap: 1,
// // // // // //               mr: 2,
// // // // // //             }}
// // // // // //           >
// // // // // //             {["tr", "en", "de", "ru"].map((lang) => (
// // // // // //               <img
// // // // // //                 key={lang}
// // // // // //                 src={`/flags/${lang}.png`}
// // // // // //                 alt={lang}
// // // // // //                 width={24}
// // // // // //                 onClick={() => i18n.changeLanguage(lang)}
// // // // // //                 style={{ cursor: "pointer" }}
// // // // // //               />
// // // // // //             ))}
// // // // // //           </Box>

// // // // // //           {/* Kullanıcı Menüsü */}
// // // // // //           <Box sx={{ flexGrow: 0 }}>
// // // // // //             <Tooltip title="Open settings">
// // // // // //               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
// // // // // //                 <Avatar alt="User" src="/static/images/avatar/2.jpg" />
// // // // // //               </IconButton>
// // // // // //             </Tooltip>
// // // // // //             <Menu
// // // // // //               anchorEl={anchorElUser}
// // // // // //               open={Boolean(anchorElUser)}
// // // // // //               onClose={handleCloseUserMenu}
// // // // // //               sx={{ mt: "45px" }}
// // // // // //             >
// // // // // //               {settings.map((setting) => (
// // // // // //                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
// // // // // //                   <Typography textAlign="center">{setting}</Typography>
// // // // // //                 </MenuItem>
// // // // // //               ))}
// // // // // //             </Menu>
// // // // // //           </Box>
// // // // // //         </Toolbar>
// // // // // //       </Container>
// // // // // //     </AppBar>
// // // // // //   );
// // // // // // }

// // // // // // export default Navbar;

// // // // // import * as React from "react";
// // // // // import {
// // // // //   AppBar,
// // // // //   Box,
// // // // //   Toolbar,
// // // // //   IconButton,
// // // // //   Typography,
// // // // //   Menu,
// // // // //   Container,
// // // // //   Avatar,
// // // // //   Button,
// // // // //   Tooltip,
// // // // //   MenuItem,
// // // // // } from "@mui/material";
// // // // // import MenuIcon from "@mui/icons-material/Menu";
// // // // // import useAuthCalls from "../service/useAuthCalls";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import { useTranslation } from "react-i18next";
// // // // // import i18n from "i18next";

// // // // // const animationStyle = {
// // // // //   animation: "slideFadeIn 0.6s ease-out",
// // // // //   "@keyframes slideFadeIn": {
// // // // //     "0%": { opacity: 0, transform: "translateY(-30px)" },
// // // // //     "100%": { opacity: 1, transform: "translateY(0)" },
// // // // //   },
// // // // // };

// // // // // function Navbar() {
// // // // //   const { logout } = useAuthCalls();
// // // // //   const navigate = useNavigate();
// // // // //   const { t, i18n } = useTranslation();

// // // // //   const [anchorElNav, setAnchorElNav] = React.useState(null);
// // // // //   const [anchorElUser, setAnchorElUser] = React.useState(null);

// // // // //   const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
// // // // //   const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
// // // // //   const handleCloseNavMenu = () => setAnchorElNav(null);
// // // // //   const handleCloseUserMenu = () => setAnchorElUser(null);
// // // // //   const handleNavigate = (path) => {
// // // // //     navigate(path);
// // // // //     handleCloseNavMenu();
// // // // //   };

// // // // //   const pages = React.useMemo(
// // // // //     () => [
// // // // //       { name: t("navbar.home"), path: "/" },
// // // // //       { name: t("navbar.about"), path: "/about" },
// // // // //       { name: t("navbar.regions"), path: "/bolgeler" },
// // // // //       { name: t("navbar.blog"), path: "/blog" },
// // // // //       { name: t("navbar.faq"), path: "/faq" },
// // // // //       { name: t("navbar.comments"), path: "/yorum" },
// // // // //     ],
// // // // //     [t, i18n.language]
// // // // //   );

// // // // //   const settings = ["Profile", "Account", "Dashboard", "Logout"];

// // // // //   return (
// // // // //     <AppBar
// // // // //       position="sticky"
// // // // //       elevation={4}
// // // // //       sx={{
// // // // //         top: 0,
// // // // //         zIndex: 1300,
// // // // //         backgroundColor: "#0d1117",
// // // // //         ...animationStyle,
// // // // //       }}
// // // // //     >
// // // // //       <Container maxWidth="xl">
// // // // //         <Toolbar disableGutters>
// // // // //           {/* LOGO (sol üst) */}
// // // // //           <Box
// // // // //             component="img"
// // // // //             src="/images/logo1.png"
// // // // //             alt="logo"
// // // // //             sx={{
// // // // //               height: 60,
// // // // //               width: "auto",
// // // // //               mr: 3,
// // // // //               display: { xs: "none", md: "flex" },
// // // // //               cursor: "pointer",
// // // // //             }}
// // // // //             onClick={() => navigate("/")}
// // // // //           />

// // // // //           {/* Mobil menü butonu */}
// // // // //           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
// // // // //             <IconButton onClick={handleOpenNavMenu} sx={{ color: "#fff" }}>
// // // // //               <MenuIcon />
// // // // //             </IconButton>
// // // // //             <Menu
// // // // //               anchorEl={anchorElNav}
// // // // //               anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
// // // // //               transformOrigin={{ vertical: "top", horizontal: "left" }}
// // // // //               open={Boolean(anchorElNav)}
// // // // //               onClose={handleCloseNavMenu}
// // // // //             >
// // // // //               {pages.map((page) => (
// // // // //                 <MenuItem
// // // // //                   key={page.name}
// // // // //                   onClick={() => handleNavigate(page.path)}
// // // // //                 >
// // // // //                   <Typography textAlign="center">{page.name}</Typography>
// // // // //                 </MenuItem>
// // // // //               ))}
// // // // //             </Menu>
// // // // //           </Box>

// // // // //           {/* Mobilde ortalı bayraklar */}
// // // // //           <Box
// // // // //             sx={{
// // // // //               flexGrow: 1,
// // // // //               display: { xs: "flex", md: "none" },
// // // // //               justifyContent: "center",
// // // // //               alignItems: "center",
// // // // //               gap: 1,
// // // // //             }}
// // // // //           >
// // // // //             {["tr", "en", "de", "ru"].map((lang) => (
// // // // //               <img
// // // // //                 key={lang}
// // // // //                 src={`/flags/${lang}.png`}
// // // // //                 alt={lang}
// // // // //                 width={24}
// // // // //                 onClick={() => i18n.changeLanguage(lang)}
// // // // //                 style={{ cursor: "pointer" }}
// // // // //               />
// // // // //             ))}
// // // // //           </Box>

// // // // //           {/* Masaüstü menü - SOLDA */}
// // // // //           <Box
// // // // //             sx={{
// // // // //               flexGrow: 1,
// // // // //               display: { xs: "none", md: "flex" },
// // // // //               justifyContent: "flex-start",
// // // // //               gap: 2,
// // // // //             }}
// // // // //           >
// // // // //             {pages.map((page) => (
// // // // //               <Button
// // // // //                 key={page.name}
// // // // //                 onClick={() => handleNavigate(page.path)}
// // // // //                 sx={{
// // // // //                   my: 2,
// // // // //                   color: "#fff",
// // // // //                   fontWeight: "bold",
// // // // //                   fontSize: "1rem",
// // // // //                   px: 3,
// // // // //                   py: 1.5,
// // // // //                   "&:hover": {
// // // // //                     backgroundColor: "rgba(255,255,255,0.2)",
// // // // //                   },
// // // // //                 }}
// // // // //               >
// // // // //                 {page.name}
// // // // //               </Button>
// // // // //             ))}
// // // // //           </Box>

// // // // //           {/* Masaüstü bayraklar */}
// // // // //           <Box
// // // // //             sx={{
// // // // //               display: { xs: "none", md: "flex" },
// // // // //               alignItems: "center",
// // // // //               gap: 1,
// // // // //               mr: 2,
// // // // //             }}
// // // // //           >
// // // // //             {["tr", "en", "de", "ru"].map((lang) => (
// // // // //               <img
// // // // //                 key={lang}
// // // // //                 src={`/flags/${lang}.png`}
// // // // //                 alt={lang}
// // // // //                 width={24}
// // // // //                 onClick={() => i18n.changeLanguage(lang)}
// // // // //                 style={{ cursor: "pointer" }}
// // // // //               />
// // // // //             ))}
// // // // //           </Box>

// // // // //           {/* Kullanıcı menüsü */}
// // // // //           <Box sx={{ flexGrow: 0 }}>
// // // // //             <Tooltip title="Open settings">
// // // // //               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
// // // // //                 <Avatar alt="User" src="/static/images/avatar/2.jpg" />
// // // // //               </IconButton>
// // // // //             </Tooltip>
// // // // //             <Menu
// // // // //               anchorEl={anchorElUser}
// // // // //               open={Boolean(anchorElUser)}
// // // // //               onClose={handleCloseUserMenu}
// // // // //               sx={{ mt: "45px" }}
// // // // //             >
// // // // //               {settings.map((setting) => (
// // // // //                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
// // // // //                   <Typography textAlign="center">{setting}</Typography>
// // // // //                 </MenuItem>
// // // // //               ))}
// // // // //             </Menu>
// // // // //           </Box>
// // // // //         </Toolbar>
// // // // //       </Container>
// // // // //     </AppBar>
// // // // //   );
// // // // // }

// // // // // export default Navbar;
// // // // import * as React from "react";
// // // // import {
// // // //   AppBar,
// // // //   Box,
// // // //   Toolbar,
// // // //   IconButton,
// // // //   Menu,
// // // //   Container,
// // // //   Avatar,
// // // //   Button,
// // // //   Tooltip,
// // // //   MenuItem,
// // // //   Typography,
// // // // } from "@mui/material";
// // // // import MenuIcon from "@mui/icons-material/Menu";
// // // // import useAuthCalls from "../service/useAuthCalls";
// // // // import { useNavigate } from "react-router-dom";
// // // // import { useTranslation } from "react-i18next";
// // // // import i18n from "i18next";

// // // // const Navbar = () => {
// // // //   const { logout } = useAuthCalls();
// // // //   const navigate = useNavigate();
// // // //   const { t } = useTranslation();

// // // //   const [anchorElNav, setAnchorElNav] = React.useState(null);
// // // //   const [anchorElUser, setAnchorElUser] = React.useState(null);

// // // //   const handleOpenNavMenu = (e) => setAnchorElNav(e.currentTarget);
// // // //   const handleOpenUserMenu = (e) => setAnchorElUser(e.currentTarget);
// // // //   const handleCloseNavMenu = () => setAnchorElNav(null);
// // // //   const handleCloseUserMenu = () => setAnchorElUser(null);

// // // //   const handleNavigate = (path) => {
// // // //     navigate(path);
// // // //     handleCloseNavMenu();
// // // //   };

// // // //   const pages = React.useMemo(
// // // //     () => [
// // // //       { name: t("navbar.home"), path: "/" },
// // // //       { name: t("navbar.about"), path: "/about" },
// // // //       { name: t("navbar.regions"), path: "/bolgeler" },
// // // //       { name: t("navbar.blog"), path: "/blog" },
// // // //       { name: t("navbar.faq"), path: "/faq" },
// // // //       { name: t("navbar.comments"), path: "/yorum" },
// // // //     ],
// // // //     [t, i18n.language]
// // // //   );

// // // //   const settings = ["Profile", "Account", "Dashboard", "Logout"];

// // // //   return (
// // // //     <AppBar
// // // //       position="sticky"
// // // //       elevation={4}
// // // //       sx={{
// // // //         backgroundColor: "#111827",
// // // //         zIndex: 1300,
// // // //       }}
// // // //     >
// // // //       <Container maxWidth="xl">
// // // //         <Toolbar
// // // //           disableGutters
// // // //           sx={{ height: 80, display: "flex", alignItems: "center" }}
// // // //         >
// // // //           {/* LOGO */}
// // // //           <Box
// // // //             component="img"
// // // //             src="/images/result6.png"
// // // //             alt="logo"
// // // //             sx={{
// // // //               height: 100,
// // // //               width: "auto",
// // // //               mr: 1,
// // // //               ml: 2,
// // // //               display: { xs: "none", md: "flex" },
// // // //               cursor: "pointer",
// // // //               objectFit: "contain",
// // // //             }}
// // // //             onClick={() => navigate("/")}
// // // //           />

// // // //           <Box
// // // //             sx={{
// // // //               display: { xs: "none", md: "flex" },
// // // //               flexDirection: "column",
// // // //               justifyContent: "center",
// // // //               color: "#fff",
// // // //               mr: 3,
// // // //             }}
// // // //           >
// // // //             <Typography variant="h6" sx={{ fontWeight: "bold", lineHeight: 1 }}>
// // // //               ANTALYA AIR
// // // //             </Typography>
// // // //             <Typography
// // // //               variant="body2"
// // // //               sx={{ fontSize: "0.8rem", color: "gray.300" }}
// // // //             >
// // // //               VIP TRANSFER
// // // //             </Typography>
// // // //           </Box>

// // // //           {/* MOBİL MENÜ */}
// // // //           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
// // // //             <IconButton onClick={handleOpenNavMenu} sx={{ color: "#fff" }}>
// // // //               <MenuIcon />
// // // //             </IconButton>
// // // //             <Menu
// // // //               anchorEl={anchorElNav}
// // // //               open={Boolean(anchorElNav)}
// // // //               onClose={handleCloseNavMenu}
// // // //               anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
// // // //               transformOrigin={{ vertical: "top", horizontal: "left" }}
// // // //             >
// // // //               {pages.map((page) => (
// // // //                 <MenuItem
// // // //                   key={page.name}
// // // //                   onClick={() => handleNavigate(page.path)}
// // // //                 >
// // // //                   <Typography textAlign="center">{page.name}</Typography>
// // // //                 </MenuItem>
// // // //               ))}
// // // //             </Menu>
// // // //           </Box>

// // // //           {/* MOBİLDE ORTALI BAYRAKLAR */}
// // // //           <Box
// // // //             sx={{
// // // //               flexGrow: 1,
// // // //               display: { xs: "flex", md: "none" },
// // // //               justifyContent: "center",
// // // //               alignItems: "center",
// // // //               gap: 3, // aralığı artırdık
// // // //               py: 1,
// // // //             }}
// // // //           >
// // // //             {["tr", "en", "de", "ru"].map((lang) => (
// // // //               <img
// // // //                 key={lang}
// // // //                 src={`/flags/${lang}.png`}
// // // //                 alt={lang}
// // // //                 width={30} // boyutu artırdık
// // // //                 height={20}
// // // //                 onClick={() => i18n.changeLanguage(lang)}
// // // //                 style={{ cursor: "pointer" }}
// // // //               />
// // // //             ))}
// // // //           </Box>

// // // //           {/* MASAÜSTÜ MENÜ */}
// // // //           <Box
// // // //             sx={{
// // // //               flexGrow: 1,
// // // //               display: { xs: "none", md: "flex" },
// // // //               justifyContent: "flex-start",
// // // //               alignItems: "center",
// // // //               gap: 2,
// // // //             }}
// // // //           >
// // // //             {pages.map((page) => (
// // // //               <Button
// // // //                 key={page.name}
// // // //                 onClick={() => handleNavigate(page.path)}
// // // //                 sx={{
// // // //                   my: 2,
// // // //                   color: "#fff",
// // // //                   fontWeight: "bold",
// // // //                   fontSize: "1rem",
// // // //                   px: 3,
// // // //                   py: 1.5,
// // // //                   "&:hover": {
// // // //                     backgroundColor: "rgba(255,255,255,0.2)",
// // // //                   },
// // // //                 }}
// // // //               >
// // // //                 {page.name}
// // // //               </Button>
// // // //             ))}
// // // //           </Box>

// // // //           {/* MASAÜSTÜ BAYRAKLAR */}
// // // //           <Box
// // // //             sx={{
// // // //               display: { xs: "none", md: "flex" },
// // // //               alignItems: "center",
// // // //               gap: 1,
// // // //               ml: 2,
// // // //             }}
// // // //           >
// // // //             {["tr", "en", "de", "ru"].map((lang) => (
// // // //               <img
// // // //                 key={lang}
// // // //                 src={`/flags/${lang}.png`}
// // // //                 alt={lang}
// // // //                 width={24}
// // // //                 onClick={() => i18n.changeLanguage(lang)}
// // // //                 style={{ cursor: "pointer" }}
// // // //               />
// // // //             ))}
// // // //           </Box>

// // // //           {/* USER AVATAR */}
// // // //           <Box sx={{ flexGrow: 0 }}>
// // // //             <Tooltip title="Ayarlar">
// // // //               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
// // // //                 <Avatar alt="User" src="/static/images/avatar/2.jpg" />
// // // //               </IconButton>
// // // //             </Tooltip>
// // // //             <Menu
// // // //               anchorEl={anchorElUser}
// // // //               open={Boolean(anchorElUser)}
// // // //               onClose={handleCloseUserMenu}
// // // //               sx={{ mt: "45px" }}
// // // //             >
// // // //               {settings.map((setting) => (
// // // //                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
// // // //                   <Typography textAlign="center">{setting}</Typography>
// // // //                 </MenuItem>
// // // //               ))}
// // // //             </Menu>
// // // //           </Box>
// // // //         </Toolbar>
// // // //       </Container>
// // // //     </AppBar>
// // // //   );
// // // // };

// // // // export default Navbar;

// // // import * as React from "react";
// // // import {
// // //   AppBar,
// // //   Box,
// // //   Toolbar,
// // //   IconButton,
// // //   Menu,
// // //   Container,
// // //   Avatar,
// // //   Button,
// // //   Tooltip,
// // //   MenuItem,
// // //   Typography,
// // // } from "@mui/material";
// // // import MenuIcon from "@mui/icons-material/Menu";
// // // import useAuthCalls from "../service/useAuthCalls";
// // // import { useNavigate } from "react-router-dom";
// // // import { useTranslation } from "react-i18next";
// // // import i18n from "i18next";

// // // const Navbar = () => {
// // //   const { logout } = useAuthCalls();
// // //   const navigate = useNavigate();
// // //   const { t } = useTranslation();

// // //   const [anchorElNav, setAnchorElNav] = React.useState(null);
// // //   const [anchorElUser, setAnchorElUser] = React.useState(null);

// // //   const handleOpenNavMenu = (e) => setAnchorElNav(e.currentTarget);
// // //   const handleOpenUserMenu = (e) => setAnchorElUser(e.currentTarget);
// // //   const handleCloseNavMenu = () => setAnchorElNav(null);
// // //   const handleCloseUserMenu = () => setAnchorElUser(null);

// // //   const handleNavigate = (path) => {
// // //     navigate(path);
// // //     handleCloseNavMenu();
// // //   };

// // //   const pages = React.useMemo(
// // //     () => [
// // //       { name: t("navbar.home"), path: "/" },
// // //       { name: t("navbar.about"), path: "/about" },
// // //       { name: t("navbar.regions"), path: "/bolgeler" },
// // //       { name: t("navbar.blog"), path: "/blog" },
// // //       { name: t("navbar.faq"), path: "/faq" },
// // //       { name: t("navbar.comments"), path: "/yorum" },
// // //     ],
// // //     [t, i18n.language]
// // //   );

// // //   const settings = ["Profile", "Account", "Dashboard", "Logout"];

// // //   return (
// // //     <AppBar
// // //       position="sticky"
// // //       elevation={4}
// // //       sx={{
// // //         backgroundColor: "#111827",
// // //         zIndex: 1300,
// // //       }}
// // //     >
// // //       <Container maxWidth="xl">
// // //         <Toolbar
// // //           disableGutters
// // //           sx={{ height: 80, display: "flex", alignItems: "center", width: "100%" }}
// // //         >
// // //           {/* MOBİL: SOLDA AVATAR */}
// // //           <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
// // //             <Tooltip title="Ayarlar">
// // //               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
// // //                 <Avatar alt="User" src="/static/images/avatar/2.jpg" />
// // //               </IconButton>
// // //             </Tooltip>
// // //             <Menu
// // //               anchorEl={anchorElUser}
// // //               open={Boolean(anchorElUser)}
// // //               onClose={handleCloseUserMenu}
// // //               sx={{ mt: "45px" }}
// // //             >
// // //               {settings.map((setting) => (
// // //                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
// // //                   <Typography textAlign="center">{setting}</Typography>
// // //                 </MenuItem>
// // //               ))}
// // //             </Menu>
// // //           </Box>

// // //           {/* MOBİL: ORTA BAYRAKLAR */}
// // //           <Box
// // //             sx={{
// // //               flexGrow: 1,
// // //               display: { xs: "flex", md: "none" },
// // //               justifyContent: "center",
// // //               alignItems: "center",
// // //               gap: 3,
// // //               py: 1,
// // //             }}
// // //           >
// // //             {["tr", "en", "de", "ru"].map((lang) => (
// // //               <img
// // //                 key={lang}
// // //                 src={`/flags/${lang}.png`}
// // //                 alt={lang}
// // //                 width={30}
// // //                 height={20}
// // //                 onClick={() => i18n.changeLanguage(lang)}
// // //                 style={{ cursor: "pointer" }}
// // //               />
// // //             ))}
// // //           </Box>

// // //           {/* MOBİL: SAĞDA MENÜ BUTONU */}
// // //           <Box sx={{ display: { xs: "flex", md: "none" }, ml: 1 }}>
// // //             <IconButton onClick={handleOpenNavMenu} sx={{ color: "#fff" }}>
// // //               <MenuIcon />
// // //             </IconButton>
// // //             <Menu
// // //               anchorEl={anchorElNav}
// // //               open={Boolean(anchorElNav)}
// // //               onClose={handleCloseNavMenu}
// // //               anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
// // //               transformOrigin={{ vertical: "top", horizontal: "right" }}
// // //             >
// // //               {pages.map((page) => (
// // //                 <MenuItem key={page.name} onClick={() => handleNavigate(page.path)}>
// // //                   <Typography textAlign="center">{page.name}</Typography>
// // //                 </MenuItem>
// // //               ))}
// // //             </Menu>
// // //           </Box>

// // //           {/* MASAÜSTÜ: LOGO + YAZI */}
// // //           <Box
// // //             component="img"
// // //             src="/images/logo1.png"
// // //             alt="logo"
// // //             sx={{
// // //               height: 60,
// // //               width: "auto",
// // //               mr: 1,
// // //               ml: 2,
// // //               display: { xs: "none", md: "flex" },
// // //               cursor: "pointer",
// // //             }}
// // //             onClick={() => navigate("/")}
// // //           />
// // //           <Box
// // //             sx={{
// // //               display: { xs: "none", md: "flex" },
// // //               flexDirection: "column",
// // //               justifyContent: "center",
// // //               color: "#fff",
// // //               mr: 3,
// // //             }}
// // //           >
// // //             <Typography variant="h6" sx={{ fontWeight: "bold", lineHeight: 1 }}>
// // //               ANTALYA AIR
// // //             </Typography>
// // //             <Typography
// // //               variant="body2"
// // //               sx={{ fontSize: "0.8rem", color: "gray.300" }}
// // //             >
// // //               VIP TRANSFER
// // //             </Typography>
// // //           </Box>

// // //           {/* MASAÜSTÜ: MENÜ */}
// // //           <Box
// // //             sx={{
// // //               flexGrow: 1,
// // //               display: { xs: "none", md: "flex" },
// // //               justifyContent: "flex-start",
// // //               alignItems: "center",
// // //               gap: 2,
// // //             }}
// // //           >
// // //             {pages.map((page) => (
// // //               <Button
// // //                 key={page.name}
// // //                 onClick={() => handleNavigate(page.path)}
// // //                 sx={{
// // //                   my: 2,
// // //                   color: "#fff",
// // //                   fontWeight: "bold",
// // //                   fontSize: "1rem",
// // //                   px: 3,
// // //                   py: 1.5,
// // //                   "&:hover": {
// // //                     backgroundColor: "rgba(255,255,255,0.2)",
// // //                   },
// // //                 }}
// // //               >
// // //                 {page.name}
// // //               </Button>
// // //             ))}
// // //           </Box>

// // //           {/* MASAÜSTÜ: BAYRAKLAR */}
// // //           <Box
// // //             sx={{
// // //               display: { xs: "none", md: "flex" },
// // //               alignItems: "center",
// // //               gap: 1,
// // //               ml: 2,
// // //             }}
// // //           >
// // //             {["tr", "en", "de", "ru"].map((lang) => (
// // //               <img
// // //                 key={lang}
// // //                 src={`/flags/${lang}.png`}
// // //                 alt={lang}
// // //                 width={24}
// // //                 onClick={() => i18n.changeLanguage(lang)}
// // //                 style={{ cursor: "pointer" }}
// // //               />
// // //             ))}
// // //           </Box>
// // //         </Toolbar>
// // //       </Container>
// // //     </AppBar>
// // //   );
// // // };

// // // export default Navbar;

// // import * as React from "react";
// // import {
// //   AppBar,
// //   Box,
// //   Toolbar,
// //   IconButton,
// //   Menu,
// //   Container,
// //   Avatar,
// //   Button,
// //   Tooltip,
// //   MenuItem,
// //   Typography,
// // } from "@mui/material";
// // import MenuIcon from "@mui/icons-material/Menu";
// // import useAuthCalls from "../service/useAuthCalls";
// // import { useNavigate } from "react-router-dom";
// // import { useTranslation } from "react-i18next";
// // import i18n from "i18next";
// // import { useSelector } from "react-redux";

// // const Navbar = () => {
// //   const { logout } = useAuthCalls();
// //   const navigate = useNavigate();
// //   const { t } = useTranslation();
// //   const { user } = useSelector((state) => state.auth);

// //   const [anchorElNav, setAnchorElNav] = React.useState(null);
// //   const [anchorElUser, setAnchorElUser] = React.useState(null);

// //   const handleOpenNavMenu = (e) => setAnchorElNav(e.currentTarget);
// //   const handleOpenUserMenu = (e) => setAnchorElUser(e.currentTarget);
// //   const handleCloseNavMenu = () => setAnchorElNav(null);
// //   const handleCloseUserMenu = () => setAnchorElUser(null);

// //   const handleNavigate = (path) => {
// //     navigate(path);
// //     handleCloseNavMenu();
// //   };

// //   const pages = React.useMemo(
// //     () => [
// //       { name: t("navbar.home"), path: "/" },
// //       { name: t("navbar.about"), path: "/about" },
// //       { name: t("navbar.regions"), path: "/bolgeler" },
// //       { name: t("navbar.blog"), path: "/blog" },
// //       { name: t("navbar.faq"), path: "/faq" },
// //       { name: t("navbar.comments"), path: "/yorum" },
// //     ],
// //     [t, i18n.language]
// //   );

// //   return (
// //     <AppBar position="sticky" elevation={4} sx={{ backgroundColor: "#111827", zIndex: 1300 }}>
// //       <Container maxWidth="xl">
// //         <Toolbar disableGutters sx={{ height: 80, display: "flex", alignItems: "center" }}>
// //           {/* Mobil Menü Butonu */}
// //           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
// //             <IconButton onClick={handleOpenNavMenu} sx={{ color: "#fff" }}>
// //               <MenuIcon />
// //             </IconButton>
// //             <Menu
// //               anchorEl={anchorElNav}
// //               open={Boolean(anchorElNav)}
// //               onClose={handleCloseNavMenu}
// //               anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
// //               transformOrigin={{ vertical: "top", horizontal: "left" }}
// //             >
// //               {pages.map((page) => (
// //                 <MenuItem key={page.name} onClick={() => handleNavigate(page.path)}>
// //                   <Typography textAlign="center">{page.name}</Typography>
// //                 </MenuItem>
// //               ))}
// //             </Menu>
// //           </Box>

// //           {/* Mobilde Ortalı Bayraklar */}
// //           <Box
// //             sx={{
// //               flexGrow: 1,
// //               display: { xs: "flex", md: "none" },
// //               justifyContent: "center",
// //               alignItems: "center",
// //               gap: 3,
// //               py: 1,
// //             }}
// //           >
// //             {["tr", "en", "de", "ru"].map((lang) => (
// //               <img
// //                 key={lang}
// //                 src={`/flags/${lang}.png`}
// //                 alt={lang}
// //                 width={30}
// //                 height={20}
// //                 onClick={() => i18n.changeLanguage(lang)}
// //                 style={{ cursor: "pointer" }}
// //               />
// //             ))}
// //           </Box>

// //           {/* Masaüstü Menü */}
// //           <Box
// //             sx={{
// //               flexGrow: 1,
// //               display: { xs: "none", md: "flex" },
// //               justifyContent: "flex-start",
// //               alignItems: "center",
// //               gap: 2,
// //             }}
// //           >
// //             {pages.map((page) => (
// //               <Button
// //                 key={page.name}
// //                 onClick={() => handleNavigate(page.path)}
// //                 sx={{
// //                   my: 2,
// //                   color: "#fff",
// //                   fontWeight: "bold",
// //                   fontSize: "1rem",
// //                   px: 3,
// //                   py: 1.5,
// //                   "&:hover": {
// //                     backgroundColor: "rgba(255,255,255,0.2)",
// //                   },
// //                 }}
// //               >
// //                 {page.name}
// //               </Button>
// //             ))}
// //           </Box>

// //           {/* Masaüstü Bayraklar */}
// //           <Box
// //             sx={{
// //               display: { xs: "none", md: "flex" },
// //               alignItems: "center",
// //               gap: 1,
// //               ml: 2,
// //             }}
// //           >
// //             {["tr", "en", "de", "ru"].map((lang) => (
// //               <img
// //                 key={lang}
// //                 src={`/flags/${lang}.png`}
// //                 alt={lang}
// //                 width={24}
// //                 onClick={() => i18n.changeLanguage(lang)}
// //                 style={{ cursor: "pointer" }}
// //               />
// //             ))}
// //           </Box>

// //           {/* Avatar veya Logo */}
// //           <Box sx={{ flexGrow: 0 }}>
// //             {user ? (
// //               <>
// //                 <Tooltip title="Hesap">
// //                   <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
// //                     <Avatar>{user?.username?.charAt(0).toUpperCase() || "U"}</Avatar>
// //                   </IconButton>
// //                 </Tooltip>
// //                 <Menu
// //                   anchorEl={anchorElUser}
// //                   open={Boolean(anchorElUser)}
// //                   onClose={handleCloseUserMenu}
// //                   sx={{ mt: "45px" }}
// //                 >
// //                   <MenuItem
// //                     onClick={() => {
// //                       handleCloseUserMenu();
// //                       logout();
// //                     }}
// //                   >
// //                     <Typography textAlign="center">Logout</Typography>
// //                   </MenuItem>
// //                 </Menu>
// //               </>
// //             ) : (
// //               <Box
// //                 component="img"
// //                 src="/images/result6.png"
// //                 alt="logo"
// //                 sx={{ height: 40, width: "auto", cursor: "pointer" }}
// //                 onClick={() => navigate("/")}
// //               />
// //             )}
// //           </Box>
// //         </Toolbar>
// //       </Container>
// //     </AppBar>
// //   );
// // };

// // export default Navbar;

// import * as React from "react";
// import {
//   AppBar,
//   Box,
//   Toolbar,
//   IconButton,
//   Menu,
//   Container,
//   Avatar,
//   Button,
//   Tooltip,
//   MenuItem,
//   Typography,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import useAuthCalls from "../service/useAuthCalls";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import i18n from "i18next";
// import { useSelector } from "react-redux";

// const Navbar = () => {
//   const { logout } = useAuthCalls();
//   const navigate = useNavigate();
//   const { t } = useTranslation();
//   const { user } = useSelector((state) => state.auth);

//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (e) => setAnchorElNav(e.currentTarget);
//   const handleOpenUserMenu = (e) => setAnchorElUser(e.currentTarget);
//   const handleCloseNavMenu = () => setAnchorElNav(null);
//   const handleCloseUserMenu = () => setAnchorElUser(null);

//   const handleNavigate = (path) => {
//     navigate(path);
//     handleCloseNavMenu();
//   };

//   const pages = React.useMemo(
//     () => [
//       { name: t("navbar.home"), path: "/" },
//       { name: t("navbar.about"), path: "/about" },
//       { name: t("navbar.regions"), path: "/bolgeler" },
//       { name: t("navbar.blog"), path: "/blog" },
//       { name: t("navbar.faq"), path: "/faq" },
//       { name: t("navbar.comments"), path: "/yorum" },
//     ],
//     [t, i18n.language]
//   );

//   return (
//     <AppBar position="sticky" elevation={4} sx={{ backgroundColor: "#111827", zIndex: 1300 }}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters sx={{ height: 80, display: "flex", alignItems: "center" }}>

//           {/* Avatar veya Logo - MOBIL SOLDA */}
//           <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" }, mr: 2 }}>
//             {user ? (
//               <>
//                 <Tooltip title="Hesap">
//                   <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                     <Avatar>{user?.username?.charAt(0).toUpperCase() || "U"}</Avatar>
//                   </IconButton>
//                 </Tooltip>
//                 <Menu
//                   anchorEl={anchorElUser}
//                   open={Boolean(anchorElUser)}
//                   onClose={handleCloseUserMenu}
//                   sx={{ mt: "45px" }}
//                 >
//                   <MenuItem
//                     onClick={() => {
//                       handleCloseUserMenu();
//                       logout();
//                     }}
//                   >
//                     <Typography textAlign="center">Logout</Typography>
//                   </MenuItem>
//                 </Menu>
//               </>
//             ) : (
//               <Box
//                 component="img"
//                 src="/images/result6.png"
//                 alt="logo"
//                 sx={{ height: 50, width: "auto", cursor: "pointer" }}
//                 onClick={() => navigate("/")}
//               />
//             )}
//           </Box>

//           {/* Mobilde Ortalı Bayraklar */}
//           <Box
//             sx={{
//               flexGrow: 1,
//               display: { xs: "flex", md: "none" },
//               justifyContent: "center",
//               alignItems: "center",
//               gap: 3,
//               py: 1,
//             }}
//           >
//             {["tr", "en", "de", "ru"].map((lang) => (
//               <img
//                 key={lang}
//                 src={`/flags/${lang}.png`}
//                 alt={lang}
//                 width={30}
//                 height={20}
//                 onClick={() => i18n.changeLanguage(lang)}
//                 style={{ cursor: "pointer" }}
//               />
//             ))}
//           </Box>

//           {/* Mobil Menü Butonu - SAĞDA */}
//           <Box sx={{ display: { xs: "flex", md: "none" } }}>
//             <IconButton onClick={handleOpenNavMenu} sx={{ color: "#fff" }}>
//               <MenuIcon sx={{ fontSize: 32 }} />
//             </IconButton>
//             <Menu
//               anchorEl={anchorElNav}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//               transformOrigin={{ vertical: "top", horizontal: "right" }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page.name} onClick={() => handleNavigate(page.path)}>
//                   <Typography textAlign="center">{page.name}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//           {/* Masaüstü Menü */}
//           <Box
//             sx={{
//               flexGrow: 1,
//               display: { xs: "none", md: "flex" },
//               justifyContent: "flex-start",
//               alignItems: "center",
//               gap: 2,
//             }}
//           >
//             {pages.map((page) => (
//               <Button
//                 key={page.name}
//                 onClick={() => handleNavigate(page.path)}
//                 sx={{
//                   my: 2,
//                   color: "#fff",
//                   fontWeight: "bold",
//                   fontSize: "1rem",
//                   px: 3,
//                   py: 1.5,
//                   "&:hover": {
//                     backgroundColor: "rgba(255,255,255,0.2)",
//                   },
//                 }}
//               >
//                 {page.name}
//               </Button>
//             ))}
//           </Box>

//           {/* Masaüstü Bayraklar */}
//           <Box
//             sx={{
//               display: { xs: "none", md: "flex" },
//               alignItems: "center",
//               gap: 1,
//               ml: 2,
//             }}
//           >
//             {["tr", "en", "de", "ru"].map((lang) => (
//               <img
//                 key={lang}
//                 src={`/flags/${lang}.png`}
//                 alt={lang}
//                 width={24}
//                 onClick={() => i18n.changeLanguage(lang)}
//                 style={{ cursor: "pointer" }}
//               />
//             ))}
//           </Box>

//           {/* Avatar veya Logo - MASAÜSTÜ SAĞDA */}
//           <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
//             {user ? (
//               <>
//                 <Tooltip title="Hesap">
//                   <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 2 }}>
//                     <Avatar>{user?.username?.charAt(0).toUpperCase() || "U"}</Avatar>
//                   </IconButton>
//                 </Tooltip>
//                 <Menu
//                   anchorEl={anchorElUser}
//                   open={Boolean(anchorElUser)}
//                   onClose={handleCloseUserMenu}
//                   sx={{ mt: "45px" }}
//                 >
//                   <MenuItem
//                     onClick={() => {
//                       handleCloseUserMenu();
//                       logout();
//                     }}
//                   >
//                     <Typography textAlign="center">Logout</Typography>
//                   </MenuItem>
//                 </Menu>
//               </>
//             ) : (
//               <Box
//                 component="img"
//                 src="/images/result6.png"
//                 alt="logo"
//                 sx={{ height: 40, width: "auto", cursor: "pointer", ml: 2 }}
//                 onClick={() => navigate("/")}
//               />
//             )}
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default Navbar;

import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useAuthCalls from "../service/useAuthCalls";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { logout } = useAuthCalls();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user } = useSelector((state) => state.auth);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (e) => setAnchorElNav(e.currentTarget);
  const handleOpenUserMenu = (e) => setAnchorElUser(e.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const handleNavigate = (path) => {
    navigate(path);
    handleCloseNavMenu();
  };

  const pages = React.useMemo(
    () => [
      { name: t("navbar.home"), path: "/" },
      { name: t("navbar.about"), path: "/about" },
      { name: t("navbar.regions"), path: "/bolgeler" },
      { name: t("navbar.blog"), path: "/blog" },
      { name: t("navbar.faq"), path: "/faq" },
      { name: t("navbar.comments"), path: "/yorum" },
    ],
    [t, i18n.language]
  );

  return (
    <AppBar
      position="sticky"
      elevation={4}
      sx={{ backgroundColor: "#111827", zIndex: 1300 }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ height: 80, display: "flex", alignItems: "center" , marginTop: -1}}
        >
          {/* Avatar veya Logo - MOBIL SOLDA */}
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" }, mr: 2 }}>
            {user ? (
              <>
                <Tooltip title="Hesap">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar>
                      {user?.username?.charAt(0).toUpperCase() || "U"}
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  anchorEl={anchorElUser}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                  sx={{ mt: "45px" }}
                >
                  <MenuItem
                    onClick={() => {
                      handleCloseUserMenu();
                      logout();
                    }}
                  >
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Box
                component="img"
                src="/images/result6.png"
                alt="logo"
                sx={{ height: 50, width: "auto", cursor: "pointer" }}
                onClick={() => navigate("/")}
              />
            )}
          </Box>

          {/* Mobilde Ortalı Bayraklar */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
              alignItems: "center",
              gap: 3,
              py: 1,
            }}
          >
            {["tr", "en", "de", "ru"].map((lang) => (
              <img
                key={lang}
                src={`/flags/${lang}.png`}
                alt={lang}
                width={30}
                height={20}
                onClick={() => i18n.changeLanguage(lang)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </Box>

          {/* Mobil Menü Butonu - SAĞDA */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={handleOpenNavMenu} sx={{ color: "#fff" }}>
              <MenuIcon sx={{ fontSize: 32 }} />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => handleNavigate(page.path)}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Masaüstü Yazı - Sol Taraf */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              mr: 4,
              gap: 1.5,
            }}
          >
            <Box
              component="img"
              src="/images/logo5.png" // Buraya ikon görselinin yolunu yaz
              alt="icon"
              sx={{
                height: 70,
                width: 70,
                objectFit: "contain",
              }}
            />
            {/* Yazılar */}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h6"
                sx={{
                  color: "#EAB308",
                  fontSize: "1.5rem",
                  lineHeight: 0.8,
                  letterSpacing: "0.5px",
                }}
              >
                ANTALYA AIR
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#EAB308",
                  fontSize: "1.5rem",
                  letterSpacing: "0.5px",
                }}
              >
                VIP TRANSFER
              </Typography>
            </Box>
          </Box>

          {/* Masaüstü Menü */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 2,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => handleNavigate(page.path)}
                sx={{
                  my: 2,
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  px: 3,
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.2)",
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Masaüstü Bayraklar */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
              ml: 2,
            }}
          >
            {["tr", "en", "de", "ru"].map((lang) => (
              <img
                key={lang}
                src={`/flags/${lang}.png`}
                alt={lang}
                width={24}
                onClick={() => i18n.changeLanguage(lang)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </Box>

          {/* Avatar veya Logo - MASAÜSTÜ SAĞDA */}
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {user ? (
              <>
                <Tooltip title="Hesap">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 2 }}>
                    <Avatar>
                      {user?.username?.charAt(0).toUpperCase() || "U"}
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  anchorEl={anchorElUser}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                  sx={{ mt: "45px" }}
                >
                  <MenuItem
                    onClick={() => {
                      handleCloseUserMenu();
                      logout();
                    }}
                  >
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Box
                component="img"
                src="/images/result6.png"
                alt="logo"
                sx={{ height: 40, width: "auto", cursor: "pointer", ml: 2 }}
                onClick={() => navigate("/")}
              />
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
