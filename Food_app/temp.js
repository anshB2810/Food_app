const url = 'https://food-recipes-with-images.p.rapidapi.com/?q=chicken%20soup';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b35e054628msh29e6f1bd3626ecbp1369a5jsnb26accc1230a',
		'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
	}
};

const myApiTest =async()=>{
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}
const a = myApiTest()
a.then((data)=>{
    data.d.forEach(element=>{
        console.log(element.Title)
    })
})
// a.forEach(element => {
//     console.log(element.Title)
// });