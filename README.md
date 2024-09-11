# 認証システム構築

主な機能:

- 認証
  - ログイン
  - サインアップ
  - ログアウト
  - パスワード再設定
- アカウント設定
  - プロフィール編集
  - パスワード変更
- プロフィール表示

## バックエンド

### .env ファイルの設定

```env
CLOUDINARY_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""
DEFAULT_FROM_EMAIL="xxx@gmail.com"
EMAIL_BACKEND="django.core.mail.backends.console.EmailBackend"
EMAIL_HOST_USER="xxx@gmail.com"
EMAIL_HOST_PASSWORD=""
EMAIL_HOST=smtp.gmail.com
SITE_DOMAIN=localhost:3000
SITE_NAME=""
```

## フロントエンド

### .env ファイルの設定

```env
NEXTAUTH_SECRET=""
NEXTAUTH_URL=http://localhost:3000
API_URL=http://localhost:8000
```
