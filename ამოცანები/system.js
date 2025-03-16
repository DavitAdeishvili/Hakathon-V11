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

class Hierarchy{
    render(){
        document.body.innerHTML += `
        <main>
        <center>
            <h1>Goa Hierarchy Development</h1>
        </center>
            <h2 class="heading1">Old</h2>
            <img class="img1" src="./images/old system.png" alt="Old">
            <p>➜</p>
            <h2 class="heading2">New</h2>
            <img class="img2" src="./images/new system.png" alt="New">
        </main>
        `
    }
}

new Hierarchy().render();

class Description{
    render(){
        document.body.innerHTML+= `
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
         <footer>
        <center>
            <h1>Description of Every Member in GOA Hierarchy</h1>
        </center>
        <br><br><br><br>
        <ol>
            <li>you(lvl 2) --- It means every ordinary student in GOA</li>
            <br>
            <li>Squad Mini-Leader --- It's your leaders decision if you become Squad Mini-Leader or not, from my point of view it's super hard to make someone your Squad Mini-Leader unless he is very Eager. Squad Mini-Leader helps Squad-leader in his work and takes care of some children in his Squad-leader's squad.</li>
            <br>
            <li>Squad-leader --- If you are very good Squad Mini-Leader and have been  Squad Mini-Leader for over 2 month then your leader makes you go to take a 20 minute test where Mini-Leader's Control Departament tests you</li><br>
            <li>Mentor Asistent --- If you are very good squad leader then some mentors might want you to help them organizing class, or writing points.</li>
            <br>
            <li>Github Controller Department --- This are the ones who check your child's homewroks and clasworks, if something'swrong with their work squad leaders will text you.</li>
            <br>
            <li>Mini-Leader Controller Departament --- If your child is Mini-leader then Mini-Leader Controller Departament will test your child twice a month, they will also check if your child is helping students very well.</li><br>
            <li>Squad-Leader Controller Departament --- If your child is Squad-Leader then Squad-Leader Controller Departament will test your child twice a week, they will also check his github, codewars account, they will check his/her projects and same about all the members in the squad.</li><br>
            <li>Mentor Controller Departament --- If you are Mentor you will be checked everytime, they will check everything that mentor does. (making video of lessons, uploading classwork/homework and etc.)</li><br>
            <li>Judge --- If you don't like something and think that something is wrong in any members decision then you can bring them to court, and Jugde will make right decisions, he will also explain why that thing is right.</li><br>
            <li>Mentor --- After all that hardwork you finally become Mentor, when you are mentor you have to always upload homework and classwork, always make video of lassons, make all children motivated, write points depending how active thehy were, make them do excercises when its rest time and etc.</li><br>
            <li>Director --- Mr.Nika Keshelava himself who put big work in his carreer and finally made the best academy in the whole world.</li><br>
        </ol>
    </footer>
        `
    }
}

new Description().render()