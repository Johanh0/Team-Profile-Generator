// Generating the CSS
function cssGenerator() { 
    return `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    font-family: 'Poppins', sans-serif;
    font-size: 62.5%;
}

header nav {
    display: flex;
    justify-content: center;
    font-size: 2rem;
    width: 100%;
    padding: 45px;
    background-color: #4bb8ff;
}

main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 80vh;
    width: 80%;
    margin: 15px auto;
    padding: 25px;
    overflow: scroll;
}

.card {
    width: 300px;
    height: 384px;
    margin: 15px;
    background: #f0f0f0;
    border-radius: 10px;
    text-align: center;
    transition: all 0.5s;
   }
   
   .card:hover {
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.623);
    background-color: #4bb8ff;
   }
   
   .card .blob {
    height: 10px;
    width: 75%;
    border-radius: 0 0 30px 30px;
    margin: 0 auto;
    background-color: #4bb8ff;
    visibility: visible;
    transition: all 0.3s;
   }
   
   .card:hover .blob {
    height: 0;
   }
   
   .card .img {
    display: flex;
    margin: 30px auto 10px auto;
    width: 150px;
    height: 150px;
    background-position: center;
    background-size: cover;
    border-radius: 50%;
    font-size: 11px;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
   }
   
   .card:hover .img {
    width: 100%;
    height: 60%;
    border-radius: 10px 0 0;
    margin: 0 auto;
    z-index: 99999;
   }
   
   .card h2 {
    padding: 15px 10px;
    font-size: 1.8rem;
    transition: all 0.1s;
    z-index: -99;
    line-height: 17px;
   }
   
   .card span {
    font-size: 2rem;
   }
   
   .card>p {
    display: block;
    font-size: 1.5rem;
    margin-bottom: 10px;
   }

   
   .card:hover>p {
    display: block;
   }

   .icons {
    display: block;
    font-size: 2rem;

   }

   .icons a {
    text-decoration: none;
    margin: 3px;
    color: black;
   }

    `
 };

 module.exports = cssGenerator;