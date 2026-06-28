// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

// 公開URLはビルド変数 PUBLIC_SITE_URL から注入（本番=Cloudflareのビルド変数, ローカル=.env）。
// ソースに実URLを持たない（未設定時は開発用 localhost にフォールバック）。
const { PUBLIC_SITE_URL } = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), '');
const siteUrl = (PUBLIC_SITE_URL || 'http://localhost:4321').replace(/\/+$/, '');

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  integrations: [sitemap()],
});
