import PropTypes from 'prop-types'

function Container({ children }) {
    return (
        <div className="mt-20 md:mt-auto">
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full md:w-1/2">
                <div className="bg-gray-800 text-white z-10">
                    <div className="container mx-auto py-16 px-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

Container.propTypes = {
    children: PropTypes.node.isRequired
}

export default Container