import React from 'react'
const data = [
    {
      image:
        'https://i.ibb.co/BV1NK9H/straw-hat.png',
        id: 0
    },
    {
      image:
        'https://i.ibb.co/Pzq800h/football-helmet.png',
        id: 1
    },
    {
        image:
          'https://i.ibb.co/BV1NK9H/straw-hat.png',
          id: 0
      },
      {
        image:
          'https://i.ibb.co/Pzq800h/football-helmet.png',
          id: 0
      },
      {
        image:
          'https://i.ibb.co/BV1NK9H/straw-hat.png',
          id: 0
      },
      {
        image:
          'https://i.ibb.co/Pzq800h/football-helmet.png',
          id: 0
      },
      {
        image:
          'https://i.ibb.co/BV1NK9H/straw-hat.png',
          id: 0
      },
      {
        image:
          'https://i.ibb.co/Pzq800h/football-helmet.png',
          id: 0
      },
      {
        image:
          'https://i.ibb.co/BV1NK9H/straw-hat.png',
          id: 0
      },
      {
        image:
          'https://i.ibb.co/Pzq800h/football-helmet.png',
          id: 0
      },
  ];
function GalleryCollection1() {
    return (
        <div>
        <div>
      {data.filter(image => image.id === 1).map(filteredimage => (
        <li>
          {<img src={filteredimage.image} alt="" className="image"/>}
        </li>
      ))}
    </div>
    <div>
      {data.filter(image => image.id === 1).map(filteredimage => (
        <li>
          {filteredimage.name}
          {<img src={filteredimage.image} alt="" className="image"/>}
        </li>
      ))}
    </div>
    <div>
      {data.filter(image => image.id === 1).map(filteredimage => (
        <li>
          {filteredimage.name}
          {<img src={filteredimage.image} alt="" className="image"/>}
        </li>
      ))}
    </div>
    </div>
    )
}

export default GalleryCollection1
