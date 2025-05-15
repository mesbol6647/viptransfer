
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
