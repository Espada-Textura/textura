import TexturaLogo from '@assets/logo.png'
import EspadaLogo from '@images/Espada.svg'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import Chip from '@mui/material/Chip'
import ArtistProfile from '@images/ado.jpg'

import '@styles/pages/AboutUs.css'
import developers from '@datas/developers'

function AboutUs() {
    let coders = developers

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
