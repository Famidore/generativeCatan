class City {
    constructor(villageModel, cityModel) {
        this.villageModel = villageModel
        this.cityModel = cityModel
    }


    show(t) {
        if (t == 'village') { model(this.villageModel) }
        else if (t == 'city') { model(this.cityModel) }
    }
}