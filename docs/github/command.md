---
title: 常用命令 Q&A
order: 3
---

##### 远程分支删除了本地还能看到
```
# 拉取远程数据并清理本地失效分支
git fetch --prune 

# 获取远程最新数据
git fetch origin         

# 清理本地仓库中那些在远程仓库（origin）中已删除的分支的引用，只执行“清理”操作，不会从远程拉取任何新数据。
git remote prune origin  

# 显示本地分支和远程分支的差异，并显示本地已失效的远程分支
git remote show origin 

# 清理本地已失效的远程分支，不包含只有本地的分支么有推送过或绑定过的远程分支
git for-each-ref --format='%(refname:short) %(upstream:track)' refs/heads | awk '$2 == "[gone]" {print $1}' | xargs git branch -d 

# 清理本地已失效的远程分支，包含没合并到分支，使用 -D 会强制删除，包括未合并的更改，不包含只有本地的分支么有推送过或绑定过的远程分支
git for-each-ref --format='%(refname:short) %(upstream:track)' refs/heads | awk '$2 == "[gone]" {print $1}' | xargs git branch -D
```

