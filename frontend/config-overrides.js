const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
    alias({
        '@components': 'src/components',
        '@pages': 'src/pages',
        '@layouts': 'src/pages/layouts',
        '@assets': 'src/assets',
        '@images': 'src/assets/images',
        '@styles': 'src/styles',
        '@fonts': 'src/styles/fonts',
        '@utils': 'src/utils',
        '@fire': 'src/firebase',
        '@validations': 'src/utils/Validations',
        '@redux': 'src/reducks',
        '@datas': 'src/datas',
        '@helper': 'src/utils/helper',
    })(config)

    return config
}
