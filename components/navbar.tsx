import styles from '../styles/navbar.module.css'
import {useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer'


const navlinks:{title:string, url:string}[] = [
    {title:"Portfolio", url:"/portfolio"},
    {title:"About", url:"/about"},
    {title:"Blog", url:"https://medium.com/@malts_and_mash"},
    {title:"Work Together", url:"/contact"}
]

const Title:string = "{Grant Kennedy}"
const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const handleOpenNavMenu = (event:any) => {
        setAnchorElNav(event.currentTarget);
      };
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
    return (
        <nav>
            <AppBar position="fixed" color="inherit" sx={{color:"#1c1c1c"}} elevation={1}>
                <Container sx={{width:"100%"}}>
                    <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                       {Title}
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', s:'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="hamburger menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                        <MenuIcon />
                        </IconButton>
                        <Drawer
                            id="menu-appbar"
                            variant='temporary'
                            anchor='left'
                            keepMounted
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', s:'block', md: 'none' },
                            }}
                            PaperProps={{sx:{width:200, padding:"1rem"}}}
                        >
                        {navlinks.map((link) => (
                            <MenuItem key={navlinks.indexOf(link)} onClick={handleCloseNavMenu}>
                            <Typography component="a" href={link.url} textAlign="center" sx={{color:"#1c1c1c",fontSize:"1.2rem"}}>{link.title}</Typography>
                            </MenuItem>
                        ))}
                        </Drawer>
                    </Box>
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        fontSize:'1.25rem',
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        {Title}
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:{md:'flex-end'} }}>
                        {navlinks.map((link) => (
                        <Button
                            href={link.url}
                            key={navlinks.indexOf(link)}
                            onClick={handleCloseNavMenu}
                            className={styles.links}
                            sx={{ my: 2, color: '#1c1c1c', display: 'block' }}
                        >
                            {link.title}
                        </Button>
                        ))}
                    </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </nav>
    )
}

export default Navbar