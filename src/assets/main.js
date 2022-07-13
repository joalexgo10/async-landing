const API ='https://youtube138.p.rapidapi.com/channel/videos/?id=UCpP50sNPg7UgoBnzB1RrHYQ&filter=uploads_latest&hl=en&gl=US'

const content = null || document.getElementById("content")

const options = {
	method: 'GET',
	headers: {
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
        'X-RapidAPI-Key': 'da7edbccf4msh06f1726956bab58p1b67efjsn1e3bead5cef0'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options)
    const data = await response.json()
    return data
}

(async ()=> {
    try {
        const videos = await fetchData(API)
        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                </h3>
            </div>
        </div>
        `).slice(0,4).join("")}
        `

        content.innerHTML = view

        
    }catch (error){
        console.error(error);
        }

    

})()