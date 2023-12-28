# react_boilerplate

React を用いた SPA 開発を迅速に開始するためのテンプレートです。

## Installation

### Node.js のインストール

Node.js および npm のバージョン管理ツールとして Volta を使用しています。公式ドキュメントを確認の上インストールしてください。

[Volta documents](https://docs.volta.sh/guide/)

- Node.js v18.18.2 (2023/10/15 時点 LTS)
- npm (上記 Node.js 付属バージョン)

### 開発サーバー起動

```bash
npm install # package install
npm run dev # start dev server
```

### 本番ビルド、サーバー起動

以下コマンドで静的アセットを出力。また、production モードでアプリケーション起動。

```bash
npm run build # build
npm run start # start production server
```

## Custom theme

Chakra UI のカスタムテーマ機能を使用し、独自の設定を行なっています。

対象のソースコードは`/src/theme`を参照してください。

[Chakra UI](https://chakra-ui.com/)

### colors

アプリケーション全体における color を管理します。

[Customizing theme tokens](https://chakra-ui.com/docs/styled-system/customize-theme#customizing-theme-tokens)

### components

グローバルな components のスタイルを管理します。

[Customizing global styles](https://chakra-ui.com/docs/styled-system/customize-theme#customizing-single-components)

### styles

グローバルな style を管理します。

[Customizing global styles](https://chakra-ui.com/docs/styled-system/customize-theme#customizing-global-styles)

### storybook

StoryBook 上にて Chakra UI の component を確認することができます。

[Chakra UI + Storybook](https://chakra-ui.com/getting-started/with-storybook)

## Features ディレクトリ

このテンプレートでは `src/features` で機能(feature)ごとにディレクトリを分割する構成を取っています。

単一の feature は自身の責務のみ関知し、feature 同士が関与することはありません。

### 単一の feature に依存する場合

単一の feature に依存する component や hook、util を作成する場合は `features/xxx/` に作成してください。

例: `features/auth/components/SomeComponent` 、 `features/auth/hooks/useSomeHook` など。

### グローバルコンポーネント

`src/components` 以下に存在するコンポーネントはグローバルで使用することを想定しています。

グローバルコンポーネントは複数の種類があり、それぞれ役割が異なります。

#### elements

`src/components/elements/` に存在する汎用的なコンポーネントです。

feature に依存することなく、UI を構築することだけに責務を持つ場合に該当します。

`elements/` 以下ではコンポーネントの粒度は関知しないため、単一の要素で構成される `Button` や 複数の要素で構成される `Dialog` などは並列に並びます。

#### layouts

`src/components/layouts/` に存在するレイアウトを構築するためのコンポーネントです。

単体で完結することはなく、枠組みを構築することに責務を持ちます。

props として必ず `child` を渡される必要があります。

#### providers

`src/components/providers/` に存在する context を構築するためのコンポーネントです。

任意の state を含んだ context を構築し、ツリー以下に伝搬する責務を持ちます。

#### shares

`src/components/shares/` に存在する feature 間で共有されるためのコンポーネントです。

基本的に feature 同士は関与することはありませんが、feature 間でコンポーネントを共有したいケースがあります。

その場合、共有コンポーネントを使用することができます。

※ このようなケースでは `elements` のコンポーネントとは feature に依存しているという点で明確に違いがあります

## Plop

Plop.js で CLI からのファイル群作成が可能です。

設定詳細は以下のファイルを確認してください。

- `plop-templates` テンプレートファイル
- `plopfile.js` 設定ファイル

[Plop.js](https://plopjs.com/)
