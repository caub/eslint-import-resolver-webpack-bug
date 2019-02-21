```
npx eslint .

Error resolving webpackConfig { Error: Cannot find module '/home/caub/dev/eslint-import-resolver-webpack-bug/frontend/frontend/config/webpack.config.dev.js'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:613:15)
    ....
```

changing `"config": "./frontend/config/webpack.config.dev.js"` to `"config": "./config/webpack.config.dev.js"` in `.eslintrc` make `npx eslint .` work, but it's confusing since we run eslint from the root directory, not from frontend/. and also even after that change, it'll fail in more complex cases (I'll try push one)
