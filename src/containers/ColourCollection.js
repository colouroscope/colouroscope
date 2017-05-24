import { connect } from 'react-redux'
import ColourGrid from '../components/ColourGrid'

const mapStateToProps = ({ collection }) => {
  return {
    colours: collection
  }
}

const ColourCollection = connect(
  mapStateToProps
)(ColourGrid)

export default ColourCollection
