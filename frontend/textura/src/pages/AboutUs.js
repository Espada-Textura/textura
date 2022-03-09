import TexturaLogo from '@assets/logo.png'
import EspadaLogo from '@images/Espada.svg'
import { FiMail } from 'react-icons/fi'
import { FaFacebookSquare } from 'react-icons/fa'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { getCookie } from '@utils/helper'

import Chip from '@mui/material/Chip'
import '@styles/pages/AboutUs.css'
import { getAccordionActionsUtilityClass } from '@mui/material'
import { useEffect, useState } from 'react'
import { margin } from '@mui/system'

function AboutUs() {
    let coders = [
        {
            login: 'NirPisatto',
            id: 76983137,
            node_id: 'MDQ6VXNlcjc2OTgzMTM3',
            avatar_url: 'https://avatars.githubusercontent.com/u/76983137?v=4',
            url: 'https://api.github.com/users/NirPisatto',
            html_url: 'https://github.com/NirPisatto',
            followers_url: 'https://api.github.com/users/NirPisatto/followers',
            following_url:
                'https://api.github.com/users/NirPisatto/following{/other_user}',
            gists_url:
                'https://api.github.com/users/NirPisatto/gists{/gist_id}',
            starred_url:
                'https://api.github.com/users/NirPisatto/starred{/owner}{/repo}',
            subscriptions_url:
                'https://api.github.com/users/NirPisatto/subscriptions',
            organizations_url: 'https://api.github.com/users/NirPisatto/orgs',
            repos_url: 'https://api.github.com/users/NirPisatto/repos',
            events_url:
                'https://api.github.com/users/NirPisatto/events{/privacy}',
            received_events_url:
                'https://api.github.com/users/NirPisatto/received_events',
            type: 'User',
            site_admin: false,
            name: 'Pisatto',
            company: null,
            blog: '',
            location: null,
            email: null,
            hireable: null,
            bio: 'Hi, I dislike combination of words but unfortunately I am a code engineer. My favourite programming languages are JavaScript and Python. I am currently a frontend web engineer mainly working with Vue.js.',
            twitter_username: null,
            public_repos: 4,
            public_gists: 0,
            followers: 0,
            following: 0,
            created_at: '2021-01-05T02:53:30Z',
            updated_at: '2022-03-04T06:02:39Z',
            skills: [
                'JavaScript',
                'Python',
                'C/C++',
                'PHP',
                'SQL',
                'Firebase',
                'APIs',
                'Bootstrap',
                'Material Ui',
                'React.js',
                'Vue.js',
            ],
        },
        {
            login: 'hoklenghak',
            id: 89648857,
            node_id: 'MDQ6VXNlcjg5NjQ4ODU3',
            avatar_url: 'https://avatars.githubusercontent.com/u/89648857?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/hoklenghak',
            html_url: 'https://github.com/hoklenghak',
            followers_url: 'https://api.github.com/users/hoklenghak/followers',
            following_url:
                'https://api.github.com/users/hoklenghak/following{/other_user}',
            gists_url:
                'https://api.github.com/users/hoklenghak/gists{/gist_id}',
            starred_url:
                'https://api.github.com/users/hoklenghak/starred{/owner}{/repo}',
            subscriptions_url:
                'https://api.github.com/users/hoklenghak/subscriptions',
            organizations_url: 'https://api.github.com/users/hoklenghak/orgs',
            repos_url: 'https://api.github.com/users/hoklenghak/repos',
            events_url:
                'https://api.github.com/users/hoklenghak/events{/privacy}',
            received_events_url:
                'https://api.github.com/users/hoklenghak/received_events',
            type: 'User',
            site_admin: false,
            name: 'Lenghak Hok',
            company: null,
            blog: '',
            location: null,
            email: null,
            hireable: null,
            bio: null,
            twitter_username: null,
            public_repos: 1,
            public_gists: 0,
            followers: 0,
            following: 0,
            created_at: '2021-08-27T14:14:19Z',
            updated_at: '2022-01-05T13:35:18Z',
            skills: [],
        },
        {
            login: 'ChamroeunProMaxQ',
            id: 89696388,
            node_id: 'MDQ6VXNlcjg5Njk2Mzg4',
            avatar_url: 'https://avatars.githubusercontent.com/u/89696388?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/ChamroeunProMaxQ',
            html_url: 'https://github.com/ChamroeunProMaxQ',
            followers_url:
                'https://api.github.com/users/ChamroeunProMaxQ/followers',
            following_url:
                'https://api.github.com/users/ChamroeunProMaxQ/following{/other_user}',
            gists_url:
                'https://api.github.com/users/ChamroeunProMaxQ/gists{/gist_id}',
            starred_url:
                'https://api.github.com/users/ChamroeunProMaxQ/starred{/owner}{/repo}',
            subscriptions_url:
                'https://api.github.com/users/ChamroeunProMaxQ/subscriptions',
            organizations_url:
                'https://api.github.com/users/ChamroeunProMaxQ/orgs',
            repos_url: 'https://api.github.com/users/ChamroeunProMaxQ/repos',
            events_url:
                'https://api.github.com/users/ChamroeunProMaxQ/events{/privacy}',
            received_events_url:
                'https://api.github.com/users/ChamroeunProMaxQ/received_events',
            type: 'User',
            site_admin: false,
            name: null,
            company: null,
            blog: '',
            location: null,
            email: null,
            hireable: null,
            bio: null,
            twitter_username: null,
            public_repos: 0,
            public_gists: 0,
            followers: 0,
            following: 0,
            created_at: '2021-08-28T14:23:56Z',
            updated_at: '2022-02-15T14:26:24Z',
            skills: [],
        },
        {
            login: 'YornChanvisal',
            id: 89696454,
            node_id: 'MDQ6VXNlcjg5Njk2NDU0',
            avatar_url: 'https://avatars.githubusercontent.com/u/89696454?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/YornChanvisal',
            html_url: 'https://github.com/YornChanvisal',
            followers_url:
                'https://api.github.com/users/YornChanvisal/followers',
            following_url:
                'https://api.github.com/users/YornChanvisal/following{/other_user}',
            gists_url:
                'https://api.github.com/users/YornChanvisal/gists{/gist_id}',
            starred_url:
                'https://api.github.com/users/YornChanvisal/starred{/owner}{/repo}',
            subscriptions_url:
                'https://api.github.com/users/YornChanvisal/subscriptions',
            organizations_url:
                'https://api.github.com/users/YornChanvisal/orgs',
            repos_url: 'https://api.github.com/users/YornChanvisal/repos',
            events_url:
                'https://api.github.com/users/YornChanvisal/events{/privacy}',
            received_events_url:
                'https://api.github.com/users/YornChanvisal/received_events',
            type: 'User',
            site_admin: false,
            name: null,
            company: null,
            blog: '',
            location: null,
            email: null,
            hireable: null,
            bio: null,
            twitter_username: null,
            public_repos: 1,
            public_gists: 0,
            followers: 0,
            following: 0,
            created_at: '2021-08-28T14:25:43Z',
            updated_at: '2022-02-19T14:07:26Z',
            skills: [],
        },
    ]

    return (
        <div className="aboutUs-main-layout">
            <section className="aboutUs-info pb-5 pt-5 col-12 d-flex flex-row justify-content-center">
                <div className="d-flex flex-column flex-md-row m-4 align-items-center col-10">
                    <div className="aboutUs-logo-part d-flex p-5 pb-0 pt-0 p-md-3 p-xl-0 justify-content-center">
                        <img
                            className="aboutUs-logo"
                            src={TexturaLogo}
                            alt="Textura Logo"
                        ></img>
                    </div>
                    <div className="aboutUs-info-part p-0 p-md-5 pt-0 pb-0 pb-md-0 pt-md-0 pr-0">
                        <h4 className="info-title text-center text-md-start pt-4 pt-md-0">
                            TEXTURA
                        </h4>
                        <p className="info-text">
                            Textura is a place, likely a community, for our
                            Cambodian Artists to share their arts, earn
                            recognition, express feeling and emotion through
                            art, and more importantly is to improve the artist
                            community in Cambodia. Textura mainly focuses on
                            Digital Art and Digital painting. We are developing
                            and growing bigger and will add more than just
                            Digital Arts.
                        </p>
                    </div>
                </div>
            </section>
            <section className="aboutUs-dev-team-info p-5 pt-3 pb-3">
                <div className="col-12 text-center">
                    <h3 className=" pt-4 pb-4 text-uppercase">development</h3>
                </div>
                <div className="d-flex justify-content-center flex-nowrap mt-3 mb-3">
                    <img
                        className="dev-team-profile"
                        src={EspadaLogo}
                        alt="Espada Logo"
                    ></img>
                </div>
                <div className="flex align-items-center justify-content-center">
                    <h4 className="text-center pt-3 pb-3">
                        <b>ESPADA TEAM</b>
                    </h4>
                    <p className="info-text mb-4 mt-0 pt-0 text-center">
                        ESPADA is a team of four students majors in department
                        of Information Technology Engineering, Royal University
                        of Phnom Penh, Cambodia.
                        <br></br>We are developing techs to help people.
                    </p>
                </div>
            </section>
            <section className="aboutUs-dev-members-info col-12 d-flex justify-content-center p-5 pb-5 pt-5 ">
                <div
                    className="col-12 aboutUs-team-layout"
                    sx={{ borderRadius: 2 }}
                >
                    <div className=" pd-3">
                        <h2 className="dev-info-title pt-5 pb-5 text-uppercase">
                            All contributors
                        </h2>
                    </div>
                    <div className="d-flex justify-content-around flex-wrap pb-3">
                        {/* <div className="col-12 col-md-4 mb-3 text-center">
                            <img
                                className="col-12"
                                src={EspadaLogo}
                                alt="Espada Logo"
                            ></img>
                        </div>
                        <div className="col-12 col-md-8">
                            <h4 className="dev-name mb-3">
                                <b>Misa Pisatto</b>
                            </h4>
                            <h5 className="dev-role mb-3">
                                Fullstack Developer
                            </h5>
                            <p className="mb-4">Im handsome.</p>
                            <div className="contact">
                                <FiMail size={30} />
                                <FaFacebookSquare size={26} />
                            </div>
                        </div> */}
                        {coders.map((coder) => (
                            <Card
                                className="col-3 m-3 aboutUs-none-fileter"
                                sx={{
                                    maxWidth: 290,
                                    minWidth: 240,
                                    backgroundColor: 'transparent',
                                }}
                                key={coder.id}
                                elevation={0}
                            >
                                <CardMedia
                                    sx={{
                                        borderRadius: '50%',
                                        backgroundColor: '#fff',
                                    }}
                                    component="img"
                                    alt="green iguana"
                                    src={coder.avatar_url}
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        <h3>{coder.login}</h3>
                                    </Typography>
                                    <Typography
                                        className="pb-3"
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {coder.bio}
                                    </Typography>

                                    {coder.skills.length !== 0 ? (
                                        <div className="aboutUs-skill-layout p-1">
                                            <h5 className="text-dark p-1 pb-0">
                                                Skills
                                            </h5>
                                            {coder.skills.map((skill) => (
                                                <Chip
                                                    key={skill}
                                                    size="small"
                                                    variant="outlined"
                                                    color="primary"
                                                    label={skill}
                                                    className="m-1"
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        ' '
                                    )}
                                </CardContent>
                                <CardActions>
                                    <Button
                                        size="small"
                                        href={coder.html_url}
                                        target="_blank"
                                    >
                                        Github
                                    </Button>
                                    {/* <Button size="small">Learn More</Button> */}
                                </CardActions>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs
