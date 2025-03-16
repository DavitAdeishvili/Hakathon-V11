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

class Info{
    render(){
        document.body.innerHTML += `
        <main>
        <h1>General</h1>
        <div>
            <p>GOA is an academy that promotes the development of children and teaches them programming, leadership, perseverance and MMA. It strengthens children both physically and mentally. I am sure that every student of GOA is happy with the place they have ended up in. Mr. Nika Keshelava is the person who founded this academy, he created a group where everyone is friends with each other and where no one knows the meaning of giving up and not helping. GOA is against games, not only that GOA has a huge system consisting of many ranks and titles, each new stage requires great work and effort, you try to rise from an ordinary student to a mentor. Probably 30% of GOA have a salary that depends on their work and the number of children. Having a salary starts with being a squad leader, where you receive a certain amount of income for each student you recruit. Your salary will also increase if all of your students and their parents are satisfied, and it will decrease if you don't pay attention to anyone. So don't think of being a squad leader as an easy way to earn money. On the contrary, it is a serious job that probably 4 leaders leave a month due to excessive responsibility. In the picture on the right we can see the characteristics of a real chad and a real loser, all of which Mr. Nika wrote down and set a goal to make all GOA-ers CHAD. Almost everyone in GOA has an interesting story in their lifes, Almost every GOA member turned into CHAD. now everyone tells their story and makes fun of their old LOSER face.</p>
        </div>
            <img src="./images/info1.png" alt="CHAD vs VIRGIN">
        </main>
        `
    }
}

new Info().render();