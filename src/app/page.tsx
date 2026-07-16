import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/ProjectSection";
import Infrastructure from "@/components/Infrastructure";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      {/* ↓これを追加 */}
      <div id="projects">
        <ProjectSection
          id="home-plus"
          label="Featured Project"
          title="Home+"
          lead="毎日の生活を、ひとつの場所でもっと便利に。"
          description="Home+は、天気・ゴミの日・献立・買い物メモ・読書記録など、毎日の生活に必要な情報をひとつにまとめたWebアプリです。スマートフォンから使いやすいことを意識しながら、機能追加と改善を続けています。"
          image="/Home-plus.png"
          imageAlt="Home+のダッシュボード画面"
          features={[
            "天気と現在地の管理",
            "ゴミの日の登録と表示",
            "週間献立と買い物メモ",
            "読書記録と進捗管理",
            "ユーザー認証と管理者機能",
          ]}
          technologies={[
            "Python",
            "Streamlit",
            "SQLite",
            "AWS",
            "Cloudflare",
          ]}
          projectUrl="https://home-plus.nekoyoukan.com"
          githubUrl="https://github.com/neko-youkan/Home-plus"
        />
      </div>

      <ProjectSection
        id="my-home"
        label="Personal Dashboard"
        title="My-Home"
        lead="生活記録を可視化する個人用ダッシュボード"
        description="勉強、ライフログ、家計簿を一つの画面で確認できます。"
        image="/My-home.jpg"
        imageAlt="My-Homeの画面"
        features={[
          "勉強時間の記録",
          "睡眠・体調の管理",
          "家計簿の集計とグラフ表示",
        ]}
        technologies={["Python", "Streamlit", "SQLite", "Google Sheets"]}
        projectUrl="https://my-home.nekoyoukan.com"
        reverse
      />

      <ProjectSection
        id="misskey"
        label="Self-Hosted Server"
        title="Misskey Server"
        lead="自宅サーバーで運用する個人向けSNS"
        description="UbuntuとDockerを使用して、Misskeyのおひとり様サーバーを構築・運用しています。独自ドメイン、HTTPS化、死活監視、ステータスページまで含めて管理しています。"
        image="/misskey.png"
        imageAlt="Misskeyサーバーの画面"
        features={[
          "Docker ComposeによるMisskey構築",
          "Cloudflareを利用した独自ドメイン・HTTPS化",
          "Uptime Kumaによる死活監視",
          "ServerStatusによるサーバー状態の可視化",
          "絵文字・アップロード容量・連合設定の管理",
        ]}
        technologies={[
          "Ubuntu",
          "Docker",
          "Misskey",
          "PostgreSQL",
          "Redis",
          "Cloudflare",
          "Uptime Kuma",
        ]}
        projectUrl="https://misskey.nekoyoukan.com"
      />

      <Infrastructure />

      <Footer />
    </>
  );
}