---
title: 批量删除分支
order: 4
---

##### 批量删除远程分支，分支命名（xxx_xxx_20250630）
```Bash
#!/bin/bash 
# 确保使用 Bash

# 删除当前日志之前的所有分支和命名不合法的分支，不包含master和main，合法分支命名（xxx_xxx_20250630）
# 需要删除云效中的保护分支规则
# 可能个别分支删除失败，需要手动删除

# 获取当前日期（格式：YYYYMMDD）
current_date=$(date +%Y%m%d)

# 获取所有本地分支（排除master/main）
branches=$(git branch -r --format='%(refname:short)' | grep -Ev 'origin/master$|origin/main$' | sed 's/origin\///')

# 匹配日期后缀的正则表达式
date_suffix_regex='_[0-9]{8}$'

declare -a branches_to_delete

while IFS= read -r  branch; do
    # 提取日期后缀
    date_suffix=$(echo "$branch" | grep -Eo "$date_suffix_regex" | cut -c2-)
    if [[ -z "$date_suffix" || ( -n "$date_suffix" && "$date_suffix" -lt "$current_date" ) ]]; then
        branches_to_delete+=("$branch")
    fi
done <<< "$branches"

if [ ${#branches_to_delete[@]} -gt 0 ]; then
    echo "即将删除以下分支："
    printf '%s\n' "${branches_to_delete[@]}"
    
    # 确认删除
    echo -n "确认删除以上分支？(y/n) "
    read -n 1 -r
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        for branch in "${branches_to_delete[@]}"; do
            if git push origin --delete "$branch"; then
                echo "已删除远程分支: origin/$branch"
            else
                echo "删除分支 $branch 失败" >&2
            fi
        done
    else
        echo "操作已取消"
    fi
else
    echo "没有需要删除的分支"
fi

```


---
title: 批量删除分支
order: 4
---

##### 批量删除远本地分支，分支命名（xxx_xxx_20250630）
```Bash
#!/bin/bash 
# 确保使用 Bash

# 删除当前日志之前的所有分支和命名不合法的分支，不包含master和main，合法分支命名（xxx_xxx_20250630）
# 需要删除云效中的保护分支规则
# 可能个别分支删除失败，需要手动删除

# 获取当前日期（格式：YYYYMMDD）
current_date=$(date +%Y%m%d)

# 获取所有本地分支（排除master/main）
branches=$(git branch --format='%(refname:short)' | grep -Ev 'master$|main$')
# 匹配日期后缀的正则表达式
date_suffix_regex='_[0-9]{8}$'

declare -a branches_to_delete

while IFS= read -r  branch; do
    # 提取日期后缀
    date_suffix=$(echo "$branch" | grep -Eo "$date_suffix_regex" | cut -c2-)
    if [[ -z "$date_suffix" || ( -n "$date_suffix" && "$date_suffix" -lt "$current_date" ) ]]; then
        branches_to_delete+=("$branch")
    fi
done <<< "$branches"

if [ ${#branches_to_delete[@]} -gt 0 ]; then
    echo "即将删除以下分支："
    printf '%s\n' "${branches_to_delete[@]}"
    
    # 确认删除
    echo -n "确认删除以上分支？(y/n) "
    read -n 1 -r
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        for branch in "${branches_to_delete[@]}"; do
            if git branch -D "$branch"; then
                echo "已删除本地分支: $branch"
            else
                echo "删除分支 $branch 失败" >&2
            fi
        done
    else
        echo "操作已取消"
    fi
else
    echo "没有需要删除的分支"
fi

```

