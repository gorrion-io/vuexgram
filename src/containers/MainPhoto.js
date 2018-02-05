import { connect } from 'vuex-connect'
import MainPhoto from '../components/MainPhoto'

export default connect({
    stateToProps: {
        photo: state => state.selectedPhoto
    }
})('mainPhoto', MainPhoto)