module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  filenameHashing: true,

  /*  chainWebpack: config => {
     config.optimization.delete('splitChunks')
   }, */

  runtimeCompiler: true,

  pwa: {
    name: 'NeuerEnergy Prototype',
    themeColor: '#1c475c',
    msTileColor: '#1c475c',
    workboxOptions: {
      skipWaiting: true
    }
  },

  productionSourceMap: false
}