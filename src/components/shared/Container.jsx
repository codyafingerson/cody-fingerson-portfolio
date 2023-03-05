import PropTypes from 'prop-types'

function Container({ children }) {
    return (
        <div className="mt-auto">
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-0 w-1/2">
                {children}
            </div>
            
        </div>
    )
}

Container.propTypes = {
    children: PropTypes.node.isRequired
}

export default Container