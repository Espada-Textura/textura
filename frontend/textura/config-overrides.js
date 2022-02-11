const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
    alias({
        '@components': 'src/components',
        '@pages': 'src/pages',
        '@layouts': 'src/pages/layouts',
        '@assets': 'src/assets',
        '@images': 'src/assets/images',
        '@styles': 'src/styles',
    })(config)

    return config
}
