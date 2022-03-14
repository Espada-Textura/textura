import '@styles/components/ArtDetail.css'

import { MdCancel } from 'react-icons/md'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'

function ArtDetail(props) {
    return (
        <div className="art-detail-layout flex-row">
            <div className="art-detail-left-bar-layout p-3 d-none d-lg-flex flex-column">
                <div className="d-flex col-12 mb-3 ">
                    <Avatar
                        alt="Cindy Baker"
                        src="/static/images/avatar/3.jpg"
                        style={{
                            width: 43,
                            height: 43,
                        }}
                    />
                    <div className="d-flex flex-column pt-1">
                        <h6 className="m-0 mx-3">MISA Pisatto</h6>
                        <h6 className="m-0 mx-3 text-secondary">
                            misapisatto@gmail.com
                        </h6>
                    </div>
                </div>
                <h4 className="col-12 mt-3">{props.art.title}</h4>
                <p>{props.art.description}</p>
                <Box>
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" height={118} />
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" height={118} />
                </Box>
            </div>
            <div
                className="art-detail-main-layout p-4 pr-0 text-center"
                style={{
                    maxHeight: '100vh',
                    height: '100vh',
                }}
            >
                <img
                    className=""
                    src={`${props.art.path}`}
                    style={{
                        borderRadius: 12,
                        maxHeight: '100%',
                        maxWidth: '100%',
                        objectFit: 'contain',
                        verticalAlign: 'middle',
                        paddingTop: 'auto',
                        paddingBottom: 'auto',
                    }}
                />
            </div>
            <div className="art-detail-right-bar-layout text-center">
                <IconButton
                    sx={{ p: 2 }}
                    aria-label="upload picture"
                    component="span"
                    variant="contained"
                    style={{ color: '#fff' }}
                    onClick={() => {
                        props.close()
                    }}
                >
                    <MdCancel
                        className=""
                        style={{
                            width: 46,
                            height: 46,
                        }}
                    />
                </IconButton>
            </div>
        </div>
    )
}

export default ArtDetail
