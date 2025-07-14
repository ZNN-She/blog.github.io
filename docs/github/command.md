---
title: 常用命令 Q&A
order: 3
---

##### 远程分支删除了本地还能看到
```
git fetch --prune # 拉取远程数据并清理本地失效分支

git fetch origin          # 获取远程最新数据

git remote prune origin   # 清理本地仓库中那些在远程仓库（origin）中已删除的分支的引用，只执行“清理”操作，不会从远程拉取任何新数据。

git remote show origin # 显示本地分支和远程分支的差异，并显示本地已失效的远程分支
```

