function trafficLight(color) {

    if ( color === "red") {

    
        console.log("stop") }
    
        else if ( color === "orange") {
            console.log("careful")
        }
        else if ( color === "green") {
            console.log("go")
            }
            else if ( color === "blue") {
                console.log("color invalid")
                }
                else if ( color === "purple") {
                    console.log("color invalid")
                    }
                    else if ( color === "axew") {
                        console.log("color invalid")
                        }
                        else if ( color === "") {
                            console.log("please insert color")
                            }
    
    }



// TEST CASE
console.log(trafficLight("red")) // stop
console.log(trafficLight("orange")) // careful
console.log(trafficLight("green")) // go
console.log(trafficLight("blue")) // color invalid
console.log(trafficLight("purple")) // color invalid
console.log(trafficLight("axew")) // color invalid
console.log(trafficLight("")) // please insert color