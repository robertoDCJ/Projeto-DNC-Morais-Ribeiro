
import { ReactNode } from 'react';
import style from './ImgCarousel.module.css'

interface ImgCarouselProps {
    backgroundImageUrl: string,
    title: string,
    text: string,
    info: ReactNode,
    line: boolean,
}

export const ImgCarousel: React.FC<ImgCarouselProps> = ({backgroundImageUrl, title, text, info, line}) => {
    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        width: '100%',
        height: '659px',
    }

    return (
      <div style={divStyle}>
        <div className={style.content}>
            <h1>{title}</h1>
            <h2>{text}</h2>
            {line && <div className={style.line}></div>}
            <p>{info}</p>
        </div>
      </div>
    );
  };
  
