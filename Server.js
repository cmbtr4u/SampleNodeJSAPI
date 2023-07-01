var restify = require('restify');
//const restify = require('restify');
const stateData = [
	{
		state: "Rajasthan",
		capital: "Jaipur",
		regionalLanguages: ["Marwari", "Rajasthani"],
		noOfDistricts: 33
	},
	{
		state: "Punjab",
		capital: "Chandigarh",
		regionalLanguages: ["Punjabi"],
		noOfDistricts: 23
	},
	{
		state: "Uttar Pradesh",
		capital: "Lucknow",
		regionalLanguages: ["Braj", "Awadhi", ", Bagheli"],
		noOfDistricts: 75
	},
	{
		state: "Gujarat",
		capital: "Gandhinagar",
		regionalLanguages: ["Gujrati"],
		noOfDistricts: 33
	},
	{
		state: "Kerala",
		capital: "Thiruvananthapuram",
		regionalLanguages: ["Malayalam"],
		noOfDistricts: 14
	}
]

let server = restify.createServer();
function sendInformation(req, res, next) {

	// req.params represents the parameters
	// in the request(which is "name")
	let stateName = req.params.stateName;

	// iterating in the whole array of stateData
	// so as to find the state entered by the user.
	for (let i = 0; i < stateData.length; i++) {

		// if the name given by user matches
		// the with any object's state.
		if (stateName == stateData[i].state) {

			//sending the data through res.send() function.
			res.send(stateData[i]);

		}
	}
}

server.get('/:stateName', sendInformation);

server.listen(8080, function () {
	console.log("server is listening on port 8080");
});
