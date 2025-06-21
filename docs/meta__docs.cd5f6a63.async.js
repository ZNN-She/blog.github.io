"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[904],{98610:function(d,a,n){n.r(a),n.d(a,{demos:function(){return t}});var e=n(67294),t={}},66129:function(d,a,n){n.r(a),n.d(a,{demos:function(){return t}});var e=n(67294),t={}},11171:function(d,a,n){n.r(a),n.d(a,{demos:function(){return t}});var e=n(67294),t={}},28553:function(d,a,n){n.r(a),n.d(a,{texts:function(){return e}});const e=[{value:"\u4F7F\u7528\u65B9\u5F0F\u8BF7\u53C2\u8003\u5B98\u65B9\u6587\u6863",paraId:0,tocIndex:0},{value:"Dumi",paraId:0,tocIndex:0},{value:"\uFF0C\u8FD9\u91CC\u6807\u6CE8\u4E00\u4E9B\u4FEE\u6539\u7684\u914D\u7F6E\uFF0C\u4EE5\u53CA\u600E\u4E48\u90E8\u7F72\u5230github pages\u3002",paraId:0,tocIndex:0},{value:"\u53E6\u5916Dumi\u5B98\u65B9\u4E5F\u63D0\u4F9B\u4E86nopm\u5DE5\u5177\u5305\uFF1A",paraId:0,tocIndex:0},{value:"Dumi",paraId:0,tocIndex:0},{value:"\u4F7F\u7528github actions \u8FDB\u884C\u90E8\u7F72",paraId:1,tocIndex:0},{value:"\u9879\u76EE\u6839\u76EE\u5F55\u521B\u5EFA.github/workflows/deploy.yml",paraId:2,tocIndex:0},{value:"\u5185\u5BB9\u5982\u4E0B",paraId:2,tocIndex:0},{value:`name: Deploy to GitHub Pages # \u5DE5\u4F5C\u6D41\u540D\u79F0

on:
  push:
    branches: [ main ] # \u89E6\u53D1\u5206\u652F

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
          cache: 'yarn' # \u7F13\u5B58yarn\u4F9D\u8D56

      - name: Install dependencies with Yarn
        run: yarn install --frozen-lockfile # \u7F13\u5B58yarn\u4F9D\u8D56\uFF0C\u907F\u514D\u6BCF\u6B21\u90FD\u5B89\u88C5\u4F9D\u8D56

      - name: Build project
        run: yarn build # \u6784\u5EFA\u9879\u76EE

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }} # \u7528\u4E8E\u90E8\u7F72\u7684GitHub\u4EE4\u724C
          publish_dir: ./dist
          destination_dir: ./docs   # \u76EE\u6807\u76EE\u5F55\uFF1A\u5C06\u5185\u5BB9\u653E\u5165gh-pages\u5206\u652F\u7684docs\u76EE\u5F55
          publish_branch: gh-pages  # \u76EE\u6807\u5206\u652F
          force_orphan: true        # \u786E\u4FDD\u6BCF\u6B21\u90FD\u662F\u5E72\u51C0\u90E8\u7F72\uFF08\u53EF\u9009\uFF09
`,paraId:3,tocIndex:0},{value:"\u63D0\u4EA4\u9879\u76EE\u5728\u9879\u76EEActions\u9009\u9879\u4E2D\u5C31\u80FD\u770B\u5230\u4F60\u7684\u5DE5\u4F5C\u6D41\u4E86",paraId:4,tocIndex:0},{value:"\u5728github pages\u4E2D\u914D\u7F6EBranch\u5206\u652F\u4E3A",paraId:4,tocIndex:0},{value:"gh-pages",paraId:4,tocIndex:0},{value:"\uFF0C\u76EE\u5F55\u4E3A",paraId:4,tocIndex:0},{value:"docs",paraId:4,tocIndex:0},{value:"\u90E8\u7F72\u6280\u672F\u65E2\u53EF\u4EE5\u4F7F\u7528Github Pages\u7684\u57DF\u540D\u8FDB\u884C\u8BBF\u95EE\u4E86",paraId:4,tocIndex:0},{value:`\u6CE8\u610F\u4FEE\u6539\u914D\u7F6E
\u56E0\u4E3Adumi\u811A\u624B\u67B6\u4E5F\u4F7F\u7528\u5230\u4E86docs\u76EE\u5F55\uFF0C\u4F1A\u548Cgithub pages\u7684docs\u76EE\u5F55\u51B2\u7A81\uFF0C\u6240\u4EE5\u9700\u8981\u4FEE\u6539dumi\u7684\u914D\u7F6E\u3002`,paraId:5,tocIndex:0},{value:"\u4E0A\u9762github actions\u811A\u672C\u662F\u628Adumi\u6784\u5EFA\u7684dist\u76EE\u5F55\u91CD\u65B0\u63A8\u9001\u5230\u9879\u76EE\u7684gh-pages\u5206\u652F\u7684docs\u76EE\u5F55",paraId:6,tocIndex:0},{value:"github pages\u8BBF\u95EE\u8DEF\u5F84\u662F",paraId:7,tocIndex:0},{value:"\u7528\u6237\u540D.github.io/\u9879\u76EE\u540D",paraId:7,tocIndex:0},{value:"\uFF0C\u6240\u4EE5\u8981\u5BF9dumi\u7684\u914D\u7F6E\u8FDB\u884C\u4FEE\u6539\uFF0C\u5C06",paraId:7,tocIndex:0},{value:"base",paraId:7,tocIndex:0},{value:"\u548C",paraId:7,tocIndex:0},{value:"publicPath",paraId:7,tocIndex:0},{value:"\u4FEE\u6539\u4E3A",paraId:7,tocIndex:0},{value:"/\u9879\u76EE\u540D/",paraId:7,tocIndex:0},{value:`import { defineConfig } from 'dumi';

const year = new Date().getFullYear();

export default defineConfig({
  base: '/\u9879\u76EE\u540D/',
  publicPath: '/\u9879\u76EE\u540D/',          // \u8D44\u6E90\u76F8\u5BF9\u8DEF\u5F84
  // \u5176\u4ED6\u914D\u7F6E
});

`,paraId:8,tocIndex:0}]},14348:function(d,a,n){n.r(a),n.d(a,{texts:function(){return e}});const e=[{value:"\u767B\u5F55 github \u8D26\u53F7",paraId:0,tocIndex:1},{value:"\u65B0\u5EFA\u4E00\u4E2A\u4ED3\u5E93",paraId:0,tocIndex:1},{value:"\u4ED3\u5E93\u540D\u548C\u5E38\u89C4\u4ED3\u5E93\u540D\u65E0\u53BB\u5457",paraId:0,tocIndex:1},{value:"\u8FDB\u5165\u4ED3\u5E93",paraId:0,tocIndex:1},{value:"\u70B9\u51FB\u8BBE\u7F6E(Setting)",paraId:0,tocIndex:1},{value:"\u627E\u5230Pages",paraId:0,tocIndex:1},{value:`\u5728Branch\u9009\u9879\u8BBE\u7F6E\u90E8\u7F72\u7684\u5206\u652F\u548C\u76EE\u5F55
`,paraId:0,tocIndex:1},{value:"\u9ED8\u8BA4\u5206\u652F\u662F\u4E3B\u5206\u652F",paraId:1,tocIndex:1},{value:"\u9ED8\u8BA4\u76EE\u5F55\u662F\u6839\u76EE\u5F55(root)\u3002github\u53EA\u652F\u6301root\u548Cdocs\u4E24\u4E2A\u76EE\u5F55",paraId:1,tocIndex:1},{value:"\u70B9\u51FB\u4FDD\u5B58(Save)",paraId:0,tocIndex:1},{value:"\u8FD9\u65F6\u5019\u53EF\u4EE5\u901A\u8FC7\u57DF\u540D\u8BBF\u95EE\u535A\u5BA2\uFF0C\u57DF\u540D\u89C4\u5219\u662F\uFF1A",paraId:0,tocIndex:1},{value:"\u7528\u6237\u540D.github.io/\u9879\u76EE\u540D",paraId:0,tocIndex:1},{value:"\u53EF\u4EE5\u518DCustom domain\u9009\u9879\u4E2D\u8BBE\u7F6E\u81EA\u5DF1\u5DF2\u6709\u7684\u5916\u7F51\u57DF\u540D\uFF0C\u5E76\u4E14\u9700\u8981\u5728\u57DF\u540D\u5546\u5904\u505A\u4E00\u4E9B\u914D\u7F6E\uFF0C\u6BD4\u5982DNS\u89E3\u6790\u5230github\u7684ip\u5730\u5740\u624D\u80FD\u6B63\u5E38\u8BBF\u95EE\u3002",paraId:2,tocIndex:2}]},51446:function(d,a,n){n.r(a),n.d(a,{texts:function(){return e}});const e=[]}}]);
