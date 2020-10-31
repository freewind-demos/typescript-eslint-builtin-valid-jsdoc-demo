TypeScript Eslint Builtin "valid-jsdoc" Demo
============================================

Eslint自带的valid-jsdoc相关的rule太弱了，基本上没法用。

比如`requireReturn`，并不是说可以不写`@returns`，而是说只有没有返回值的可以不写，有返回值的还是必须写: https://eslint.org/docs/2.0.0/rules/valid-jsdoc#requirereturn

其它参数也很少，建议使用

https://github.com/gajus/eslint-plugin-jsdoc

```
npm install
npm run lint
```
