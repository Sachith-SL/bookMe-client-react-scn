import './AboutUs.css';
function AboutUs() {

  const name= import.meta.env.VITE_BaseURL;

  console.log(name);

    return (
        <h1 className='d-felx text-center mt-5'>ABOUT US {name}</h1>
      );
}

export default AboutUs