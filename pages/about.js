import Image from "next/image";
const About = () => {
  return (
    <div>
      <h1>About Me</h1>
      <div className="profile">
        <Image src="/web1Jess2.jpg" width={128} height={128} />
      </div>
      <p>Jessica is a Hampshire based photographer and emerging curator. Her photographic practice, inspired by travel and place attachment, 
        explores our existence in place and interactions with it.</p>
      <p> She graduated from BA Fine Art at Loughborough University in 2017. Previous work includes her self-curated solo 
          exhibition <a href="https://2020.photofringe.org/exhibitions/topophilia">Topophilia</a>, one of 180 online exhibitions included within Photo Fringe 2020, TAKE/MAKE.</p>
      <p>She also studied MA Museums, Galleries and Contemporary Culture at University of Westminster in 2020, graduating in 2021 with Distinction. She is the curator and photographer behind online exhibition
        Materiality Exposed.</p>
      <h1>Exhibitions</h1>
      <p>Perpetual Flux, MTC Coventry, 2016</p>
      <p>Fine Art Degree Show, Loughborough University School of the Arts, 2017</p>                                                          
      <p>OpenArt, Online Interactive exhibition, Curated by WorldViewUk, 2017</p>                  
      <p>OpenArt, Online Interactive exhibition. Curated by WorldViewUk, 2018</p>
      <p>Topophilia, Photo Fringe 2020 TAKE/MAKE, 2020</p>
      <p>Materiality Exposed, 2020-21</p>
    </div>
  );
}

export default About; 
