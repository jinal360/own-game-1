class Ques{
constructor(){
this.button = createButton('Play');
this.button2 = createButton('win');
this.button3 = createButton('loss');
this.button4 = createButton('name');
}

hide(){
    this.button.hide()
    this.button2.hide()
    this.button3.hide()
    this.button4.hide()
}

display(){

    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.button2.position(displayWidth/2 + 50, displayHeight/2 + 20);
    this.button3.position(displayWidth/2 + 70, displayHeight/2 + 40);
    this.button4.position(displayWidth/2 + 90, displayHeight/2 + 60);

    this.button.mousePressed(()=>{
        textSize(18);
        fill(255);
        text("right",500,600);
        gamestate = "play";
        this.button.hide()
        this.button2.hide()
        this.button3.hide()
        this.button4.hide()
      });

    this.button2.mousePressed(()=>{
        textSize(18);
        fill(255);
        text("wrong",500,600);
       });


}


}
