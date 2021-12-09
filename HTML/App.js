var updateView = async(button) => {
    let nameQ = document.querySelector("#nameQuery").value;
    let codeQ = document.querySelector("#codeQuery").value;
    let levelQ = document.querySelector("#levelQuery").value;
    let titleQ = document.querySelector("#titleQuery").value;


        if(nameQ.length > 0){
            let queryValue = nameQ;
            api = `http://localhost:3000/api/by_instructor/${queryValue}`;
    
            const data = await fetch(api);
            const model = await data.json();
            renderView(model);
        } 

        if(codeQ.length > 0){
            let queryValue = codeQ;
            api = `http://localhost:3000/api/by_course_code/${queryValue}`;
    
            const data = await fetch(api);
            const model = await data.json();
            renderView(model);
        }

        if(levelQ.length > 0){
            let queryValue = levelQ;
            api = `http://localhost:3000/api/by_course_level/${queryValue}`;
    
            const data = await fetch(api);
            const model = await data.json();
            renderView(model);
        }

        if(titleQ.length > 0){
            let queryValue = titleQ;
            api = `http://localhost:3000/api/by_title/${queryValue}`;
    
            const data = await fetch(api);
            const model = await data.json();
            renderView(model);
        }
        if(titleQ.length > 0 && levelQ.length > 0){
            let queryValue1 = titleQ;
            let queryValue2 = levelQ;
            api = `http://localhost:3000/api/combined_query/${queryValue1}/${queryValue2}`; 
    
            const data = await fetch(api);
            const model = await data.json();
            renderView(model);
        }


    }  

var renderView = (model) => {
    var source = document.querySelector("#resultsView").innerHTML;
    var template = Handlebars.compile(source);
    var html = template(model);

    document.querySelector("#results").innerHTML = html;
}
