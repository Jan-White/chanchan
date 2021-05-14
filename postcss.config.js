module.exports = ({mode, file}) => {
  const IN_DEV = mode == 'development', IN_PROD = !IN_DEV;
  return {
    plugins: [
      ['postcss-short'],
      ['postcss-preset-env', {
        preserve: false,
        autoprefixer: IN_DEV ? false : undefined
      }],
    ].filter(Boolean)
  };
};
