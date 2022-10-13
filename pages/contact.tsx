import { NextPage } from "next";
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import styles from '../styles/Contact.module.css';

const Contact : NextPage = () => {
    const fields = [
        {type: "text", name: "name", required: true, label: "Name"},
        {type: "email", name: "email", required: true, label: "Email", autoComplete: "email"},
        {type: "text", name: "favorite_color", required: false, label: "Favorite color"},
    ]
    return (
        <>
            <Typography variant="h1" pt={3}>
                Contact Me
            </Typography>
            <Typography variant="h2" gutterBottom>
                Let&apos;s work together
            </Typography>
            <Stack>
                <Stack direction="row">
                    <IconButton size='large' className={styles.socialIcon}>
                        <a href='https://linkedin.com/in/grantkennedy1' hidden></a>
                        <LinkedInIcon/>
                    </IconButton>
                    <IconButton size='large' className={styles.socialIcon}>
                        <a href='www.instagram.com/thegrantkennedy/' hidden></a>
                        <InstagramIcon />
                    </IconButton>
                    <IconButton size='large' className={styles.socialIcon}>
                        <a href='https://github.com/gkennedy87' hidden></a>
                        <GitHubIcon />
                    </IconButton>
                </Stack>
                <Stack>
                </Stack>
            </Stack>
        </>
    )
}

export default Contact;