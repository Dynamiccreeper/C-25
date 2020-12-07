class Bird extends BaseInheritence {
    constructor(x, y) {
    super(x,y,50,50);
    this.image=loadImage("sprites/bird");
    };
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
    super.display();

    };
  };
  