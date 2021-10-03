表面的な知識の暗記よりもWEBシステムやプログラミング言語への理解を深めたいと考え、
「Laravel」や「Ruby on Rails」、「Spring Boot」、「Django」などの
WEBフレームワークを使用せず、PHPとMYSQLを用いて一から作成しました。

裏でどのようなことが起こっているのかを理解しながら開発を行えました。
次は、フレームワークを使用した実用的な開発を行うことが課題です。

使用技術
【フロントエンド】
HTML/CSS
JavaScript（装飾のためにchart.jsのライブラリを使用）
Bootstrap

【バックエンド】
PHP 8.0.9
MariaDB 10.4.20

【インフラ】
Apache 2.4.48
AWS
・VPC EC2 でのホスティング
・LoadBalancer Route53 での独自ドメイン
・Codedeploy Codepipeline　CI/CDパイプラインを構築し自動デプロイ

【バージョン管理】
・Git/GitHub

【開発環境】
・Windows
・VScode


要件定義
・ユーザー登録、ログイン機能
・投稿機能
・コメント機能
・投票機能
・公開、非公開機能　

非機能要件
・SQLインジェクションのセキュリティーホール対策
・フォームのバリデーションチェック
・Preparedステートメントを使用してパフォーマンスの向上
・.htaccessでのURLのリダイレクト処理
・パスワードのハッシュ化でセキュリティの向上（bcrypt）

・PHPの基本的な文法
・GETとPOSTの使い分け、Session,Cookie等のWEB基礎知識
・正規表現の使い方
・名前空間、クラスを使った記法
・SQLを使ったデータベースの操作方法
・Apacheの設定方法
・SQLインジェクション等の避けるべきセキュリティーホール
・CSS、Sassの基礎
・Sassと組み合わせたBootstrapの使い方
・JavaScriptの基礎について学びます。
・JavaScriptを用いたフォームのバリデーションチェックについて学びます。
・MVCアーキテクチャの思想


【機能一覧】
《基本機能》
・ユーザー新規登録/ログイン/ログアウト（devise）
・ユーザープロフィール登録/編集/詳細機能（名前/プロフィール文）
・プロフィール画像アップロード機能（carrierwave）
・悩み新規投稿/編集/削除/詳細機能
・悩みへのタグ付け機能
・いいね機能
・よく応援されている悩み順に一覧表示
・悩みを新着順に一覧表示
・悩みへのコメント機能
・個別相談機能（非同期通信）
・悩みキーワード検索機能（ransack）
・悩みをタグから検索できる機能（ransack）

《応用機能》
・かんたんログイン
・悩み一覧にページネーションを使う
・レスポンシブ対応
・通知機能

《その他》
・単体テスト
・結合テスト

【使用技術一覧】
《フロントエンド》
・HTML/CSS
・JavaScript
・Bootstrap(5.0)(カスタマイズして使用する)

《バックエンド》
・Ruby(3.0.0)
・Ruby on Rails(6.0.3.1)
・MySQL(8.0)

《インフラ》
・heroku(開発初期)
・AWS(VPC/EC2/S3/RDS)
・Nginx（Webサーバー）
・Puma（アプリケーションサーバー）

《テスト》
・RSpec

《CI/CD》
・CircleCI（自動テスト）
・Capistrano（自動デプロイ）
・Rubocop（コーディングチェック）

《バージョン管理》
・Git/GitHub

《開発環境》
・VScode
・Docker

【開発フェーズ】
《第一段階》
・基本機能実装
・テストの作成
・UI/UXのブラッシュアップ
・コーディングチェック
・herokuへのデプロイ

《第二段階》
・応用機能実装
・UI/UXのブラッシュアップ
・コーディングチェック

《第三段階》
・インフラをherokuからAWSに変更（VPC/EC2/S3/RDS）
・Docker/docker-composeの導入
・CI/CDの導入

《第四段階》
・EC2からECSに変更