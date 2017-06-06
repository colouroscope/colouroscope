import React from 'react'
import { connect } from 'react-redux'
import ColourGrid from '../components/ColourGrid'
import Panel from '../components/Panel'

const mapStateToProps = ({ collection }) => {
  return {
    colours: collection
  }
}

let ColourCollection = (props) => (
    <Panel title="Collection">
        <ColourGrid {...props} />
    </Panel>
)

ColourCollection = connect(
  mapStateToProps
)(ColourCollection)

export default ColourCollection
