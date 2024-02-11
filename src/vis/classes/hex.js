class Hex {
    constructor(tempX, tempY, tempZ, tempHexModel, tempScaleValue) {
        this.x = tempX;
        this.y = tempY;
        this.z = tempZ;
        this.hexModel = tempHexModel;
        this.scaleValue = tempScaleValue;
    }

    show() {
        push();
        fill(255);
        translate(this.x, this.y, this.z);
        scale(this.scaleValue);
        // rotateX(radians(340));
        rotateY(radians(45));
        rotateZ(radians(180));
        model(this.hexModel);
        pop();
    }
}