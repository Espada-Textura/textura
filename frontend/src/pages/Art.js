import ArtsList from '@components/ArtsList'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { getArts, getMoreArts } from '@redux/art/operations'
import { allArts } from '@redux/art/selectors'
import { useEffect, useState } from 'react'

function Art() {
    // data
    let [arts, setArts] = useState([])

    // redux
    const dispatch = useDispatch()
    const selector = useSelector((state) => state)
    useEffect(() => {
        dispatch(getArts())
    }, [])
    useEffect(() => {
        setArts(allArts(selector))
    }, [allArts(selector)])

    return (
        <div className="col-12">
            {
                <ArtsList
                    arts={arts}
                    fetchMoreData={() => {
                        dispatch(getMoreArts())
                    }}
                ></ArtsList>
            }
            <button
                onClick={() => {
                    dispatch(getMoreArts())
                }}
            >
                more
            </button>
        </div>
    )
}

export default Art
