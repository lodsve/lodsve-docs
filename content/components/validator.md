---
title: Validator 参数校验
kicker: Component
description: 自定义 POJO 校验注解、校验处理器和统一失败异常。
---

## 校验模型

组件通过 `@ValidateEntity` 标记需要校验的对象，并将注解映射到对应 `ValidateHandler`。内置注解覆盖手机号、邮箱、身份证、数字、中文、URL、IP、邮编、QQ、固定电话、密码、正则、非空和范围等常见规则。校验失败由 `VerifyFailedException` 和异常处理器承载。

## 使用建议

把格式和必填等输入约束放在 DTO 上；跨字段、依赖数据库或涉及状态变化的业务规则放在应用服务层。错误信息应为用户可理解的稳定文本，Web 层统一转换响应，不返回内部堆栈。

可按现有 `ValidateHandler` 模式为新注解增加处理器，并验证合法值、非法值、空值处理及错误消息。Validator 没有专属 YAML 配置项；Starter 用法见[Validator Starter](/starters/validator/)。
