import './globals.css';
import Link from 'next/link';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Valorant',
  description: 'Site about Valorant, skins and agents',
};

type RootLayoutProps = { children: ReactNode };

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru">
      <body>
        <header>
          {/* Группа навигационных ссылок слева */}
          <nav>
            <Link href="/" className="nav-link">Главная</Link>
            <Link href="/agents" className="nav-link">Агенты</Link>
            <Link href="/skins" className="nav-link">Скины</Link>
          </nav>
          
          {/* Группа кнопок аутентификации справа */}
          <div className="auth-buttons">
            <Link href="/login" className="auth-link">Войти</Link>
            <Link href="/register" className="auth-link">Регистрация</Link>
          </div>
        </header>

        <main>{children}</main>

        <footer>
          <div className="footer-container">
            <div className="footer-column footer-column-left">
              <h2>Контакты</h2>
              <p>Email: info@valorant.com</p>
              <p>Тел: +7 123 456 78 90</p>
            </div>
            <div className="footer-column footer-column-center">
              <h2>О нас</h2>
              <p>Valorant — командный тактический шутер от Riot Games.</p>
              <p>Выбирайте агентов, используйте уникальные способности и сражайтесь за победу!</p>
            </div>
            <div className="footer-column footer-column-right">
              <h2>Мы в сети</h2>
              <p>Instagram: @valorant</p>
              <p>Twitter: @playvalorant</p>
              <p>Discord: Valorant Community</p>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; 2025 Valorant. Все права защищены.
          </div>
        </footer>
      </body>
    </html>
  );
}