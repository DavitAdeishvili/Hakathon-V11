class NavBar{
    render(){
        document.body.innerHTML += `
            <header>
            <a class="special" href="GOA.html">GOA</a>
                <nav>
                    <a href="stats.html">Stats</a>
                    <a href="info.html">Info</a>
                    <a href="join.html">Join</a>
                    <a href="system.html">System</a>
                </nav>
            </header>
        `
    }
}

new NavBar().render();

class Join{
    render(){
        document.body.innerHTML += `
        <main>
        <center>
            <h1>For more info Text on: </h1><br><br><br>
            <div>
            </h1><br><br><br><br>
            <p>Facebook: <a href="https://www.facebook.com/NikaGoaKeshelava">Nika Keshelava</a></p>
            <p>Facebook: <a href="https://www.facebook.com/profile.php?id=100050647993394">Davit Adeishvili (Me)</a></p>
            <p>GOA Programming: <a href="https://www.facebook.com/nika11keshelava">GOA Programming</a></p>
            <p>Goa Mortial Arts: <a href="https://www.facebook.com/nika1keshelava">GOA Mortial Arts</a></p>
            <p>GOA group: <a href="https://www.facebook.com/groups/1133392237455746">GOA group</a></p>
            </div>
        </center>
        </main>
        `
    }
}

new Join().render();