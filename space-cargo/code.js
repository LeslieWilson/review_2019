let cargoHold = {
  cleaned: false,
  daysSinceLastIncident: 0,
  fuel: 0,
  hyperdrive: null,
  recyclables: [],
  toolBin: {
    label: "Primary Tool Bin",
    tools: []
  },
  robotsForSale: [],
  dilithiumOreWeight: 0,
  trash: []
};


//
//
// let toggleCleanedStatus =()=>{
//     let cleaned = cargoHold.cleaned
//
//     if (cleaned === true){
//     cleaned = false
// } else{
//     cleaned = true
//     console.log(cleaned)
// }
//     return cleaned
// }
//
// console.log(toggleCleanedStatus())
//
//
// let addDayForIncidentReport=()=>{
//     sum = 0
//     let days = cargoHold.daysSinceLastIncident
//         days += 1
//         return days
// }
//
//
//
// console.log(addDayForIncidentReport())





// let fuelCanisterPile = [2, 5, 9, 2, 3, 4, 6, 8, 8, 2, 1, 0]
// let consolidateFuel= (list)=>{
//     let fuelTotal = cargoHold.fuel
//     let totalFuelSupply = fuelCanisterPile.reduce((totalSupply, individualSupply)=>  totalSupply + individualSupply)
//         fuelTotal += totalFuelSupply
//     return fuelTotal
// }
// console.log(consolidateFuel(fuelCanisterPile))


// let hyperDrivePile = ["rusty hyperdrive", "millennium hyperdrive", "hyperdrive XL", "rusty hyperdrive", "rusty hyperdrive XL"]
// //
// let retrieveWorkingHyperdrive=(strings)=>{
//     return !strings.includes("rusty")
//     let hyperdriveStatus = cargoHold.hyperdrive
//     let foundHyperdrive  = hyperDrivePile.find(retrieveWorkingHyperdrive)
//     hyperdriveStatus = foundHyperdrive
//     return hyperdriveStatus
//     console.log(hyperdriveStatus)
// }
//
//
//  console.log(retrieveWorkingHyperdrive(hyperDrivePile))





//
// let recyclablesPile = ["paper", "space banana peel", "plastic", "plastic", "glass", "styrofoam coffee mug", "old dilithium battery", "metal can", "paper"]
//
// let filterOutRecyclables = (allRecyclables)=>{
//     let recyclablesStatus =  cargoHold.recyclables
//     let filter = allRecyclables.includes("paper", "plastic", "glass", "metal can")
//     recyclablesStatus = filter
//     return recyclablesStatus
//
//
// }
//
//  console.log(recyclablesPile.filter(filterOutRecyclables))




let oldToolBinsPile = [
 {
   label: "Tool Bin 1",
   items: []
 },
 {
   label: "Tool Bin 2",
   items: ["flux capicitor wrench", "hydrospanner", "android eye scanner", "skeleton key-card"]
 },
 {
   label: "Tool Bin 3",
   items: []
 },
 {
   label: "Tool Bin 4",
   items: ["transponder", "body scanner"]
 },
 {
   label: "Tool Bin 5",
   items: ["multi-pass", "sonic screwdriver", "teleporter gun"]
 }
]

let consolidateTools = (toolList)=>{
    let CargotoolArray = cargoHold.toolBin.tools
    oldToolBinsPile.forEach((toolBinNumber)=>{
    toolBinNumber.forEach((item))
    })

}

let robotsPile = [
  {
    robotType: "Protocol Droid",
    yearsOld: 41,
    fuel: 0
  },
  {
    robotType: "Astromech Droid",
    yearsOld: 3,
    fuel: 2
  },
  {
    robotType: "Maintenance Droid",
    yearsOld: 10,
    fuel: 1
  },
  {
    robotType: "Bending Robot",
    yearsOld: 19,
    fuel: 0
  }
]

let orePile = [
  {
    status: "glowing",
    weight: 20.5
  },
  {
    status: "stable",
    weight: 15.5
  },
  {
    status: "stable",
    weight: 4.5
  },
  {
    status: "glowing",
    weight: 0.5
  }
]
