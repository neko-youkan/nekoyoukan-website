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
        githubUrl="#"
      />

      <ProjectSection
        id="my-home"
        label="Personal Dashboard"
        title="My-Home"
        lead="毎日の勉強・家計簿・ライフログを、ひとつのダッシュボードで可視化。"
        description="My-Homeは、勉強・睡眠・体重・家計簿などを一元管理する個人用ダッシュボードです。毎日の記録をグラフやカードで確認し、自分の生活を振り返りやすくしています。"
        image="/My-home.jpg"
        imageAlt="My-Homeのダッシュボード画面"
        features={[
          "勉強時間の可視化",
          "ライフログ管理",
          "家計簿・収支分析",
          "AIコメント表示",
          "Google Spreadsheet連携",
        ]}
        technologies={[
          "Python",
          "Streamlit",
          "SQLite",
          "Google API",
        ]}
        projectUrl="https://my-home.nekoyoukan.com"
        githubUrl="#"
        reverse
      />
      <Infrastructure />
    </>
  );
}