export const getDaysForecast = async (req, res) => {
    const { city} = req.query;
    const url = `https://api.weatherapi.com/v1/forecast.json?key=9b3693377e2f41f0b31103324251401&q=${city}&days=${5}`; 
    try {
        const response = await axios.get(url); 
        res.status(200).json(response.data); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }   
}
