console.log("This is index.js")

// Initialize the news api parameters
let source = 'bbc-news'
let apiKey = '0f0ffddds0000fsf032032243223nijfkfd'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion')

// Create a ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json', true)

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText)
        let articles = json.articles
        let newsHTML = ""

        /*
        for(let news in articles) {
            //console.log(articles[news])
            newsHTML += `
                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <h5 class="mb-0">
                                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                ${articles[news].title}
                                </button>
                                </h5>
                             </div>
                             <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                <div class="card-body">
                                ${articles[news].content}
                                </div>
                                </div>
                                </div>`
        }
        newsAccordion.innerHTML = newsHTML
        */
        articles.forEach(function (element, index) {
            newsHTML += `
                <div class="card">
                    <div style="word-wrap: break-word;" class="card-header" id="heading${index}">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                            <b>Breaking News ${index + 1}</b> : ${element.title}
                            </button>
                        </h5>
                    </div>
                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="newsAccordion">
                        <div class="card-body">
                            ${element.content}. <a href = "${element.url}" target="_blank">Read more here</a>
                        </div>
                    </div>
                </div>`
        })
        newsAccordion.innerHTML = newsHTML;
    }
    else
        console.log("Some error occurred")
}
xhr.send();