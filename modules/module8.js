let Airplane = '';
let availableAirplanes = [
{ 
  name: 'AeroJet',
  fuelCapacity: 800,
  availableStaff: ['pilots','flightAttendats','engineers','medicalAssistance','sensorOpertors']
},
{ name: 'SkyJet',
 	fuelCapacity: 500,
 	availableStaff: ['pilots','flightAttendats']
}
 
];

let flightRequirements = {
  requiredStaff: 4,
  
}; 
function meetsStaffRequirements(availableStaff, requiredStaff) {
 if (availableStaff.length > requiredStaff) {
  	return true;
 } else {
   return false;
 }
};
export { availableAirplanes, flightRequirements, meetsStaffRequirements };