module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              api: "legacy",
              sassOptions: {
                // Your sass options
                silenceDeprecations: ["legacy-js-api"],
              },
            },
          },
        ],
      },
    ],
  },
};
