# iaxion ハブサイト

`iaxion.dev`（ルート）に公開する、プロジェクト一覧のポータル。Astro 製の静的サイト。
各プロジェクトはサブドメイン（例: `money-tools.iaxion.dev`）で独立運用し、ここから案内する。

## 公開（Cloudflare）
- 新しい Cloudflare の Workers/Pages プロジェクトとして Git 連携でデプロイ
- Build command: `npm run build` / Output: `dist`
- カスタムドメイン: **`iaxion.dev`**（money-tools とは別プロジェクト・リダイレクトしない）

## 環境変数（Cloudflare → 設定 → ビルド → ビルド変数）
| 変数 | 例 | 用途 |
| :-- | :-- | :-- |
| `PUBLIC_SITE_URL` | `https://iaxion.dev` | canonical/サイトマップ |
| `PUBLIC_CONTACT_EMAIL` | （連絡先メール） | お問い合わせ表示 |
| `PUBLIC_ADSENSE_CLIENT` | `ca-pub-XXXX` | AdSenseメタタグ＋ads.txt自動生成 |
| `PUBLIC_GSC_VERIFICATION` | （任意） | Search Console メタタグ認証 |

※ 実値はソースに入れない（`.env` はローカル専用・gitignore済）。

## プロジェクトを追加するとき
`src/config.ts` の `PROJECTS` 配列に1件追記するだけ。
