import Reveal from "@/components/Reveal";
import {
  Activity,
  Cloud,
  Container,
  Globe,
  MessageCircle,
  Route,
  Server,
} from "lucide-react";

const infrastructureItems = [
  {
    icon: <Server size={30} strokeWidth={1.8} />,
    title: "AWS EC2",
    description:
      "Home+やMy-Homeを公開するためのサーバー環境を構築・運用しています。",
    tags: ["EC2", "Ubuntu", "HTTPS"],
  },
  {
    icon: <Container size={30} strokeWidth={1.8} />,
    title: "Docker",
    description:
      "Misskeyや監視サービスをコンテナで管理し、構成を再現しやすくしています。",
    tags: ["Docker", "Compose", "Container"],
  },
  {
    icon: <Globe size={30} strokeWidth={1.8} />,
    title: "Cloudflare",
    description:
      "独自ドメイン、DNS、SSL、サブドメインをまとめて管理しています。",
    tags: ["DNS", "SSL", "Domain"],
  },
  {
    icon: <MessageCircle size={30} strokeWidth={1.8} />,
    title: "Misskey Server",
    description:
      "個人用Misskeyサーバーを構築し、連合・絵文字・画像容量などを調整しています。",
    tags: ["Misskey", "PostgreSQL", "Redis"],
  },
  {
    icon: <Activity size={30} strokeWidth={1.8} />,
    title: "Uptime Kuma",
    description:
      "各サービスの稼働状況を監視し、障害時の通知とステータス公開を行っています。",
    tags: ["Monitoring", "Status", "Discord"],
  },
  {
    icon: <Route size={30} strokeWidth={1.8} />,
    title: "NGINX",
    description:
      "複数サービスへの振り分けやHTTPS接続のためにリバースプロキシを設定しています。",
    tags: ["NGINX", "Proxy", "TLS"],
  },
];

export default function Infrastructure() {
  return (
    <section className="infrastructureSection" id="infrastructure">
      <div className="infrastructureInner">
        <div className="infrastructureHeading">
          <p className="sectionLabel">Infrastructure</p>

          <h2>Build, Run, Monitor.</h2>

          <p>
            アプリを作るだけでなく、
            サーバー構築・公開・運用・監視まで
            すべて自分で設計・管理しています。
          </p>
        </div>

        <div className="infrastructureGrid">
          {infrastructureItems.map((item) => (
            <Reveal direction="up" key={item.title}>
              <article className="infrastructureCard">
                <div className="infrastructureIcon" aria-hidden="true">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="infrastructureTags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}