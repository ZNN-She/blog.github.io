---
# title: 结合Dumi构建博客
order: 2
---

# 结合Dumi构建博客

* 使用方式请参考官方文档[Dumi](https://d.umijs.org/)，这里标注一些修改的配置，以及怎么部署到github pages。
* 另外Dumi官方也提供了nopm工具包：[Dumi](https://d.umijs.org/guide/faq#%E9%83%A8%E7%BD%B2%E5%88%B0-github-pages)

1. 使用github actions 进行部署
   1. 项目根目录创建.github/workflows/deploy.yml
   2. 内容如下
    ```yml
    name: Deploy to GitHub Pages # 工作流名称

    on:
      push:
        branches: [ main ] # 触发分支

    jobs:
      build-and-deploy:
        runs-on: ubuntu-latest
        permissions:
          contents: write

        steps:
          - name: Checkout repository
            uses: actions/checkout@v4

          - name: Set up Node.js 18
            uses: actions/setup-node@v3
            with:
              node-version: 18
              cache: 'yarn' # 缓存yarn依赖

          - name: Install dependencies with Yarn
            run: yarn install --frozen-lockfile # 缓存yarn依赖，避免每次都安装依赖

          - name: Build project
            run: yarn build # 构建项目

          - name: Deploy to GitHub Pages
            uses: peaceiris/actions-gh-pages@v4
            with:
              github_token: ${{ secrets.GITHUB_TOKEN }} # 用于部署的GitHub令牌
              publish_dir: ./dist
              destination_dir: ./docs   # 目标目录：将内容放入gh-pages分支的docs目录
              publish_branch: gh-pages  # 目标分支
              force_orphan: true        # 确保每次都是干净部署（可选）
    ```
    3. 提交项目在项目Actions选项中就能看到你的工作流了
    4. 在github pages中配置Branch分支为`gh-pages`，目录为`docs`
    5. 部署技术既可以使用Github Pages的域名进行访问了
2. 注意修改配置
  因为dumi脚手架也使用到了docs目录，会和github pages的docs目录冲突，所以需要修改dumi的配置。
  1. 上面github actions脚本是把dumi构建的dist目录重新推送到项目的gh-pages分支的docs目录
  2. github pages访问路径是`用户名.github.io/项目名`，所以要对dumi的配置进行修改，将`base`和`publicPath`修改为`/项目名/`
      ```
      import { defineConfig } from 'dumi';

      const year = new Date().getFullYear();

      export default defineConfig({
        base: '/项目名/',
        publicPath: '/项目名/',          // 资源相对路径
        // 其他配置
      });

      ```
  
    
