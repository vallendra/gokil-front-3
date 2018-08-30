<template>
  <div>
    <!-- Carousel -->
    <b-carousel id="carousel1"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-height="240"
                img-width="1024">
      <b-carousel-slide>
        <div class="carousel-content">
          <h1 class="thick">REVOLUSI OJEK<br>
            BERADA DI TANGANMU
          </h1>
          <p>Mencari duit sudah sangat mudah sekarang.<br>
          Hanya dengan menjadi mitra GO-KIL, kamupun bisa ikut kaya.</p>
          <a role="button" class="btn btn-primary" href="#">BERGABUNG MENJADI MITRA</a>
        </div>
        <img slot="img" class="d-block img-fluid w-100 img-darken" width="1024" height="240"
             src="../assets/images/moge-cantik.jpg" alt="mitra">
      </b-carousel-slide>

      <b-carousel-slide>
            <div class="carousel-content">
              <h1 class="thick">SAATNYA MERDEKA<br>
              DARI MACET KOTAMU	
              </h1>
              <p>Kini telah hadir ojek online jaman <i>now</i>.<br>
              Gak menuhin memori HP, cukup buka browser langsung cau!</p>
              <a role="button" class="btn btn-primary" href="#">COBAIN GO-KIL SEKARANG!</a>
            </div>
            <img slot="img" class="d-block img-fluid w-100 img-darken" width="1024" height="240"
             src="../assets/images/waiting-woman.jpg" alt="penumpang">
      </b-carousel-slide>
    </b-carousel>
    <!-- What is Gokil? -->
    <div class="bg-white align-items-center">
      <div class="container text-center content">
        <h1>Ojek Online Jaman <i>Now</i></h1>
        <p>
          rfgsrgf ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus ex eget metus dignissim mollis. Nullam mollis ultricies elementum. Quisque imperdiet ex nisi, vel tempus erat volutpat non. Morbi egestas turpis sit amet accumsan sodales. Sed vel feugiat dolor, sit amet molestie lectus. Nunc mattis eros et libero malesuada, id auctor diam interdum. 
        </p>  
      </div>
    </div>
    <!-- Masih ragu? -->
    <section class="bg-orange align-items-center">
      <div class="container text-center content">
        <h1 class="display-4">Masih rawgu?</h1>
        <a class="btn btn-light btn-action btn-lg" href="/signup">DAFTAR AJA DULU
        </a>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  layout: homepage
}
</script>
