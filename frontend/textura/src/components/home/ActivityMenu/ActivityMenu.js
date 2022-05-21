import './ActivityMenu.css'
import Box from '@mui/material/Box'
import ArtistProfile from '@images/ado.jpg'

function ActivityMenu(props) {
    const cardStyles = {
        backgroundImage: `url('${
            props.image
                ? props.image
                : 'https://drive.google.com/uc?export=view&id=10ZikNlF86q_oB2Jy_c97UfDL8mv_rlo8'
        }')`,
    }
    return (
        <Box
            className={'container'}
            sx={{
                width: props.width ? props.width : 350,
            }}
        >
            <div className="card" style={cardStyles}>
                <div className={`background`} />
                <div className={`title-background`}>
                    <h3 className="title">
                        {props.title ? props.title : 'Unknown'}
                    </h3>
                    <p className="title-detail">
                        {props.content
                            ? props.content
                            : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna.'}
                    </p>
                </div>
            </div>
        </Box>
    )
}

export default ActivityMenu
