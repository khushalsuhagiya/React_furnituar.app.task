import { getImageUrl } from './util1';

 function Gallery1() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src={getImageUrl('szV5sdG')}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> physicist and chemist <br />
            <b>Awards: 4 </b>(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal) <br />
            <b>Discovered: </b>polonium (chemical element)
          </li>
        </ul>
      </section>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src={getImageUrl('YfeOqp2')}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> geochemist <br />
            <b>Awards: 2 </b>(Miyake Prize for geochemistry, Tanaka Prize) <br />
            <b>Discovered: </b> a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Gallery1 