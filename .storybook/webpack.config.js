const path = require("path");

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = ({ config }) => {
  config.module.rules = config.module.rules.filter(
    f => f.test.toString() !== "/\\.css$/"
  );

  config.module.rules.push(
    ...[
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: require.resolve("babel-loader"),
            options: {
              presets: [require.resolve("babel-preset-react-app")]
            }
          },
          require.resolve("react-docgen-typescript-loader")
        ]
      },
      {
        oneOf: [
          {
            test: cssRegex,
            exclude: cssModuleRegex,
            use: getStyleLoaders({
              importLoaders: 1
            }),
            sideEffects: true
          },
          {
            test: cssModuleRegex,
            use: getStyleLoaders({
              importLoaders: 1,
              modules: true,
              namedExport: true
            }),
            sideEffects: true
          },
          {
            test: sassRegex,
            exclude: sassModuleRegex,
            use: getStyleLoaders(
              {
                importLoaders: 2
              },
              "sass-loader"
            ),
            sideEffects: true
          },
          {
            test: sassModuleRegex,
            use: getStyleLoaders(
              {
                importLoaders: 2,
                modules: true,
                namedExport: true
              },
              "sass-loader"
            )
          }
        ]
      }
    ]
  );

  config.resolve.extensions.push(".ts", ".tsx");

  const src = path.resolve(process.env.PWD, "./src");

  config.resolve.modules.push(src);

  config.resolve.alias = {
    "react-native": "react-native-web"
  };

  return config;
};

function getStyleLoaders(cssOptions, preProcessor) {
  const loaders = [
    require.resolve("style-loader"),
    {
      loader: require.resolve("css-loader"),
      options: cssOptions
    }
  ];
  if (preProcessor) {
    loaders.push({
      loader: require.resolve(preProcessor)
    });
  }
  return loaders;
}
