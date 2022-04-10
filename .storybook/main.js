module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: ['storybook-addon-themes', '@storybook/addon-links','storybook-css-modules-preset',
{
    name: '@storybook/addon-essentials',
    options: {
      backgrounds: false,
    }
  },
{
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
  }
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  }
};

