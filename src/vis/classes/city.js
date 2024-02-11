class City {
    constructor(villageModel, cityModel, scaleValue=0.4) {
        this.villageModel = villageModel
        this.cityModel = cityModel
        this.scaleValue = scaleValue
    }


    show(t) {
        if (t == 'village') {
            push();
            fill(255, 0, 0);
            translate(0, 0);
            scale(this.scaleValue);
            // rotateX(radians(340));
            rotateZ(radians(180));
            model(this.villageModel);
            pop();
        }
        else if (t == 'city') {
            push();
            fill(255, 0, 0);
            translate(200, 0);
            scale(this.scaleValue);
            // rotateX(radians(340));
            rotateZ(radians(180));
            model(this.cityModel);
            pop();
        }
    }
}