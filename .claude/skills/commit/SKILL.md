---
name: commit
description: 按照 Conventional Commits 规范提交代码。当用户要求提交代码、commit、生成提交信息时使用。
---

# Git 规范提交

按照 Conventional Commits 规范为当前改动创建提交。

## 流程

1. 并行执行 `git status`、`git diff`（含已暂存）、`git log --oneline -10` 了解改动内容和历史风格
2. 分析改动，确定提交类型和范围
3. 只暂存与本次提交目的相关的文件，**不要**使用 `git add -A` 或 `git add .`
4. 创建提交并在提交后执行 `git status` 确认成功

## 提交信息格式

```
<type>(<scope>): <subject>
```

- **type**（必填）：
  - `feat` — 新功能
  - `fix` — 缺陷修复
  - `docs` — 文档变更
  - `style` — 代码格式（不影响逻辑）
  - `refactor` — 重构（既非新增功能也非修复）
  - `perf` — 性能优化
  - `test` — 测试相关
  - `build` — 构建/依赖/打包配置变更
  - `ci` — CI 配置变更
  - `chore` — 其他杂项
- **scope**（可选）：影响范围，如组件名 `button`、`tabs`，或 `build`、`docs`
- **subject**（必填）：中文简述，祈使语气，不超过 50 字，结尾不加句号

## 规则

- 一次提交只做一件事：不相关的改动拆分为多个提交
- 不提交以下内容：
  - 构建缓存（如 `docs/.vitepress/cache`、`node_modules`、临时文件）
  - 可能含敏感信息的文件（`.env`、密钥、凭证）
  - 与本次目的无关的他人未完成改动
- 提交信息聚焦"为什么"而非罗列文件
- 不使用 `--no-verify`、`--amend` 跳过或修改已有提交
- 未经用户明确要求不执行 `git push`
