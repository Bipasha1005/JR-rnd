<?php
  session_start();

  if(!isset($_SESSION['loggedin']) || $_SESSION['loggedin']!=true){
    header("location: login.php");
    exit;
  }

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to JR: Title Tag - <?php echo $_SESSION['Username']?></title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
   <header>
    <h1>JR R&D</h1>
    <nav class="auth">
      <a href="#" onclick="openLoginPopup()">Login</a>
      <a href="#" onclick="openSignupPopup()">Sign Up</a>
    </nav>
  </header> 
        Welcome to JR rnd <?php echo $_SESSION['username']?>    
  <br>

  <label for="categorySelect">Select category:</label>
  <select id="categorySelect">
    <option value="products">Products</option>
    <option value="services">Services</option>
  </select>

  <main>
    <div id="productsSection"></div>
    <div id="servicesSection"></div>
  </main>

  <script src="script.js"></script>
  <script>
    function openLoginPopup() {
    
      window.open('login.php', 'Login');
    }

    function openSignupPopup() {
     
      window.open('signup.php', 'Sign Up');
    }

     // JavaScript to handle image click event
     document.getElementById("productsSection").addEventListener("click", function() {
        // Create a new webpage URL
        var newPageURL = "click.html";
        
        // Open the new webpage in a new tab
        window.open(newPageURL, "_blank");
    });
    </script>

  </script>
</body>
</html>
