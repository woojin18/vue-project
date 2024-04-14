const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    // Prefetch 플러그인을 비활성화
    config.plugins.delete('prefetch')

    // 또는 특정 엔트리 포인트에 대한 Prefetch 플러그인을 비활성화
    config.plugins.delete('prefetch-some-entry-point')
  }
})
