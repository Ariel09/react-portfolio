import HomeCss from './Home.module.css';

function Home() {
  return (
    <div className={HomeCss["container"]}>
      <div className={HomeCss['text']}>
        <h1>HI!</h1>
        <p><span className={HomeCss['welcome']}>Welcome </span>
          to my domain!
        </p>
        <p>I'm an enthusiastic newcomer to the dynamic 
            field of web development. Driven by curiosity 
            and a thirst for knowledge, I am diving headfirst
            into the world of coding to create compelling 
            and functional online experiences. Join me on 
            this exciting journey as I learn, experiment, 
            and evolve in the ever-evolving realm of web 
            development. Together, let's explore the 
            possibilities and celebrate the joys of mastering
            the art and craft of creating impactful websites. 
            Whether you're a fellow novice, an experienced 
            developer, or simply intrigued by the world of 
            coding, I invite you to be a part of my learning 
            adventure and witness the transformation from a 
            novice to a proficient web developer. Let's embark 
            on this coding expedition together!
        </p>

      </div>
    </div>
  );
}

export default Home;