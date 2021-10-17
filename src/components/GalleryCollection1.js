import React,{useState} from 'react';
//here we can store all the image with their id
//id will define their type
//for example id: 1 use for 1st type and id: 2 for 2st type so on.....
const data = [
    {
      image:
        'https://i.ibb.co/Pzq800h/football-helmet.png',
        id: 1
    },
    {
      image:
        'https://images.unsplash.com/photo-1591290950068-40b9b598e6fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        id: 1
    },
    {
        image:
          'https://i.ibb.co/BV1NK9H/straw-hat.png',
          id: 1
      },
      {
        image:
          'https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80',
          id: 2
      },
      {
        image:
          'https://i.ibb.co/BV1NK9H/straw-hat.png',
          id: 2
      },
      {
        image:
          'https://i.ibb.co/Pzq800h/football-helmet.png',
          id: 2
      },
      {
        image:
          'https://i.ibb.co/BV1NK9H/straw-hat.png',
          id: 3
      },
      {
        image:
          'https://images.unsplash.com/photo-1546514714-bbedf0abd907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
          id: 3
      },
      {
        image:
          'https://i.ibb.co/BV1NK9H/straw-hat.png',
          id: 3
      },
      {
        image:
          'https://i.ibb.co/Pzq800h/football-helmet.png',
          id: 8
      },
  ];

function GalleryCollection1() {


    //here using states to switch from on component and its pretty simple
  //we also need functions
  const [home, sethome] = useState(true);
  const [about, setabout] = useState(false)
  const [project, setproject] = useState(false)
  const Home=()=>{
      sethome(true);
      setabout(false)
      setproject(false)
  }
  const About=()=>{
      setabout(true);
      sethome(false);
      setproject(false);
  }
  const Project=()=>{
      setproject(true);
      setabout(false)
      sethome(false); 
  }

    return (
    <div className="gallery">
<div className="gallery__container">


<div className="image__nav">
  <ul>
    <li>
      <button onClick={Home}>Type1</button>
    </li>
    <li>
      <button onClick={About}>Type2</button>
    </li>
    <li>
    <button onClick={Project}>Type3</button>
    </li>
  </ul>
</div>


{/*for Type 1*/}

<div className={home ? "" : "non-active"}>
<div class="container">
      <div class="row">
      {data.filter(image => image.id === 1).map(filteredimage => (
        <div class="col-sm">
          {<img src={filteredimage.image} alt="" className="image"/>}
        </div>
      ))}
      </div>
</div>
</div>

{/*for Type 2*/}

<div className={about ? "" : "non-active"}>
<div class="container">
      <div class="row">
      {data.filter(image => image.id === 2).map(filteredimage => (
        <div class="col-sm">
          {<img src={filteredimage.image} alt="" className="image"/>}
        </div>
      ))}
      </div>
</div>
</div>

{/*for Type 3*/}

<div className={project ? "" : "non-active"}>
<div class="container">
      <div class="row">
      {data.filter(image => image.id === 3).map(filteredimage => (
        <div class="col-sm">
          {<img src={filteredimage.image} alt="" className="image"/>}
        </div>
      ))}
      </div>
</div>
</div>

</div>
    </div>
    )
}

export default GalleryCollection1
