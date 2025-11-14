'use client';

import Link from 'next/link';
import { useState } from 'react';

const popularAgents = [
  { name: 'Jett', role: 'Duelist', image: '/agents/jett.jpg', link: '/agents' },
  { name: 'Sage', role: 'Sentinel', image: '/agents/sage.jpg', link: '/agents' },
  { name: 'Phoenix', role: 'Duelist', image: '/agents/phoenix.jpg', link: '/agents' },
  { name: 'Sova', role: 'Initiator', image: '/agents/sova.jpg', link: '/agents' },
];

const popularSkins = [
  { name: 'Prime Vandal', weapon: 'Vandal', image: '/skins/prime-vandal.jpg', link: '/skins' },
  { name: 'Elderflame Operator', weapon: 'Operator', image: '/skins/elderflame-operator.jpg', link: '/skins' },
  { name: 'Reaver Phantom', weapon: 'Phantom', image: '/skins/reaver-phantom.jpg', link: '/skins' },
  { name: 'Oni Frenzy', weapon: 'Frenzy', image: '/skins/oni-frenzy.jpg', link: '/skins' },
];

export default function HomePage() {
  const [showNews, setShowNews] = useState(true);

  return (
    <main>
      {/* Баннер */}
      <section className="banner">
        <img src="/banner.jpg" alt="Valorant Banner" />
        <div className="banner-text">
          <h1>Valorant</h1>
          <p>Тактический шутер с уникальными агентами и захватывающими скинами!</p>
        </div>
      </section>

      {/* Новости */}
      {showNews && (
        <section className="news">
          <h2>Новости и события</h2>
          <div className="news-cards">
            <div className="news-card">
              <h3>Обновление 5.0</h3>
              <p>Новые агенты, карты и скины! Проверьте свежие изменения.</p>
            </div>
            <div className="news-card">
              <h3>Турнир Valorant</h3>
              <p>Присоединяйтесь к турниру и соревнуйтесь с игроками со всего мира!</p>
            </div>
          </div>
          <button onClick={() => setShowNews(false)} className="close-news">Скрыть новости</button>
        </section>
      )}

      {/* Популярные агенты */}
      <section className="section">
        <h2>Популярные агенты</h2>
        <div className="grid">
          {popularAgents.map((agent, idx) => (
            <Link href={agent.link} key={idx} className="card">
              <img src={agent.image} alt={agent.name} />
              <h3>{agent.name}</h3>
              <p>{agent.role}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Популярные скины */}
      <section className="section">
        <h2>Популярные скины</h2>
        <div className="grid">
          {popularSkins.map((skin, idx) => (
            <Link href={skin.link} key={idx} className="card">
              <img src={skin.image} alt={skin.name} />
              <h3>{skin.name}</h3>
              <p>{skin.weapon}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Основная информация */}
      <section className="info">
        <h2>Об игре</h2>
        <p>
          Valorant — это командный тактический шутер от Riot Games. Выбирайте агентов,
          используйте уникальные способности и сражайтесь за победу!
        </p>
      </section>
    </main>
  );
}
