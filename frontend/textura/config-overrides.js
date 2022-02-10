const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
    alias({
        '@components': 'src/components',
        '@page': 'src/pages',
        '@layout': 'src/pages/layouts',
        '@assets': 'src/assets',
        '@images': 'src/assets/images',
        '@style': 'src/styles',
    })(config)

    return config
}
