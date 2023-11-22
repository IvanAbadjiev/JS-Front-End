function solve(speed, area){
   let speedLimit = 0;
    switch(area){

        case "motorway":
        speedLimit = 130;
        break;
        case "interstate":
        speedLimit = 90;
        break;
        case "city":
        speedLimit = 50; 
        break;
        case "residential":
        speedLimit = 20;
        break;
    }

    if(speed <= speedLimit){
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }else{
        let difference = speed - speedLimit;    
        let status = null;

        if(difference > 40){
            status = "reckless driving";
        }else if(difference > 20){
            status = "excessive speeding";
        }else{
            status  = "speeding";
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}