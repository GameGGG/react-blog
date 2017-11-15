import React from 'react'
import ReactDom from 'react-dom'
import Nav from './index'

it('renders whitout creashing', () => {
    const div = document.createElement('div')
    ReactDom.render(<Nav />, div)
})