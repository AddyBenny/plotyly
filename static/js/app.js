const url = "././samples.json"

console.log(url)


function init() {
    //initialize the two above functions with a starter value
    // var dropdownMenu = d3.select("#selDataset")

    d3.json(url).then(function(data) {
        console.log(data);
        var names = data.names;
        console.log(names)
        names.forEach(function(id) {
            initDropdown = d3.selectAll("#selDataset")
                .append("option")
                .text(id)
                .property("value", id);
        });

        var firstName = names[0];
        buildPlots(firstName);
        buildMetadata(firstName);
    });
}

function optionchanged(value) {
    // console.log(`dataset is: ${value}`)

    buildPlots(value);
    buildMetadata(value);
}


function buildMetadata(name) {
    d3.json(url).then(function(data) {
        console.log(data)
        var dataSet = data.metadata.filter(item => item.id == name);
        var result = dataSet[0];

        var meta = d3.select("#sample-metadata");

        // Use `.html("") 
        meta.html("");

        Object.entries(result).forEach(([key, value]) => {
            meta.append("h6").text(`${key.toUpperCase()}: ${value}`);
        });
    });
}


function buildPlots(name) {
    d3.json(url).then(function(data) {
        console.log(data);
        var dataSet = data.samples.filter(item => item.id == name);
        var result = dataSet[0];


        var values = result.sample_value;
        var ids = result.otu_ids;
        var labels = result.otu_labels;


        // Build a Bubble Chart
        var trace = {
            x: ids,
            y: values,
            text: labels,
            mode: "markers",
            marker: {
                size: values,
                color: ids,
                colorscale: "Earth"
            }
        };

        var data = [trace];

        var layout = {
            title: "Bacteria Cultures Per Sample",
            margin: { t: 0 },
            hovermode: "closest",
            xaxis: { title: "OTU ID" },
            margin: { t: 30 }
        };

        Plotly.newPlot("bubble", data, layout);

        // Build Bar chart

        var yticks = ids.slice(0, 10).map(otu => `OTU ${otu}`).reverse();
        var trace1 = {
            type: 'bar',
            orientation: 'h',
            x: values.slice(0, 10).reverse(),
            text: labels.slice(0, 10).reverse(),
            y: yticks

        };

        var data1 = [trace1];

        var layout1 = {
            title: "Top 10 Bacteria",
            margin: { t: 30, l: 150 },
            yaxis: { title: "otu_ids" }

        };

        Plotly.newPlot('bar', data1, layout1)


        console.log('building plot')

    });

}

init();


// function buildPlot(name){
//     //build plots here
//     bar = d3.select("#bar");
// };
// function buildMetaData(name){
//     //build MetaData here
//     meta = d3.select("#sample-metadata")
// };
// var ids = toString(dataset.otu_ids)