'use client';

type Skin = {
  name: string;
  weapon: string;
  image: string;
};

const skins: Skin[] = [
  { name: 'Prime Vandal', weapon: 'Vandal', image: '/skins/prime-vandal.jpg' },
  { name: 'Elderflame Operator', weapon: 'Operator', image: '/skins/elderflame-operator.jpg' },
  { name: 'Reaver Phantom', weapon: 'Phantom', image: '/skins/reaver-phantom.jpg' },
  { name: 'Oni Frenzy', weapon: 'Frenzy', image: '/skins/oni-frenzy.jpg' },
  { name: 'Singularity Sheriff', weapon: 'Sheriff', image: '/skins/singularity-sheriff.jpg' },
];

export default function SkinsPage() {
  return (
    <>
      <main className="main-content">
     <h1 style={{ textAlign: 'center' }}>Скины</h1>
        <section className="container">
          {skins.map((skin, index) => (
            <div className="card" key={index}>
              <img src={skin.image} alt={skin.name} />
              <h3>{skin.name}</h3>
              <p>{skin.weapon}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
