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

class description{
    render(){
        document.body.innerHTML += `
        <main>
        <center>
        <h1>All about GOA</h1>
        </center>
        <br><br><br><br><br><br>
        <img src="./images/GOA.jpg" alt="GOA">
        <div>
        <h2>GOA is the best academy in the whole world</h2>
        <p>On our Logo you can see Chad standing at the top and the Loser waiting GOA lessons to start to climb up all the stairs in A and become chad. If you follow MR. nika's instructions you will reach your goals in no time.</p>
        <h2>If you want to join GOA you should text Mr.Nika Keshelava</h2>
        <p>if you want to find out more just navigate with nav bar at the top.</p>
        </div>
    </main>
        `
    }
}

new description().render();