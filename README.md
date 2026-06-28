# iaxion ハブサイト

`iaxion.dev`（ルート）に公開する、プロジェクト一覧のポータル。Astro 製の静的サイト。
各プロジェクトはサブドメイン（例: `money-tools.iaxion.dev`）で独立運用し、ここから案内する。

## 開発コマンド

| コマンド | 内容 |
| :-- | :-- |
| `npm install` | 依存関係をインストール |
| `npm run dev` | ローカル開発サーバ |
| `npm run build` | 本番ビルド → `./dist/` |

## 環境変数（`.env.example` 参照）

| 変数 | 用途 |
| :-- | :-- |
| `PUBLIC_SITE_URL` | 公開URL（canonical / サイトマップ） |
| `PUBLIC_CONTACT_EMAIL` | お問い合わせ表示 |
| `PUBLIC_ADSENSE_CLIENT` | AdSense メタタグ＋ads.txt を自動生成 |
| `PUBLIC_GSC_VERIFICATION` | Search Console メタタグ認証（任意） |

実値はソースに入れない（ローカルは `.env`＝gitignore 済、本番はホスティングのビルド変数）。

## プロジェクトを追加するとき

`src/config.ts` の `PROJECTS` 配列に1件追記するだけ（ハブのトップに自動で並ぶ）。
