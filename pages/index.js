import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nexus Tires</title>
        <meta name="description" content="Find the right tires for your vehicle!" />
        <link rel="icon" href="/favicon.ico" />
        <link    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
      </Head>

     
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{paddingLeft: 30, paddingRight: 30}}>
        <a class="navbar-brand" href="#"><i class="fas fa-car-side me-2"></i>Nexus Tires</a>
       
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
       
          </div>
        </div>
        <span class="navbar-text" style={{paddingLeft: 10, paddingRight: 10}}>
        <i class="fas fa-house me-2"></i>Address:
        </span>
        <span class="navbar-text" style={{paddingLeft: 10, paddingRight: 10}}>
        <i class="fas fa-phone me-2"></i>Phone:
        </span>
        <span class="navbar-text" style={{paddingLeft: 10, paddingRight: 10}}>
        <i class="fas fa-envelope me-2"></i>Email:
        </span>
      </nav>
      <main className={styles.main}>
      
        

        <div class="card col-lg-9 col-md-6 col-sm-12" style={{borderColor: 'black', borderWidth: 3}}>
        
          <div class="card-body" vstly>
            <h1 className={styles.title}>
              Welcome to <p style={{color: '#F93154'}}>Nexus Tires!</p>
            </h1>
            This is some text within a card body.
          </div>
        </div>
      </main>

<footer class="text-center text-lg-start bg-dark text-muted">


  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i> Nexus Tires
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

           
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
           Links 
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" class="text-reset">Angular</a>
          </p>
          <p>
            <a href="#!" class="text-reset">React</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Vue</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Laravel</a>
          </p>
        </div>
           


        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
           Links 
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" class="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Help</a>
          </p>
        </div>
       

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
           Links 
          <h6 class="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
        </div>
      </div>
    </div>
  </section>

    
  <div class="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div> 
</footer>
    </div>
  )
}
