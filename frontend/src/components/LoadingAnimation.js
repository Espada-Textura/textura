import ReactLoading from 'react-loading'
function LoadingAnimation() {
    return (
        <div className="leading-main-layout">
            <ReactLoading
                type={'balls'}
                color={'red'}
                height={'20%'}
                width={'20%'}
            />
        </div>
    )
}

export default LoadingAnimation
