// Generating the HTML
function htmlGenerator() {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    
    <header>
      <nav>
        <h1>Team Portfolio</h1>
      </nav>
    </header>

    <main>
        <!-- <div class="card">
            <div class="blob"></div>
              <span class="img"></span>
              <h2>Johan Herrera</h2>
              <p>
                CEO
              </p>
              <div class="icons">
                <a href="mailto:johanherrera20000@gmail.com">
                  <i class="fa-solid fa-envelope"></i>
                </a>
                <a href="" target="_blank">
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </div> -->  
    </main>

    <script src="./script.js"></script>
</body>
</html>
    `
};

module.exports = htmlGenerator;