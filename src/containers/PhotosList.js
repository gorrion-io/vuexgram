import { connect } from 'vuex-connect'
import { SELECT_PHOTO, FETCH_PHOTOS } from '../store'
import PhotosList from '../components/PhotosList'

export default connect({
    stateToProps: {
        photos: state => state.photos
    },
    mutationsToProps: {
        selectPhoto: SELECT_PHOTO
    },
    actionsToProps: {
        fetchPhotos: FETCH_PHOTOS
    }
})('photosList', PhotosList)