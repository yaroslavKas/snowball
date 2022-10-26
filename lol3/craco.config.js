const path = require('path');
const {getLoader, loaderByName} = require("@craco/craco");
const {generateFonts, FontAssetType, OtherAssetType} = require("fantasticon");

const packages = [];
packages.push(path.join(__dirname, "./services"));

const fontIcon = () => {
    generateFonts({
        fontTypes: [FontAssetType.TTF, FontAssetType.WOFF2, FontAssetType.WOFF],
        assetTypes: [
            OtherAssetType.SCSS
        ],
        formatOptions: {json: {indent: 2}},
        templates: {},
        pathOptions: {},
        fontHeight: 300,
        round: undefined,
        descent: undefined,
        tag: 'i',
        prefix: 'icon',
        inputDir: `${__dirname}/services/icons/src/icons/fonts`,
        outputDir: `${__dirname}/services/icons/src/fonts`,
        normalize: true,
        selector: 'i',
        name: 'front_icon',
        codepoints: {
            'sport-soccer': 61696
        }
    });
}


module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            const {isFound, match} = getLoader(webpackConfig, loaderByName("babel-loader"));
            if (isFound) {
                const {loader} = match
                const include = Array.isArray(loader.include) ? loader.include : [loader.include];
                loader.include = include.concat(packages);
            }

            fontIcon();
            return webpackConfig;
        }
    }
}

