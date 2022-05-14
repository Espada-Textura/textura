import './ActivityMenu.css'

function ActivityMenu(props) {
    return (
        <div className={'container active'}>
            <div className="card">
                <div className={`background`} />
                <div className={`title-background`}>
                    <h3 className="title">ARTs</h3>
                    <p className="title-detail">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus venenatis, lectus
                        magna fringilla urna.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ActivityMenu
