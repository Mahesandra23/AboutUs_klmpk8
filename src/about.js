import React from 'react';
import './about.css';
import enzo from "./pictures/enzo.jpg";
import ravin from "./pictures/ravin.jpg";
import ghina from "./pictures/ghina.jpg";
import bina from "./pictures/bina.jpg";

const about = () => {
  return (
    <div>
      <header>
        <h1>About Us</h1>
      </header>

      <main>
        <section>
          <a href="https://instagram.com/alenzo_737?igshid=YmMyMTA2M2Y=">
            <img src={enzo} alt="Person 1" />
          </a>
          <h2>Alenzo Leksana</h2>
          <p>
            Alenzo Leksana adalah seorang mahasiswa dari Universitas Multimedia
            Nusantara jurusan Informatika. Lahir di Jakarta pada tanggal 1 Mei
            2004, Ia memiliki cita-cita untuk bekerja di dunia penerbangan.
            Sebagai penggemar dunia penerbangan, Ia memiliki hobi memotret
            pesawat dan tergabung dalam Komunitas Fotografer Aviasi Indonesia.
            Selain hobi memotret pesawat, Ia juga senang untuk bermain musik
            khususnya alat musik organ untuk mengiringi ibadah di gerejanya.
          </p>
        </section>

        <section>
          <a href="https://instagram.com/mahesandra_23?igshid=YmMyMTA2M2Y=">
            <img src={ravin} alt="Person 2" />
          </a>
          <h2>M Ravindra Mahesandra</h2>
          <p>
            Muhammad Ravindra Mahesandra, atau yang biasa disapa dengan panggilan
            Ravin merupakan seorang mahasiswa dari Universitas Multimedia Nusantara
            yang sedang menjalani semester 2. Ia lahir pada tanggal 23 November 2004.
            Ravin ini berkuliah di jurusan informatika untuk mengerjar cita-citanya
            menjadi seorang programmer, tetapi di semester 2 ini dia sudah mulai kesusahan.
            Doakanlah agar Ia bisa mencapai cita-citanya. Hobi yang dimiliki nya adalah
            mendengarkan musik dan menonton film.
          </p>
        </section>

        <section>
          <a href="https://instagram.com/ghinasyadw?igshid=YmMyMTA2M2Y=">
            <img src={ghina} alt="Person 3" />
          </a>
          <h2>Ghina S. Deswita</h2>
          <p>
            Ghina adalah seorang mahasiswi UMN yang lahir di Jakarta pada tanggal
            2 Desember 2005. Ia senang meluangkan waktunya untuk melakukan kegiatan
            menari serta checkout shopee dan bercita-cita bisa lulus tepat waktu.
          </p>
        </section>

        <section>
          <a href="https://instagram.com/zbrinadf_?igshid=YmMyMTA2M2Y=">
            <img src={bina} alt="Person 4" />
          </a>
          <h2>Zabrina Devta</h2>
          <p>
            Zabrina adalah seorang mahasiswi UMN yang lahir di Jakarta pada tanggal
            17 Desember 2003. Ia senang meluangkan waktunya untuk melakukan jalan-jalan,
            main dan bercita-cita untuk menjadi wanita karir yg sukses
          </p>
        </section>
      </main>
      
      <button className="back-to-maps" onClick={() => window.location.href = '2.html'}>
        Back to Maps
      </button>
    </div>
  );
};

export default about;