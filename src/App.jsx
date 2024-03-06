import { useState } from 'react'
import { motion } from 'framer-motion'

function App() {
  const [Page, setPage] = useState(undefined);
  const [Language, setLanguage] = useState(false);

  let viewPage;

  if (Page === "about" || !Page) {
    viewPage = <AboutMe language={Language}></AboutMe>
  }

  else if (Page === "projects") {
    viewPage = <Projects language={Language}></Projects>
  }

  else if (Page === "contact") {
    viewPage = <Contact language={Language}></Contact>
  }

  else if (Page === "education") {
    viewPage = <Education language={Language}></Education>
  }

  function activeNavbar() {
    console.log(document.querySelector(".change-page-mobile").classList.toggle("active-navbar"))
  }

  return (
    <div className='app'>
      <div className="navbar">
        <a className='hambur-menu' onClick={() => activeNavbar()}><img width="25px" height="25px" src="assets\icons8-menú-50.png" alt="" /></a>
        <div className="change-page-mobile">
          <a href="#" onClick={() => setPage("about")}>{Language ? "Sobre mí" : "About"}</a>
          <a href="#" onClick={() => setPage("projects")}>{Language ? "Proyectos" : "Projects"}</a>
          <a href="#" onClick={() => setPage("education")}>{Language ? "Estudios" : "Education"}</a>
          <a href="#" onClick={() => setPage("contact")}>{Language ? "Contacto" : "Contact"}</a>
        </div>
      </div>
      
      {viewPage}
      <button className="select-language">{Language ? "Seleccionar Idioma" : "Select Language"}</button>
      <div className="options-languages">
        <button className="spanish" onClick={() => {setLanguage(true)}}>{Language ? "Español" : "Spanish"}</button>
        <button className="english" onClick={() => {setLanguage(false)}}>{Language ? "Inglés" : "English"}</button>
      </div>
      <ChangePages setPage={setPage} language={Language}></ChangePages>
    </div>
  )
}

function AboutMe({language}) {

  return (
    <div className='page about'>
      <div className='about-titles'>
        <motion.h1 className='title-page'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}>
          MARTÍN CRISTALDO
          <span className='sub-title'>FULL STACK DEVELOPER</span>
        </motion.h1>
      </div>

      <div className='about-info'>
        <p>
          {language ? `Mi nombre es Martín Cristaldo, y soy un desarrollador full stack de Argentina, Misiones. 
          Manejo eficientemente la lógica de programación para el backend, y tengo gran creatividad y gusto parar crear diseños frontend. 
          Además, tengo un excelente conocimiento de bases de datos relacionales y no relacionales.` :
          `My name is Martín Cristaldo, and
          I am a full stack developer from Argentina, Misiones. 
          I efficiently manage programming logic for the backend, 
          and I have great creativity and taste for creating 
          frontend designs. Also, I have excellent knowledge of 
          relational 
          and non-relational databases.`
          }</p>
          <br></br>
          <p> {language ? `Sobre habilidades blandas; poseo gran destreza para la comunicación
             (escrita y oral) que facilita mi desarrollo en
             el trabajo. Como colega ofrezco responsabilidad, simpatía
             y rápida adaptación.` : `About soft skills; I have incredible communication 
             (written and oral) that facilitates my development at 
             work. As a colleague I offer responsibility, sympathy 
             and quick adaptation.`}</p>
          <br />
          <p>
            {language ? `Las tecnologías que uso son Node.js, ReactJS, React Native, Vanilla JavaScript y Python. ` : `The tecnologies I use are Node.js, ReactJS, React Native, Vanilla JavaScript and Python. `} 
          </p>
          <br />
          <p>
            {language ? `Para Bases de Datos: ` :  `For Databases: `} MongoDB, MariaDB, MySQL, SQLite, ORM (Sequelize), ODM (Mongoose).
          </p>
            <p className='see-cvs'>{language ? "— Ver CV en " : "— See CV in "}</p><a className="cv-language" href="assets\CV English - Cristaldo Pablo Martín.pdf" download={"Cristaldo Pablo Martín"}>{language ? "inglés" : "english"}</a>/<a href="assets\CV Spanish - Cristaldo Pablo Martín.pdf" download="Cristaldo Pablo Martín" className='cv-language'>{language ? "español" : "spanish"}</a>
      </div>
    
    <motion.img 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="photo-id" src="assets\photo.jpg" alt="" />
    </div>
  )
}

function Projects({language}) {

  let projects = webProjects.map(el => {
    return (
      <motion.div className="card-project"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
        <p className="title-project">{language ? el.spanishtitle : el.englishtitle}</p>
        {/* <p className="type-project">— {el.type} Project</p> */}
        <a href={el.src}><iframe scrolling="no" className="iframe-project" src={el.src}></iframe></a>
        <div className="info-project">
          <p className="description-project">
            <a href={el.src} target="_blank" className='link-website'>{language ? "Ver Sitio Web" : "Open Website"}</a>
            <a href={el.srcgithub} target='_blank' className='link-github'>{language ? "Repositorio en GitHub" : "Repository in GitHub"}</a>
            <br />
            {language ? el.spanishdescription : el.englishdescription}
            <span className='tecnologies'>{language ? "Tecnologías" : "Tecnologies"}: {el.tecnologies}.</span>
          </p>
        </div>
      </motion.div>
    )
  })

  return (
    <div className='page'>
      <motion.h2 className='title-page'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
        {language ? "PROYECTOS" : "PROJECTS"}
      </motion.h2>
      <div className="projects">{projects}</div>
    </div>
  )
}

function Contact({language}) {

  return (
    <motion.div className='page'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}>
      <h2 className='title-page'>
        {language ? "CONTACTO" : "CONTACT"}
      </h2>
      <a className="contact" href="mailto: cristaldopmartin@gmail.com" target='_blank'>{language ? "— Enviar Email" : "— Send Mail"}</a>
      <a className="contact" href="https://github.com/martinncdo" target='_blank'>{language ? "— Perfil de GitHub" : "— GitHub Profile"}</a>
      <a className="contact" href="https://www.linkedin.com/in/martín-cristaldo-546996290" target='_blank'>{language ? "— Perfil de LinkdIn" : "— LinkdIn Profile"}</a>
    </motion.div>
  )
}

function Education({language}) {

  return (
    <motion.div className='page'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}>
      <h2 className='title-page'>
        {language ? "ESTUDIOS" : "EDUCATION"}
      </h2>
      <br />
      <p className="education">{language ? "— Tecnicatura en Desarrollo de Software (2022 - actualidad)" : "— Technique in Software Development (2022 - present)"}</p> <a className="linkeduc" href="https://www.roquegonzalez.com.ar/nivel-superior/tecnicatura-superior-desarrollo-software/" target='_blank'>{language ? "| Ver programa" : "| See program"}</a>
      <br />
      <p className="education">{language ? "— Curso Diseño UX/UI" : "— UX/UI Design Course"}</p> <a className="linkeduc" download="Cristaldo Pablo Martín | Certificate" href="assets\UXUI Course.pdf" target='_blank'>{language ? "| Ver certificado" : "| See certificate"}</a>
      <br />
      <p className="education">{language ? "— Curso Inglés Beginners" : "— English Beginners Course"}</p>  <a className="linkeduc" download="Cristaldo Pablo Martín | Certificate" href="assets\Inglés Beginners.pdf" target='_blank'>{language ? "| Ver certificado" : "| See certificate"}</a>
    </motion.div>
  )
}

function ChangePages({ setPage, language }) {

  return (
    <motion.div className='btns-change-pages'>
      <button className='btn-change-page' onClick={() => setPage("about")}>{language ? "Sobre mí" : "About"}</button>
      <button className='btn-change-page' onClick={() => setPage("projects")}>{language ? "Proyectos" : "Projects"}</button>
      <button className='btn-change-page' onClick={() => setPage("education")}>{language ? "Estudios" : "Education"}</button>
      <button className='btn-change-page' onClick={() => setPage("contact")}>{language ? "Contacto" : "Contact"}</button>
    </motion.div>
  )
}

export default App

const webProjects = [
  {englishtitle: "No Cobro: Audiovisual Entrepreneurship", spanishtitle: "No Cobro: Emprendimiento Audiovusal", src: "https://nocobro.com.ar/", tecnologies: "Vanilla JavaScript, CSS (Flexbox), Bootstrap", type: "Client", 
  englishdescription: `Website made for "No Cobro" entrepreneurship. "No Cobro" makes works such as short films and interviews with people with interesting stories to tell.

  The data of each project is structured in JSON format, and is called using fetch.`,

  spanishdescription: `Sitio Web hecho para el emprendimiento "No Cobro". "No Cobro" realiza trabajos como cortometrajes y entrevistas a personas con historias interesantes que contar.

  Los datos de cada proyecto están estructurados en formato JSON, y son llamados con la utilización de fetch.`,
  srcgithub: "https://github.com/martinncdo/vfinal-no.cobro"},
  {englishtitle: "Drinks and Rosas: E-Commerce", spanishtitle: "Drinks and Rosas: E-Commerce", src: "https://drinksandrosas.netlify.app/", tecnologies: "ReactJS, CSS (Grid CSS, Flexbox)", type: "Personal", 
  englishdescription: `Drinks store module made with React. The brand logo was created with Adobe Photoshop, and Figma was used to design the website.`,
  spanishdescription: `Módulo de tienda de bebidas hecho con React. El logo de la marca fue creado con Adobe Photoshop, y para el diseño del sitio web se utilizó Figma.`,
  srcgithub: "https://github.com/martinncdo/drinksandrosas"},
  {englishtitle: "Tic-Tac-Toe Game", spanishtitle: "Juego Ta-Te-Ti", src: "https://citcateot.netlify.app/", tecnologies: "ReactJS, CSS", type: "Personal", 
  englishdescription: `Tic-Tac-Toe game created with React. It has two modes: single player and multiplayer.

  For the single player mode I used the minimax algorithm.`,
  spanishdescription: `Juego Ta-Te-Ti creado con React. Tiene dos modos: un jugador y multijugador.

  Para el modo de un jugador utilicé el algoritmo minimax.`,
  srcgithub: "https://github.com/martinncdo/tictactoegame"}
]
