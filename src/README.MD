專案環境建置步驟
安裝node.js
https://yarnpkg.com/getting-started/install
corepack enable (需管理員權限)
corepack prepare yarn@<version> --activate

VSCODE INSALL EXTENSION eslint & prettier
yarn create react-app dashboard
cd .\dashboard\
yarn dlx @yarnpkg/sdks vscode
yarn add -D eslint
yarn eslint --init
yarn add -D prettier
yarn add -D eslint-config-prettier
yarn dlx @yarnpkg/sdks

<!-- 專案套件 -->
yarn add -D prop-types
yarn add -D react-router-dom

<!-- 更新 -->
yarn set version stable (更新 yarn)
yarn upgrade (更新package)