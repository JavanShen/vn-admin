/// 语法规范
module.exports = {
    root: true,
    env: {
        node: true,
        'vue/setup-compiler-macros': true
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true
            }
        ],
        // 允许对指定入参进行修改
        'no-param-reassign': [
            'error',
            {
                props: true,
                ignorePropertyModificationsFor: ['config', 'route', 'p', 'c', 'co']
            }
        ],
        // 省略文件后缀
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never'
            }
        ],
        'vue/multi-word-component-names': 0,
        // 使用for...of
        'no-restricted-syntax': [
            'error',
            {
                selector: 'ForInStatement',
                message:
                    'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
            },
            {
                selector: 'LabeledStatement',
                message:
                    'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
            },
            {
                selector: 'WithStatement',
                message:
                    '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
            }
        ],
        // 允许循环中的++
        'no-plusplus': [
            'error',
            {
                allowForLoopAfterthoughts: true
            }
        ],
        // 解除ts中Boolean类型限制, 因为naive-ui中使用了Boolean
        '@typescript-eslint/ban-types': 'off',
        // 不强制解构
        'prefer-destructuring': ['error', { object: false, array: false }],
        // 单个方法时不强制默认导出
        'import/prefer-default-export': 'off',
        // 忽略某些引入
        'import/no-unresolved': [2, { ignore: ['virtual:svg-icons-register'] }]
    },
    // 解决报错unable resolve
    settings: {
        'import/resolver': {
            typescript: {}
        }
    }
}
