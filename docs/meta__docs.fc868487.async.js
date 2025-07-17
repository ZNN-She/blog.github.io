"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[904],{73968:function(t,e,n){n.r(e),n.d(e,{demos:function(){return d}});var a=n(67294),d={}},2267:function(t,e,n){n.r(e),n.d(e,{demos:function(){return d}});var a=n(67294),d={}},98610:function(t,e,n){n.r(e),n.d(e,{demos:function(){return d}});var a=n(67294),d={}},66129:function(t,e,n){n.r(e),n.d(e,{demos:function(){return d}});var a=n(67294),d={}},11171:function(t,e,n){n.r(e),n.d(e,{demos:function(){return d}});var a=n(67294),d={}},94854:function(t,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:`#!/bin/bash 
# \u786E\u4FDD\u4F7F\u7528 Bash

# \u5220\u9664\u5F53\u524D\u65E5\u5FD7\u4E4B\u524D\u7684\u6240\u6709\u5206\u652F\u548C\u547D\u540D\u4E0D\u5408\u6CD5\u7684\u5206\u652F\uFF0C\u4E0D\u5305\u542Bmaster\u548Cmain\uFF0C\u5408\u6CD5\u5206\u652F\u547D\u540D\uFF08xxx_xxx_20250630\uFF09
# \u9700\u8981\u5220\u9664\u4E91\u6548\u4E2D\u7684\u4FDD\u62A4\u5206\u652F\u89C4\u5219
# \u53EF\u80FD\u4E2A\u522B\u5206\u652F\u5220\u9664\u5931\u8D25\uFF0C\u9700\u8981\u624B\u52A8\u5220\u9664

# \u83B7\u53D6\u5F53\u524D\u65E5\u671F\uFF08\u683C\u5F0F\uFF1AYYYYMMDD\uFF09
current_date=$(date +%Y%m%d)

# \u83B7\u53D6\u6240\u6709\u672C\u5730\u5206\u652F\uFF08\u6392\u9664master/main\uFF09
branches=$(git branch -r --format='%(refname:short)' | grep -Ev 'origin/master$|origin/main$' | sed 's/origin\\///')

# \u5339\u914D\u65E5\u671F\u540E\u7F00\u7684\u6B63\u5219\u8868\u8FBE\u5F0F
date_suffix_regex='_[0-9]{8}$'

declare -a branches_to_delete

while IFS= read -r  branch; do
    # \u63D0\u53D6\u65E5\u671F\u540E\u7F00
    date_suffix=$(echo "$branch" | grep -Eo "$date_suffix_regex" | cut -c2-)
    if [[ -z "$date_suffix" || ( -n "$date_suffix" && "$date_suffix" -lt "$current_date" ) ]]; then
        branches_to_delete+=("$branch")
    fi
done <<< "$branches"

if [ \${#branches_to_delete[@]} -gt 0 ]; then
    echo "\u5373\u5C06\u5220\u9664\u4EE5\u4E0B\u5206\u652F\uFF1A"
    printf '%s\\n' "\${branches_to_delete[@]}"
    
    # \u786E\u8BA4\u5220\u9664
    echo -n "\u786E\u8BA4\u5220\u9664\u4EE5\u4E0A\u5206\u652F\uFF1F(y/n) "
    read -n 1 -r
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        for branch in "\${branches_to_delete[@]}"; do
            if git push origin --delete "$branch"; then
                echo "\u5DF2\u5220\u9664\u8FDC\u7A0B\u5206\u652F: origin/$branch"
            else
                echo "\u5220\u9664\u5206\u652F $branch \u5931\u8D25" >&2
            fi
        done
    else
        echo "\u64CD\u4F5C\u5DF2\u53D6\u6D88"
    fi
else
    echo "\u6CA1\u6709\u9700\u8981\u5220\u9664\u7684\u5206\u652F"
fi

`,paraId:0,tocIndex:0},{value:`#!/bin/bash 
# \u786E\u4FDD\u4F7F\u7528 Bash

# \u5220\u9664\u5F53\u524D\u65E5\u5FD7\u4E4B\u524D\u7684\u6240\u6709\u5206\u652F\u548C\u547D\u540D\u4E0D\u5408\u6CD5\u7684\u5206\u652F\uFF0C\u4E0D\u5305\u542Bmaster\u548Cmain\uFF0C\u5408\u6CD5\u5206\u652F\u547D\u540D\uFF08xxx_xxx_20250630\uFF09
# \u9700\u8981\u5220\u9664\u4E91\u6548\u4E2D\u7684\u4FDD\u62A4\u5206\u652F\u89C4\u5219
# \u53EF\u80FD\u4E2A\u522B\u5206\u652F\u5220\u9664\u5931\u8D25\uFF0C\u9700\u8981\u624B\u52A8\u5220\u9664

# \u83B7\u53D6\u5F53\u524D\u65E5\u671F\uFF08\u683C\u5F0F\uFF1AYYYYMMDD\uFF09
current_date=$(date +%Y%m%d)

# \u83B7\u53D6\u6240\u6709\u672C\u5730\u5206\u652F\uFF08\u6392\u9664master/main\uFF09
branches=$(git branch --format='%(refname:short)' | grep -Ev 'master$|main$')
# \u5339\u914D\u65E5\u671F\u540E\u7F00\u7684\u6B63\u5219\u8868\u8FBE\u5F0F
date_suffix_regex='_[0-9]{8}$'

declare -a branches_to_delete

while IFS= read -r  branch; do
    # \u63D0\u53D6\u65E5\u671F\u540E\u7F00
    date_suffix=$(echo "$branch" | grep -Eo "$date_suffix_regex" | cut -c2-)
    if [[ -z "$date_suffix" || ( -n "$date_suffix" && "$date_suffix" -lt "$current_date" ) ]]; then
        branches_to_delete+=("$branch")
    fi
done <<< "$branches"

if [ \${#branches_to_delete[@]} -gt 0 ]; then
    echo "\u5373\u5C06\u5220\u9664\u4EE5\u4E0B\u5206\u652F\uFF1A"
    printf '%s\\n' "\${branches_to_delete[@]}"
    
    # \u786E\u8BA4\u5220\u9664
    echo -n "\u786E\u8BA4\u5220\u9664\u4EE5\u4E0A\u5206\u652F\uFF1F(y/n) "
    read -n 1 -r
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        for branch in "\${branches_to_delete[@]}"; do
            if git branch -D "$branch"; then
                echo "\u5DF2\u5220\u9664\u672C\u5730\u5206\u652F: $branch"
            else
                echo "\u5220\u9664\u5206\u652F $branch \u5931\u8D25" >&2
            fi
        done
    else
        echo "\u64CD\u4F5C\u5DF2\u53D6\u6D88"
    fi
else
    echo "\u6CA1\u6709\u9700\u8981\u5220\u9664\u7684\u5206\u652F"
fi

`,paraId:1,tocIndex:2}]},7976:function(t,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:`# \u62C9\u53D6\u8FDC\u7A0B\u6570\u636E\u5E76\u6E05\u7406\u672C\u5730\u5931\u6548\u5206\u652F
git fetch --prune 

# \u83B7\u53D6\u8FDC\u7A0B\u6700\u65B0\u6570\u636E
git fetch origin         

# \u6E05\u7406\u672C\u5730\u4ED3\u5E93\u4E2D\u90A3\u4E9B\u5728\u8FDC\u7A0B\u4ED3\u5E93\uFF08origin\uFF09\u4E2D\u5DF2\u5220\u9664\u7684\u5206\u652F\u7684\u5F15\u7528\uFF0C\u53EA\u6267\u884C\u201C\u6E05\u7406\u201D\u64CD\u4F5C\uFF0C\u4E0D\u4F1A\u4ECE\u8FDC\u7A0B\u62C9\u53D6\u4EFB\u4F55\u65B0\u6570\u636E\u3002
git remote prune origin  

# \u663E\u793A\u672C\u5730\u5206\u652F\u548C\u8FDC\u7A0B\u5206\u652F\u7684\u5DEE\u5F02\uFF0C\u5E76\u663E\u793A\u672C\u5730\u5DF2\u5931\u6548\u7684\u8FDC\u7A0B\u5206\u652F
git remote show origin 

# \u6E05\u7406\u672C\u5730\u5DF2\u5931\u6548\u7684\u8FDC\u7A0B\u5206\u652F\uFF0C\u4E0D\u5305\u542B\u53EA\u6709\u672C\u5730\u7684\u5206\u652F\u4E48\u6709\u63A8\u9001\u8FC7\u6216\u7ED1\u5B9A\u8FC7\u7684\u8FDC\u7A0B\u5206\u652F
git for-each-ref --format='%(refname:short) %(upstream:track)' refs/heads | awk '$2 == "[gone]" {print $1}' | xargs git branch -d 

# \u6E05\u7406\u672C\u5730\u5DF2\u5931\u6548\u7684\u8FDC\u7A0B\u5206\u652F\uFF0C\u5305\u542B\u6CA1\u5408\u5E76\u5230\u5206\u652F\uFF0C\u4F7F\u7528 -D \u4F1A\u5F3A\u5236\u5220\u9664\uFF0C\u5305\u62EC\u672A\u5408\u5E76\u7684\u66F4\u6539\uFF0C\u4E0D\u5305\u542B\u53EA\u6709\u672C\u5730\u7684\u5206\u652F\u4E48\u6709\u63A8\u9001\u8FC7\u6216\u7ED1\u5B9A\u8FC7\u7684\u8FDC\u7A0B\u5206\u652F
git for-each-ref --format='%(refname:short) %(upstream:track)' refs/heads | awk '$2 == "[gone]" {print $1}' | xargs git branch -D
`,paraId:0,tocIndex:0}]},28553:function(t,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:"\u4F7F\u7528\u65B9\u5F0F\u8BF7\u53C2\u8003\u5B98\u65B9\u6587\u6863",paraId:0,tocIndex:0},{value:"Dumi",paraId:0,tocIndex:0},{value:"\uFF0C\u8FD9\u91CC\u6807\u6CE8\u4E00\u4E9B\u4FEE\u6539\u7684\u914D\u7F6E\uFF0C\u4EE5\u53CA\u600E\u4E48\u90E8\u7F72\u5230github pages\u3002",paraId:0,tocIndex:0},{value:"\u53E6\u5916Dumi\u5B98\u65B9\u4E5F\u63D0\u4F9B\u4E86nopm\u5DE5\u5177\u5305\uFF1A",paraId:0,tocIndex:0},{value:"Dumi",paraId:0,tocIndex:0},{value:"\u4F7F\u7528github actions \u8FDB\u884C\u90E8\u7F72",paraId:1,tocIndex:0},{value:"\u9879\u76EE\u6839\u76EE\u5F55\u521B\u5EFA.github/workflows/deploy.yml",paraId:2,tocIndex:0},{value:"\u5185\u5BB9\u5982\u4E0B",paraId:2,tocIndex:0},{value:`name: Deploy to GitHub Pages # \u5DE5\u4F5C\u6D41\u540D\u79F0

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

`,paraId:8,tocIndex:0}]},14348:function(t,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:"\u767B\u5F55 github \u8D26\u53F7",paraId:0,tocIndex:1},{value:"\u65B0\u5EFA\u4E00\u4E2A\u4ED3\u5E93",paraId:0,tocIndex:1},{value:"\u4ED3\u5E93\u540D\u548C\u5E38\u89C4\u4ED3\u5E93\u540D\u65E0\u53BB\u5457",paraId:0,tocIndex:1},{value:"\u8FDB\u5165\u4ED3\u5E93",paraId:0,tocIndex:1},{value:"\u70B9\u51FB\u8BBE\u7F6E(Setting)",paraId:0,tocIndex:1},{value:"\u627E\u5230Pages",paraId:0,tocIndex:1},{value:`\u5728Branch\u9009\u9879\u8BBE\u7F6E\u90E8\u7F72\u7684\u5206\u652F\u548C\u76EE\u5F55
`,paraId:0,tocIndex:1},{value:"\u9ED8\u8BA4\u5206\u652F\u662F\u4E3B\u5206\u652F",paraId:1,tocIndex:1},{value:"\u9ED8\u8BA4\u76EE\u5F55\u662F\u6839\u76EE\u5F55(root)\u3002github\u53EA\u652F\u6301root\u548Cdocs\u4E24\u4E2A\u76EE\u5F55",paraId:1,tocIndex:1},{value:"\u70B9\u51FB\u4FDD\u5B58(Save)",paraId:0,tocIndex:1},{value:"\u8FD9\u65F6\u5019\u53EF\u4EE5\u901A\u8FC7\u57DF\u540D\u8BBF\u95EE\u535A\u5BA2\uFF0C\u57DF\u540D\u89C4\u5219\u662F\uFF1A",paraId:0,tocIndex:1},{value:"\u7528\u6237\u540D.github.io/\u9879\u76EE\u540D",paraId:0,tocIndex:1},{value:"\u53EF\u4EE5\u518DCustom domain\u9009\u9879\u4E2D\u8BBE\u7F6E\u81EA\u5DF1\u5DF2\u6709\u7684\u5916\u7F51\u57DF\u540D\uFF0C\u5E76\u4E14\u9700\u8981\u5728\u57DF\u540D\u5546\u5904\u505A\u4E00\u4E9B\u914D\u7F6E\uFF0C\u6BD4\u5982DNS\u89E3\u6790\u5230github\u7684ip\u5730\u5740\u624D\u80FD\u6B63\u5E38\u8BBF\u95EE\u3002",paraId:2,tocIndex:2}]},51446:function(t,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[]}}]);
