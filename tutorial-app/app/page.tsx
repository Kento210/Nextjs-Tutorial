'use client';

export default function Home() {

    const fetchCatImage = async () => {
      const res = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await res.json();
      console.log(data);
    };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'sans-serif',
        justifyContent: 'center',
        height: '100vh',
      }}>
        <h1>猫画像を取得</h1>
        <p>
          <img
            src="https://cdn2.thecatapi.com/images/4kc.gif"
            width={500}
            height="auto"
          />
        </p>
        <button style={{ marginTop:"18"}} onClick={fetchCatImage}>
          次の猫画像
        </button>
    </div>
  )
}
