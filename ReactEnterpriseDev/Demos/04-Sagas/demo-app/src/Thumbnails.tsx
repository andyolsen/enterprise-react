import { useSelector, useDispatch } from 'react-redux'
import thumbnailsSlice from './thumbnailsSlice'
import './Thumbnails.css'

export default function Thumbnails() {

    const thumbnails: any = useSelector((store: any) => store.thumbnails)
    const dispatch = useDispatch()

    return (
        <>
            <div>
                <button onClick={() => {
                    const actionObject = {type: 'getThumbnailsAsync'}                                
                    dispatch(actionObject)
                }}>
                    Get thumbnails
                </button>

                <button onClick={() => {
                    const actionObject = thumbnailsSlice.actions.clearThumbnails()
                    dispatch(actionObject)
                }}>
                    Clear thumbnails
                </button>
            </div>

            <div id='thumbnails'>
            {
                thumbnails.map((t: any, i: number) => 
                    <img 
                        src={t.url} 
                        alt={t.url} 
                        key={i}
                        className={t.large ? 'large' : 'small'}
                        onClick={() => {
                            const actionObject = thumbnailsSlice.actions.toggleImageSize(t.url)
                            dispatch(actionObject)
                        }}
                    />
                )
            }
            </div>
        </>
    )
}