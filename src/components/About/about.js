/* MSSV: CE181662
   Ho ten: Tran Gia Bao
*/

import Navbar from "../Navbar/nav";
import "./about.scss";

function About() {
  return (
    <>
      <div className="about">
        <div className="navbar">
          <Navbar />
        </div>
        <h2 className="about__title">This is About page</h2>
      </div>
    </>
  );
}

export default About;
