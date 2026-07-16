import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/ProjectSection";
import Infrastructure from "@/components/Infrastructure";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

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

      <ProjectSection
        id="my-home"
        label="Personal Dashboard"
        title="My-Home"
        lead="生活記録を可視化する個人用ダッシュボード"
        description="勉強、ライフログ、家計簿を一つの画面で確認できます。"
        image="/images/my-home.png"
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
      <Infrastructure />
    </>
  );
}