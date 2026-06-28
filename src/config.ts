/**
 * iaxion ハブサイトの設定。
 *
 * ★個人情報・環境依存値はソースに直書きせず、環境変数から注入する★
 *  ローカル: `.env`（gitignore 済）／本番: Cloudflare のビルド変数
 *
 * 使う環境変数:
 *  - PUBLIC_SITE_URL          公開URL（例 https://iaxion.dev）
 *  - PUBLIC_CONTACT_EMAIL     問い合わせ先メール
 *  - PUBLIC_ADSENSE_CLIENT    Google AdSense パブリッシャーID（ca-pub-...）
 *  - PUBLIC_GSC_VERIFICATION  Search Console メタタグ認証コード（任意）
 */

const env = import.meta.env;
const stripTrailingSlash = (url: string) => url.replace(/\/+$/, '');

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  lang: string;
  author: string;
  contactEmail: string;
  adsenseClient: string;
  gscVerification: string;
}

export const SITE: SiteConfig = {
  name: env.PUBLIC_SITE_NAME || 'iaxion',
  description:
    'iaxion が運営するWebサービスとツールのポータルサイトHub。便利なオンラインツールを公開しています。',
  url: stripTrailingSlash(env.PUBLIC_SITE_URL || 'http://localhost:4321'),
  lang: 'ja',
  author: env.PUBLIC_SITE_AUTHOR || 'iaxion',
  contactEmail: env.PUBLIC_CONTACT_EMAIL || '',
  adsenseClient: env.PUBLIC_ADSENSE_CLIENT || '',
  gscVerification: env.PUBLIC_GSC_VERIFICATION || '',
};

/**
 * 公開中／予定のプロジェクト一覧。サブドメインを足したらここに追記する。
 */
export interface Project {
  name: string;
  description: string;
  url: string;
  status: 'live' | 'soon';
  tags: string[];
}

export const PROJECTS: Project[] = [
  {
    name: 'お金の計算ツール',
    description:
      '給与の手取り・積立NISA・住宅ローン・ふるさと納税・退職金など、お金にまつわる計算を無料で。2025年税制対応。',
    url: 'https://money-tools.iaxion.dev/',
    status: 'live',
    tags: ['手取り計算', 'NISA', '住宅ローン', 'ふるさと納税'],
  },
];
