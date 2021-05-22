declare module 'mini-css-extract-plugin' {
  import type {WebpackPluginInstance} from 'webpack';
  interface MiniCssExtractPlugin extends WebpackPluginInstance {}

  class MiniCssExtractPlugin {
    static loader: string;

    constructor({filename}: {filename: string})
  }

  export default MiniCssExtractPlugin;
}

declare module 'css-minimizer-webpack-plugin' {
  import type {WebpackPluginInstance} from 'webpack';
  interface CssMinimizerPlugin extends WebpackPluginInstance {}

  class CssMinimizerPlugin {}

  export default CssMinimizerPlugin;
}
