while (true) {
    console.log("Light Level: " + input.lightLevel())
    if (input.lightLevel() < 20) {
        light.setAll(light.rgb(0, 0, 100))
    } else if (input.lightLevel() < 5) {
        light.setAll(light.rgb(50, 0, 50))
    } else {
        light.clear
    }
    
}
