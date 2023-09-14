'use client';
import { useState } from 'react';
import type { GetServerSideProps, NextPage } from 'next';

interface SearchCatImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

interface IndexPageProps {
  initialCatImageURL: string;
}

const fetchCatImage = async (): Promise<SearchCatImage> => {
  const res = await fetch('https://api.thecatapi.com/v1/images/search');
  const data = await res.json();
  // console.log(data);
  return data[0];
};

const Home: NextPage<IndexPageProps> = ({ initialCatImageURL }) => { 

    const [catImageURL, setCatImageURL] = useState("");

    const handleClick = async () => {
      const data = await fetchCatImage();
      setCatImageURL(data.url);
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
            src={catImageURL}
            width={500}
            height="auto"
          />
        </p>
        <button style={{ marginTop:18}} onClick={handleClick}>
          次の猫画像
        </button>
    </div>
  )
}

// SSRを実装
export const getServerSideProps: GetServerSideProps<
  IndexPageProps
  > = async () => {
    const data = await fetchCatImage();
    return {
      props: {
        initialCatImageURL: data.url,
      },
    };
  };

export default Home;
