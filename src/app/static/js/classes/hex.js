class Hex {
    constructor(tempX, tempY, tempZ, tempHexModel, tempScaleValue, tempTerrain, tempNumber) {
        // this.x = tempX;
        // this.y = tempY;
        // this.z = tempZ;

        this.x = 20;
        this.y = 0;
        this.z = 0;
        this.hexModel = tempHexModel;
        this.scaleValue = tempScaleValue;
        this.terrain = tempTerrain;
        this.number = tempNumber;

        this.numberText = createGraphics(100, 100);


        switch (this.terrain) {
            case "grass":
                this.hexColor = color(91, 219, 66);
            case "trees":
                this.hexColor = color(18, 77, 27);
            case "ores":
                this.hexColor = color(227, 222, 222);
            case "wheat":
                this.hexColor = color(228, 235, 35);
            case "clay":
                this.hexColor = color(222, 140, 58);
            case "desert":
                this.hexColor = color(244, 245, 191);
            // default:
            //     this.hexColor = color(255, 0, 0);
        }
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
        fill(this.hexColor);
        noStroke();
        translate(this.x, this.y, this.z);
        scale(this.scaleValue);
        rotateY(radians(30));
        rotateZ(radians(180));
        // make a model of it
        // model(this.hexModel);
        pop();
    }
}