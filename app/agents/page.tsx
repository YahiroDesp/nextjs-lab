

import Link from 'next/link';

type Agent = {
  name: string;
  role: string;
  image: string;
  abilities: { name: string; description: string }[];
};

const agents: Agent[] = [
    {
        name: 'Jett',
        role: 'Duelist',
        image: '/agents/jett.jpg',
        abilities: [
          { name: 'Cloudburst', description: 'Бросает дымовую гранату для укрытия.' },
          { name: 'Updraft', description: 'Позволяет подпрыгнуть вверх.' },
          { name: 'Tailwind', description: 'Мгновенно перемещается в выбранном направлении.' },
          { name: 'Blade Storm', description: 'Экипирует кинжалы для метких ударов.' },
        ],
      },
      {
        name: 'Sage',
        role: 'Sentinel',
        image: '/agents/sage.jpg',
        abilities: [
          { name: 'Barrier Orb', description: 'Создаёт стену для блокировки пути.' },
          { name: 'Slow Orb', description: 'Замедляет движение противников.' },
          { name: 'Healing Orb', description: 'Восстанавливает здоровье союзников.' },
          { name: 'Resurrection', description: 'Возрождает павшего союзника.' },
        ],
      },
      {
        name: 'Phoenix',
        role: 'Duelist',
        image: '/agents/phoenix.jpg',
        abilities: [
          { name: 'Blaze', description: 'Создаёт стену огня, наносящую урон.' },
          { name: 'Curveball', description: 'Ослепляет противников световой гранатой.' },
          { name: 'Hot Hands', description: 'Метает огненную сферу, наносящую урон.' },
          { name: 'Run It Back', description: 'Позволяет возродиться после смерти на время действия.' },
        ],
      },
      {
        name: 'Sova',
        role: 'Initiator',
        image: '/agents/sova.jpg',
        abilities: [
          { name: 'Owl Drone', description: 'Разведка с дроном, помечает врагов.' },
          { name: 'Shock Bolt', description: 'Наносит электрический урон по области.' },
          { name: 'Recon Bolt', description: 'Обнаруживает врагов через стены.' },
          { name: 'Hunter\'s Fury', description: 'Три снаряда, наносящие урон через всю карту.' },
        ],
      },
      {
        name: 'Breach',
        role: 'Initiator',
        image: '/agents/breach.jpg',
        abilities: [
          { name: 'Aftershock', description: 'Взрыв в стене, наносящий урон.' },
          { name: 'Flashpoint', description: 'Ослепляющий импульс через стены.' },
          { name: 'Fault Line', description: 'Сейсмический удар, оглушающий врагов.' },
          { name: 'Rolling Thunder', description: 'Мощный сейсмический удар по всей линии.' },
        ],
      },
      {
        name: 'Brimstone',
        role: 'Controller',
        image: '/agents/brimstone.jpg',
        abilities: [
          { name: 'Incendiary', description: 'Бросает огненную гранату для зоны урона.' },
          { name: 'Stim Beacon', description: 'Увеличивает скорость стрельбы союзников.' },
          { name: 'Sky Smoke', description: 'Создаёт дымовую завесу на поле.' },
          { name: 'Orbital Strike', description: 'Вызов бомбардировки по большой области.' },
        ],
      },
      {
        name: 'Viper',
        role: 'Controller',
        image: '/agents/viper.jpg',
        abilities: [
          { name: 'Snake Bite', description: 'Химическая граната с уроном и замедлением.' },
          { name: 'Poison Cloud', description: 'Дымовая граната с химическим эффектом.' },
          { name: 'Toxic Screen', description: 'Дымовая стена для блокировки обзора.' },
          { name: 'Viper\'s Pit', description: 'Большая зона с химическим уроном и замедлением.' },
        ],
      },
      {
        name: 'Omen',
        role: 'Controller',
        image: '/agents/omen.jpg',
        abilities: [
          { name: 'Shrouded Step', description: 'Телепортация на короткое расстояние.' },
          { name: 'Paranoia', description: 'Проникающий скилл, ослепляющий врагов.' },
          { name: 'Dark Cover', description: 'Сферический дым, скрывающий обзор.' },
          { name: 'From the Shadows', description: 'Телепорт на карту и возможность вернуться при убийстве.' },
        ],
      },
      {
        name: 'Killjoy',
        role: 'Sentinel',
        image: '/agents/killjoy.jpg',
        abilities: [
          { name: 'Nanoswarm', description: 'Гранаты с уроном по области.' },
          { name: 'Alarmbot', description: 'Автомат, который замедляет и помечает врагов.' },
          { name: 'Turret', description: 'Автоматическая турель, стреляющая по врагам.' },
          { name: 'Lockdown', description: 'Большое устройство, которое замедляет всех врагов.' },
        ],
      },
      {
        name: 'Raze',
        role: 'Duelist',
        image: '/agents/raze.jpg',
        abilities: [
          { name: 'Boom Bot', description: 'Робот, преследующий врагов и наносящий урон.' },
          { name: 'Blast Pack', description: 'Граната, которая взрывается и отбрасывает врагов.' },
          { name: 'Paint Shells', description: 'Кассетная граната, наносящая урон.' },
          { name: 'Showstopper', description: 'Ракетница с большим уроном в зоне.' },
        ],
      },
      {
        name: 'Reyna',
        role: 'Duelist',
        image: '/agents/reyna.jpg',
        abilities: [
          { name: 'Leer', description: 'Глаз, который ослепляет врагов.' },
          { name: 'Devour', description: 'Восстанавливает здоровье после убийства.' },
          { name: 'Dismiss', description: 'Позволяет становиться невидимой на короткое время.' },
          { name: 'Empress', description: 'Увеличивает скорость стрельбы и урон при активации.' },
        ],
      },
      {
        name: 'Yoru',
        role: 'Duelist',
        image: '/agents/yoru.jpg',
        abilities: [
          { name: 'Fakeout', description: 'Создаёт звуковой обман для врагов.' },
          { name: 'Blindside', description: 'Ослепляющая граната для врагов.' },
          { name: 'Gatecrash', description: 'Телепорт в выбранную точку.' },
          { name: 'Dimensional Drift', description: 'Становится невидимым и проникает за врагов.' },
        ],
      },
      {
        name: 'KAY/O',
        role: 'Initiator',
        image: '/agents/kayo.jpg',
        abilities: [
          { name: 'FRAG/ment', description: 'Взрывчатка для зоны урона.' },
          { name: 'FLASH/drive', description: 'Ослепляющая граната.' },
          { name: 'ZERO/point', description: 'Подавляет способности врагов.' },
          { name: 'NULL/cmd', description: 'Улучшает боевые характеристики и даёт усиление союзникам.' },
        ],
      },
      {
        name: 'Skye',
        role: 'Initiator',
        image: '/agents/skye.jpg',
        abilities: [
          { name: 'Regrowth', description: 'Восстанавливает здоровье союзников.' },
          { name: 'Trailblazer', description: 'Контролируемый животный дрон с уроном.' },
          { name: 'Guiding Light', description: 'Флеш-дрон для ослепления врагов.' },
          { name: 'Seekers', description: 'Отправляет три существа, которые ищут и помечают врагов.' },
        ],
      },
      {
        name: 'Astra',
        role: 'Controller',
        image: '/agents/astra.jpg',
        abilities: [
          { name: 'Gravity Well', description: 'Притягивает врагов к центру области.' },
          { name: 'Nova Pulse', description: 'Взрыв, который оглушает врагов.' },
          { name: 'Nebula / Dissipate', description: 'Создаёт дым или перемещается из звезды.' },
          { name: 'Astral Form / Cosmic Divide', description: 'Создаёт барьер, блокирующий урон и звук.' },
        ],
      },
];

export default function AgentsPage() {
    return (
        <>
            <main>
                <h1 style={{ textAlign: 'center' }}>Агенты</h1>
                <section className="container">
                    {agents.map((agent, index) => (
                        <div className="card" key={index}>
                            
                            {/* Кнопка "i" для перехода на страницу деталей агента */}
                            <Link href={`/agents/${agent.name.toLowerCase()}`} className="info-icon-button">
                                i
                            </Link>

                            <img src={agent.image} alt={agent.name} />
                            <h3>{agent.name}</h3>
                            <p>{agent.role}</p>
                            
                        </div>
                    ))}
                </section>
            </main>
        </>
    );
}