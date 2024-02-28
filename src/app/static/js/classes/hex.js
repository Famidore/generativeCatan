class Hex {
    constructor(tempX, tempY, tempZ, tempHexModel, tempScaleValue, tempTerrain, tempNumber) {
        this.x = tempX;
        this.y = tempY;
        this.z = tempZ;

        this.hexModel = tempHexModel;
        this.scaleValue = tempScaleValue;
        this.terrain = tempTerrain;
        this.number = tempNumber;


        switch (this.terrain) {
            case "grass":
                this.hexColor = color(91, 219, 66);
                break;
            case "trees":
                this.hexColor = color(18, 77, 27);
                break;
            case "ores":
                this.hexColor = color(227, 222, 222);
                break;
            case "wheat":
                this.hexColor = color(228, 235, 35);
                break;
            case "clay":
                this.hexColor = color(222, 140, 58);
                break;
            case "desert":
                this.hexColor = color(244, 245, 191);
                break;
            default:
                this.hexColor = color(255, 0, 0);
                break;
        }

        this.number3D = new Word3D(this.number.toString(), 1, 10, 15);
    }

    show() {
        push();
        fill(this.hexColor);
        noStroke();
        translate(this.x, this.y, this.z);
        scale(this.scaleValue);
        rotateY(radians(30));
        rotateZ(radians(180));
        model(this.hexModel);
        pop();

        push();
        fill(0);
        noStroke();
        translate(this.x, this.y - 5, this.z);
        scale(this.scaleValue);
        rotateY(radians(30));
        rotateX(radians(90));
        rotateZ(radians(180));
        this.number3D.show();
        pop();
    }
}