import { useContext } from 'react';
import AppStateContext from '../contexts/AppStateContext';

export default function Prototypes() {
  const { prototypes } = useContext(AppStateContext);
  return (
    <main>
      <div className="prototypes">
        {prototypes.map((prototype) => {
          const { id, thumbnail, title, price, desc, pieUrl } = prototype;
          return (
            <div className="prototype" key={id}>
              <a href={pieUrl} target="_blank" rel="noreferrer">
                <div style={{ padding: '25px 0 33px 0' }}>
                  <video autoPlay loop playsInline className="prototype__artwork prototype__edit" src={thumbnail} style={{ objectFit: 'contain' }}></video>
                </div>
              </a>
              <div className="prototype__body">
                <div className="prototype__title">
                  <button className="btn btn--primary float--right">
                    <i className="icon icon--plus"></i>
                  </button>
                  {title}
                </div>
                <div className="prototype__price">$ {price}</div>
                <div className="prototype__desc">{desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
