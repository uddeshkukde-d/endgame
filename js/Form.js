class Form{
    constructor(){
       this.input = createInput("𝓝𝓐𝓜𝓔");
       this.button = createButton('𝓟𝓛𝓐𝓨');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
    }
    hide() {
         this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
       
    }
    display() {
        this.title.html("𝓕𝓡𝓤𝓘𝓣 𝓒𝓐𝓣𝓒𝓗𝓔𝓡");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'salmon');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("𝓗𝓮𝓵𝓵𝓸 " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'greenyellow');
            this.greeting.style('font-size', '100px');
        });

    }
}