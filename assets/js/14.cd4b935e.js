(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{190:function(s,t,a){"use strict";a.r(t);var e=a(6),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"git使用的简单流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git使用的简单流程"}},[s._v("#")]),s._v(" Git使用的简单流程")]),s._v(" "),a("p",[s._v("一个简单的Git版本管理的使用流程。")]),s._v(" "),a("h2",{attrs:{id:"配置user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置user"}},[s._v("#")]),s._v(" 配置user")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name yourname\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email example@gmail.com\n")])])]),a("h2",{attrs:{id:"初始化仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化仓库"}},[s._v("#")]),s._v(" 初始化仓库")]),s._v(" "),a("h3",{attrs:{id:"初始化本地仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化本地仓库"}},[s._v("#")]),s._v(" 初始化本地仓库")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" demo\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n")])])]),a("h3",{attrs:{id:"关联远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关联远程仓库"}},[s._v("#")]),s._v(" 关联远程仓库")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin https://github.com/ShoorDay/git-notes.git\n")])])]),a("p",[a("strong",[s._v("远程仓库信息")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 远程仓库信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote -v "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 详细信息")]),s._v("\n")])])]),a("h2",{attrs:{id:"帮助信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#帮助信息"}},[s._v("#")]),s._v(" 帮助信息")]),s._v(" "),a("p",[s._v("Git十分友好，提供了很多操作提示和帮助信息。")]),s._v(" "),a("h3",{attrs:{id:"git-help"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-help"}},[s._v("#")]),s._v(" git help")]),s._v(" "),a("p",[s._v("查看帮助")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看help命令的帮助")]),s._v("\n")])])]),a("h3",{attrs:{id:"git-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-status"}},[s._v("#")]),s._v(" git status")]),s._v(" "),a("p",[a("code",[s._v("git status")]),s._v("用来查看"),a("code",[s._v("working tree")]),s._v("的信息，十分丰富，例如：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\nOn branch dev\nChanges to be committed:\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git restore --staged <file>..."')]),s._v(" to unstage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        modified:   docs/guide/配置.md\n\nChanges not staged "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" commit:\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git add <file>..."')]),s._v(" to update what will be committed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git restore <file>..."')]),s._v(" to discard changes "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" working directory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        modified:   docs/.vuepress/config.js\n        modified:   docs/guide/分支.md\n        modified:   docs/guide/参考.md\n")])])]),a("h3",{attrs:{id:"git-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-log"}},[s._v("#")]),s._v(" git log")]),s._v(" "),a("p",[a("code",[s._v("git log")]),s._v("用来查看历史提交日志（从当前HEAD始，由近及远）")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log\ncommit 35143104d8800e2be8a136ed4cc253013f13f1f2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" dev, origin/master, master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nAuthor: shoor "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("shoorday@gmail.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nDate:   Fri Jun "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":21:33 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v(" +0800\n\n    first commit\n    \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --pretty"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("oneline "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 精简信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --graph          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 分支合并图")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --abbrev-commit  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 缩写Hash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当然是一起用了")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --graph --pretty"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("oneline --abbrev-commit \n")])])]),a("h3",{attrs:{id:"git-reflog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-reflog"}},[s._v("#")]),s._v(" git reflog")]),s._v(" "),a("p",[a("code",[s._v("git reflog")]),s._v("用于查看“未来”的提交日志，在回退到之前的提交，又忘了“未来的”的Hash值时，"),a("code",[s._v("git reflog")]),s._v("十分有用。")]),s._v(" "),a("h2",{attrs:{id:"添加追踪文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加追踪文件"}},[s._v("#")]),s._v(" 添加追踪文件")]),s._v(" "),a("p",[a("code",[s._v("git add")]),s._v("添加追踪文件/添加修改到暂存区")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"# git-notes"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" README.md\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" README.md\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("git add的便捷操作")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 暂存所有的文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 暂存新增加的和修改的文件（不含删除的）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -u   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 暂存修改和删除的文件（不含新增的）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" *.py "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 暂存所有后缀为py的文件，其他命令类似的选项也支持这种操作")]),s._v("\n")])])])]),s._v(" "),a("h3",{attrs:{id:"提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交"}},[s._v("#")]),s._v(" 提交")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"first commit"')]),s._v("\n")])])]),a("h3",{attrs:{id:"gitignore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitignore"}},[s._v("#")]),s._v(" .gitignore")]),s._v(" "),a("p",[a("code",[s._v(".gitignore")]),s._v("文件用于忽略一些文件，使其不被"),a("code",[s._v("Git")]),s._v("追踪。使用"),a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/09/bash-wildcards.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("glob语法"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node_modules/"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" .gitignore\n")])])]),a("p",[s._v("即可忽略忽略"),a("code",[s._v("node_modules")]),s._v("目录下的文件。")]),s._v(" "),a("h3",{attrs:{id:"git-push"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-push"}},[s._v("#")]),s._v(" git push")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin master\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("-u参数")]),s._v(" "),a("p",[s._v("将本地的master分支推送到origin主机，同时指定origin为默认主机，以后在master分支可以不写任何参数，直接push。")])]),s._v(" "),a("h2",{attrs:{id:"分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支"}},[s._v("#")]),s._v(" 分支")]),s._v(" "),a("h3",{attrs:{id:"新建分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建分支"}},[s._v("#")]),s._v(" 新建分支")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建dev分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch dev\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到dev分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout dev\n")])])]),a("p",[s._v("下面的写法效果一样，更方便")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b dev\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("git switch")]),s._v(" "),a("p",[s._v("Git新版本2.23中有新命令"),a("code",[s._v("switch")]),s._v("和"),a("code",[s._v("restore")]),s._v("，用以替代现在的"),a("code",[s._v("checkout")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" switch dev    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 等价于 git checkout dev")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" switch -c dev "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 等价于 git checkout -b dev")]),s._v("\n")])])])]),s._v(" "),a("h3",{attrs:{id:"查看分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看分支"}},[s._v("#")]),s._v(" 查看分支")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出本地当前所有分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -r   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出远程分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -a   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出当前所有分支")]),s._v("\n")])])]),a("h3",{attrs:{id:"删除分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除分支"}},[s._v("#")]),s._v(" 删除分支")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -d dev\n")])])]),a("h2",{attrs:{id:"撤销修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#撤销修改"}},[s._v("#")]),s._v(" 撤销修改")]),s._v(" "),a("h3",{attrs:{id:"撤销工作区的修改。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#撤销工作区的修改。"}},[s._v("#")]),s._v(" 撤销工作区的修改。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看工作目录状态")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 撤销工作区的修改（discard changes）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -- README.md\n")])])]),a("h3",{attrs:{id:"撤销暂存区的修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#撤销暂存区的修改"}},[s._v("#")]),s._v(" 撤销暂存区的修改")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看工作目录状态")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 撤销暂存区的修改（unstage）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset HEAD README.md\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("git restore")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" restore --staged README.md "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 等价于 git reset HEAD README.md")]),s._v("\n")])])])]),s._v(" "),a("h3",{attrs:{id:"撤销仓库的修改（提交）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#撤销仓库的修改（提交）"}},[s._v("#")]),s._v(" 撤销仓库的修改（提交）")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --soft HEAD~ "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 撤销上次提交")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --soft选项使得撤销commit并恢复到提交前的状态")]),s._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("其他<mode>")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("无选项")])]),s._v(" "),a("li",[a("p",[s._v("撤销commit，保留了commit，仅仅是移动HEAD指针.")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("--hard")])]),s._v(" "),a("p",[s._v("撤销commit，恢复到上次提交（指定"),a("code",[s._v("commit")]),s._v("，"),a("code",[s._v("HEAD^")]),s._v("即上次）的状态。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("--mixed")])]),s._v(" "),a("p",[s._v("撤销commit，暂存区撤销，其他恢复到提交前的状态。")])])])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("指定<commit>")]),s._v(" "),a("p",[s._v("更应该是"),a("strong",[s._v("版本回退")]),s._v("，而不仅仅是撤销上次的提交，可以看到"),a("code",[s._v("<commit>")]),s._v("选项，可以指定任意的commit。")])]),s._v(" "),a("h3",{attrs:{id:"隐藏工作区的修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#隐藏工作区的修改"}},[s._v("#")]),s._v(" 隐藏工作区的修改")]),s._v(" "),a("p",[a("code",[s._v("git stash")]),s._v("隐藏工作区的修改，需要的时候再拿出来。这个十分有用，对于新手来说可能最常见的就是不小心在"),a("code",[s._v("master")]),s._v("工作了。")]),s._v(" "),a("p",[a("strong",[s._v("一系列的stash类似栈")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 隐藏工作区的修改")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git stash save 与git stash，但有更多的选项")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash save “stash message”.\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash save -u\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash pop   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pop上次的stash，类似栈的操作（pop，删除那次的stash）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash apply "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 类试pop，但保留stash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash list  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出所有stash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash show  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上次stash的信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("clear")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除所有stash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash drop  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除上次的stash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建一个新分支，并pop一个stash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash branch "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branchname"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("stash"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("指定stash")]),s._v(" "),a("p",[s._v("可以指定pop、apply、drop、show等命令的stash（"),a("code",[s._v("[<stash>]")]),s._v("），使用"),a("code",[s._v("git stash pop stash@{n}")]),s._v("这样的语法（"),a("code",[s._v("stash@{n}")]),s._v("可由"),a("code",[s._v("git stash list")]),s._v("获得。")])]),s._v(" "),a("h2",{attrs:{id:"合并分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合并分支"}},[s._v("#")]),s._v(" 合并分支")]),s._v(" "),a("h3",{attrs:{id:"git-merge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-merge"}},[s._v("#")]),s._v(" git merge")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# on branch master")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge dev "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 合并dev分支到当前分支")]),s._v("\n")])])]),a("h3",{attrs:{id:"git-rebase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase"}},[s._v("#")]),s._v(" git rebase")]),s._v(" "),a("p",[s._v("变基操作，形成直线提交记录（丢失了一些）。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# on branch master")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase dev "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移动master指针到dev")]),s._v("\n")])])]),a("h3",{attrs:{id:"git-pull"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-pull"}},[s._v("#")]),s._v(" git pull")]),s._v(" "),a("p",[a("strong",[s._v("拉取")]),s._v("远程主机的最新内容并"),a("strong",[s._v("合并")]),s._v("，即相当于"),a("code",[s._v("git fetch")]),s._v("＋"),a("code",[s._v("git merge")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"git-diff"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-diff"}},[s._v("#")]),s._v(" git diff")]),s._v(" "),a("p",[s._v("合并有需要冲突手动解决，"),a("code",[s._v("git diff")]),s._v("能展示差异")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("工作目录 vs Git仓库")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("commit"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("工作目录 vs 暂存区")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branch"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 与指定分支的比较")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("暂存区 vs Git仓库")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" --cached "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" --cached "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("commit"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 与指定commit比较")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("Git仓库 vs Git仓库")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("commit"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("commit"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])])])]),s._v(" "),a("p",[s._v("差异比较大的话，还是GUI工具更方便。")]),s._v(" "),a("h2",{attrs:{id:"标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标签"}},[s._v("#")]),s._v(" 标签")]),s._v(" "),a("p",[s._v("有些commit我们需要特别记录，比如发布的版本，这时可以打个标签。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag v1.0                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在最新提交上创建标签")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag v2.0-beta1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("commit"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定commit")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -a v2.0 -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2.0正式版本"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 说明信息")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出所有标签")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show v1.0    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看标签信息")]),s._v("\n")])])]),a("h3",{attrs:{id:"删除标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除标签"}},[s._v("#")]),s._v(" 删除标签")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -d v1.0  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除标签")]),s._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("远程标签")]),s._v(" "),a("p",[s._v("创建的标签都只存储在本地。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin v1.0    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送标签到远程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin --tags  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送全部标签")]),s._v("\n")])])]),a("p",[s._v("删除远程标签也比较麻烦")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 先在本地删除")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -d v1.0\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 然后推送到远程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin :refs/tags/v1.0\n")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);