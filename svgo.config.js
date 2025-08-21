export default {
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          cleanupIds: { minify: true },
          convertPathData: { floatPrecision: 2 },
        },
      },
    },
  ],
};
