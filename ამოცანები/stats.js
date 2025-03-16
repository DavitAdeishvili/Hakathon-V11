class NavBar {
    render() {
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
        `;
    }
}

new NavBar().render();

class Academys {
    static arr = [];
    constructor(name, members, color) {
        this.name = name;
        this.members = members;
        this.color = color;
        this.height = members / 5;
        Academys.arr.push(this);
    }

    get col() {
        return `
        <div style="width: 80px; height: ${this.height}px; background: ${this.color}; padding: 10px; margin: 5px;">
            <h2>${this.name}</h2>
            <p>${this.members}</p>
        </div>`;
    }

    static render() {
        const heading = document.createElement('h1');
        heading.textContent = "GOA members VS other Academy members";
        heading.style.position = "absolute";
        heading.style.top = "200px";
        heading.style.left = "50px";
        document.body.appendChild(heading);

        const main = document.createElement('main');
        Academys.arr.forEach(academy => {
            const container = document.createElement("div");
            container.innerHTML = academy.col;
            main.appendChild(container);
        });
        document.body.appendChild(main);
    }
}

new Academys("GOA", 1500, "green");
new Academys("Novatori", 900, "pink");
new Academys("Alte", 500, "red");
new Academys("IT", 800, "blue");
new Academys("The coders", 300, "yellow");
Academys.render();


class Money {
    static arr = [];
    constructor(name, money, color) {
        this.name = name;
        this.money = money;
        this.color = color;
        this.height = money / 5;
        Money.arr.push(this);
    }

    get col() {
        return `
        <div style="width: 80px; height: ${this.height}px; background: ${this.color}; padding: 10px; margin: 5px;">
            <h2>${this.name}</h2>
            <p>${this.money}</p>
        </div>`;
    }

    static render() {
        const heading = document.createElement('h1');
        heading.textContent = "Money to pay";
        heading.style.position = "absolute";
        heading.style.top = "200px";
        heading.style.right = "240px";
        document.body.appendChild(heading);

        const footer = document.createElement('footer');
        Money.arr.forEach(academy => {
            const container = document.createElement("div");
            container.innerHTML = academy.col;
            footer.appendChild(container);
        });
        document.body.appendChild(footer);
    }
}

new Money("GOA", 400, "green");
new Money("Novatori", 800, "pink");
new Money("Alte", 700, "red");
new Money("IT", 1500, "blue");
new Money("The coders", 900, "yellow");
Money.render();

class Intelligence {
    static arr = [];
    constructor(name, intelligence, color) {
        this.name = name;
        this.intelligence = intelligence;
        this.color = color;
        this.height = intelligence / 5;
        Intelligence.arr.push(this);
    }

    get col() {
        return `
        <div style="width: 80px; height: ${this.height}px; background: ${this.color}; padding: 10px; margin: 5px;">
            <h2>${this.name}</h2>
            <p>${this.intelligence}</p>
        </div>`;
    }

    static render() {
        const heading = document.createElement('h1');
        heading.textContent = "Intelligence you gain";
        heading.style.position = "absolute";
        heading.style.top = "750px";
        heading.style.right = "600px";
        document.body.appendChild(heading);

        const section = document.createElement('section');
        Intelligence.arr.forEach(academy => {
            const container = document.createElement("div");
            container.innerHTML = academy.col;
            section.appendChild(container);
        });
        document.body.appendChild(section);
    }
}

new Intelligence("GOA", 1500, "green");
new Intelligence("Novatori", 200, "pink");
new Intelligence("Alte", 300, "red");
new Intelligence("IT", 400, "blue");
new Intelligence("The coders", 500, "yellow");
Intelligence.render();