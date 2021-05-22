/* eslint-env node */
import {resolve}  from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import StylelintPlugin from 'stylelint-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';

// to alter 'webpack' module and allow 'devServer' property
import 'webpack-dev-server';

const front = resolve(__dirname, 'src', 'front');
const server = resolve(__dirname, 'src', 'server');
const build = resolve(__dirname, 'build');


const config: ConfigurationFactory = (_env, {mode}) => {
  console.log(_env, mode);

  const IN_DEV = mode == 'development',
    IN_PROD = !IN_DEV;

  const config: webpack.Configuration = {
    // target is specified to force HMR to work since there's a bug in webpack
    // 5 that disables HMR on target 'browserslist'
    target: IN_DEV ? 'web' : 'browserslist',
    mode,
    entry: {
      App: [
        IN_DEV && 'react-hot-loader/patch',
        resolve(front, 'index.tsx'),
      ].filter(Boolean),
    },
    output: {
      path: build,
      filename: `js/[${IN_DEV ? 'name' : 'chunkhash'}].js`,
      clean: true,
      publicPath: '/'
    },
    optimization: {
      minimizer: [
        '...',
        new CssMinimizerPlugin()
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
      modules: [front, server, 'node_modules'],
      alias: {

      }
    },
    devtool: IN_DEV ? 'eval-cheap-module-source-map' : 'hidden-source-map',
    devServer: {
      contentBase: resolve(__dirname, 'node_modules'),
      historyApiFallback: true,
      compress: true,
      hotOnly: true,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                cwd: __dirname,
                envName: mode
              }
            },
            {
              loader: 'ts-loader',
              options: {
                onlyCompileBundledFiles: true
              }
            }
          ],

        },
        {
          test: /\.s?css$/i,
          use: [
            IN_DEV ?
              {
                loader: 'style-loader'
              }
              :
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '../'
                }
              },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: IN_DEV ?
                    '[name]_[local]'
                    :
                    '[hash:base64]',
                  exportLocalsConvention: 'camelCaseOnly',
                }
              }
            },
            IN_PROD && {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  config: resolve(__dirname, 'postcss.config.js'),
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  includePaths: [resolve(front, 'Styles')]
                },
              }
            },
          ].filter(Boolean),
        },
        {
          test: /\.pug$/,
          use: [
            {
              loader: 'pug-loader',
              options: {
                self: true,
                pretty: IN_DEV
              }
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: `static/[${IN_DEV ? 'name' : 'hash'}][ext]`
          }
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: resolve(front, 'index.pug'),
        templateParameters: {
          IN_DEV,
          IN_PROD
        },
        minify: IN_PROD
      }),
      new webpack.DefinePlugin({
        IN_DEV,
        IN_PROD
      }),
      IN_PROD && new MiniCssExtractPlugin({
        filename: 'css/[name].css'
      }),
      new StylelintPlugin({
        context: front,
        fix: true
      }),
      new ESLintPlugin({
        extensions: ['ts', 'tsx', 'js'],
        fix: true
      }),
    ].filter(Boolean),
    externals: {
      'react': 'React',
      'react-router-dom': 'ReactRouterDOM',
    }
  };

  if (IN_DEV) {
    config.resolve.alias['react-dom'] = '@hot-loader/react-dom';
  }

  if (IN_PROD) {
    config.externals['react-dom'] = 'ReactDOM';
  }


  return config;
};

export default config;

// configuration types from @types/webpack
interface CliConfigOptions {
  config?: string;
  mode?: webpack.Configuration['mode'];
  env?: string;
  'config-register'?: string;
  configRegister?: string;
  'config-name'?: string;
  configName?: string;
}

type ConfigurationFactory = ((
  env: Record<string, boolean | number | string> | string | undefined,
  args: CliConfigOptions,
) => webpack.Configuration);
