

import Link from 'next/link';

export default function RegisterPage() {
  return (
    <main style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '80vh', 
      padding: '20px' 
    }}>
      <div style={{ 
        backgroundColor: '#1b1b1b', 
        padding: '40px', 
        borderRadius: '8px', 
        boxShadow: '0 4px 10px rgba(0,0,0,0.5)', 
        width: '100%',
        maxWidth: '380px', 
        textAlign: 'center' 
      }}>
        <h2 style={{ color: '#ff4655', marginBottom: '25px', fontSize: '1.8rem' }}>Создать аккаунт</h2>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input
            type="text"
            placeholder="Имя пользователя"
            required
            style={{ 
              padding: '12px', 
              borderRadius: '6px', 
              border: '1px solid #333', 
              backgroundColor: '#0e0e0e', 
              color: '#fff',
              fontSize: '1rem' 
            }}
          />
          <input
            type="email"
            placeholder="Email"
            required
            style={{ 
              padding: '12px', 
              borderRadius: '6px', 
              border: '1px solid #333', 
              backgroundColor: '#0e0e0e', 
              color: '#fff',
              fontSize: '1rem' 
            }}
          />
          <input
            type="password"
            placeholder="Пароль"
            required
            style={{ 
              padding: '12px', 
              borderRadius: '6px', 
              border: '1px solid #333', 
              backgroundColor: '#0e0e0e', 
              color: '#fff',
              fontSize: '1rem' 
            }}
          />
          
          <Link href="/" passHref style={{ width: '100%' }}>
            <button
              type="submit"
              style={{
                backgroundColor: '#ff4655',
                color: '#fff',
                padding: '12px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                marginTop: '15px',
                width: '100%',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#ff1a3c')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ff4655')}
            >
              Зарегистрироваться
            </button>
          </Link>
        </form>
        
        <p style={{ marginTop: '25px', color: '#ccc', fontSize: '0.95rem' }}>
          Уже есть аккаунт?{' '}
          <Link href="/login" style={{ color: '#ff4655', textDecoration: 'none', fontWeight: 'bold' }}>
            Войти
          </Link>
        </p>
      </div>
    </main>
  );
}