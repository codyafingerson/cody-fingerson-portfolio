import PropTypes from 'prop-types'

function Container({ children }) {
    return (
        <>
        <div className="container mt-auto">
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full md:w-1/2">
                {children}
            </div>
            
        </div>
        </>
    )
}

Container.propTypes = {
    children: PropTypes.node.isRequired
}

export default Container