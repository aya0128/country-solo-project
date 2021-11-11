# countryAPI

1.  [はじめに](#はじめに)
1.  [API の概要](#APIの概要)
1.  [環境設定](#環境設定)
    1.  [Postgres](#postgres)
    1.  [依存パッケージのインストールとスタートアップ](#依存パッケージとスタートアップ)

## はじめに

国ごとの緯度経度や国の挨拶のデータを用いたエンドポイントです。

## API の概要

- GET 国名から緯度と経度を取得
- POST 国の情報（国名、国コード、緯度経度）の追加
- DELETE 　国の情報の削除
- PATCH 　国の情報の変更
- GET 国名から挨拶「こんにちは」の取得

## 環境設定

### Postgres

- postgres をインストールする。
- 次のコマンドを実行して、このプロジェクトのデータベースを作成する。

```bash
  echo "CREATE DATABASE country;" | psql
```

- .env ファイルに以下の DB 情報（環境変数）を記載する。
  - DB_HOST
  - DB_PORT
  - DB_NAME
  - DB_USER
  - DB_PASSWORD

### 依存パッケージのインストールとアプリの起動手順

コマンドの例：

依存パッケージをインストールするには：

```bash
  npm i
```

マイグレーションを実行し、データベースをセットアップするには：

```bash
  npm run migrate
```

マイグレーションをロールバックするには：

```bash
  npm run rollback
```

テストを実行するには：

```bash
  npm run test
```

アプリを実行するには：

```bash
  npm run start
```

開発時にアプリを実行するには：

```bash
  npm run dev
```
