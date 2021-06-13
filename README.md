# Install packages

パッケージをインストールするとき、Font Awesome Pro の Package Token が必要です。  
入手したトークンを `.npmrc` ファイルで設定することで認証が通り、パッケージをインストールできるようになります。

まず、`.npmrc.example` を `.npmrc` としてコピーし、`FONTAWESOME_AUTH_TOKEN` をトークンに置き換えます。  
その後、`yarn` でパッケージをインストールします。

`.npmrc` は `.gitignore` に追加されているので git にトラックされません。

## Get Font Awesome Pro Package Token

1. Font Awesome に prane アカウントでログインする
1. Account Detail ページヘ移動する
1. Pro Package Token 欄に表示される

# Start Next.js

## Development Mode

```bash
yarn dev
```
