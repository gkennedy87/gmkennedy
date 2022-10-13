import { NextPage } from "next";
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Image from "next/image";
import mypic from '../public/assets/mypic.png'

const About: NextPage = () => {
    return (
        <>
            <Typography variant="h1" pt={3}>
                About Me
            </Typography>
            <Image src={mypic} alt="illustration of Grant Kennedy Javascript Developer" height={300} width={300}/>
            <Stack sx={{maxWidth:"60vw"}}>
            <p>Hi there! Welcome to my little slice of the internet. I&apos;m a professional javascript developer, UI/UX designer, and consultant. 
                I&apos;m the owner of Malts & Mash Marketing as well as the CTO of Loyaltea LLC, the company behind the Elities app. 
                I&apos;ve been working in this crazy field since 2013.</p>

            <p>Born and raised in Michigan, I currently reside in Tokyo, Japan with my wife. I speak 3 languages, enjoy Brazilian Jiujitsu and craft beer BUT if you really want me to nerd out just ask me a question about history.</p>

            <p>I hold a Bachelor of Arts from Eastern Michigan University and a whole bunch of certifications for things I&apos;ve learned online like Hubspot&apos;s Inbound Marketing.</p>


            <p>If you&apos;d like to see some of my work, hop on over to my Portfolio page. I try to keep it updated as often as I can. You can also checkout my Github to see my code... if you&apos;re into that sorta thing.</p>

            <p>Finally...</p>

            <p>If you&apos;d like to get in contact with me you can email me at grant@ this domain... or just use the contact form on the Work Together page.</p>
            </Stack>
        </>
    )
}

export default About;