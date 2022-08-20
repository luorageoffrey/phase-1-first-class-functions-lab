// Code your solution in this file!

const returnFirstTwoDrivers = function(arr){
    return arr.slice(0,2)
}

const returnLastTwoDrivers = function(arr){
    let len = arr.length

    return arr.slice(len-2,len)
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

let createFareMultiplier = function(fare){

    return function(fare){

        return 5 * fare

    }

}

const fareDoubler = function(fare){
    return 2*fare
}

const fareTripler = function(fare){
    return fare * 3

}

function selectDifferentDrivers(driversArr, returnFirstTwoDrivers){

    return returnFirstTwoDrivers(driversArr)


}