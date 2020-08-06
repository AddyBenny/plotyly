const url = "././samples.json"

console.log(url)


function init() {
    //initialize the two above functions with a starter value
    // var dropdownMenu = d3.select("#selDataset")

    d3.json(url).then(function(data) {
        console.log(data);
        var names = data.names;
        names.forEach(function(id) {
            initDropdown = d3.selectAll("#selDataset")
                .append("option")
                .text(id)
                .property("value");
        });


        var dataset = names[0];
        var values = (data.samples[0].sample_values)
        var ids = (data.samples[0].otu_ids)
        var labels = (data.samples[0].otu_labels)

        var metaId = data.metadata[0].id
        var metaEthni = data.metadata[0].ethnicity
        var metaGender = data.metadata[0].gender
        var metaAge = data.metadata[0].age
        var metaLocation = data.metadata[0].location
        var metaBbtype = data.metadata[0].bbtype
        var metaWfreq = data.metadata[0].wfreq

        buildPlot(dataset, values, ids, labels, metaId, metaEthni, metaGender, metaAge, metaLocation, metaBbtype, metaWfreq)

    })
}

function optionchanged() {
    var dropdownMenu = d3.select("#selDataset");
    var dataset = dropdownMenu.property("value");

    console.log(`dataset is: ${dataset}`)


    d3.json("url").then(function(data) {

        var i
        for (i = 0; i < data.samples.length; i++) {
            if (data.samples[i].id === dataset) {
                var index = i

                var values = (data.samples[i].sample_value)
                var ids = (data.samples[i].otu_ids)
                var labels = (data.samples[i].otu_labels)

                var metaId = data.metadata[i].id
                var metaEthni = data.metadata[i].ethnicity
                var metaGender = data.metadata[i].gender
                var metaAge = data.metadata[i].age
                var metaLocation = data.metadata[i].location
                var metaBbtype = data.metadata[i].bbtype
                var metaWfreq = data.metadata[i].wfreq

            }
        }

        buildPlot(dataset, values, ids, labels, metaId, metaEthni, metaGender, metaAge, metaLocation, metaBbtype, metaWfreq)
    });

}


function buildPlot(dataset, values, ids, labels, metaId, metaEthni, metaGender, metaAge, metaLocation, metaBbtype, metaWfreq) {

    console.log('building plot')


    var trace1 = {
        type: 'bar',
        orientation: 'h',
        x: values.slice(0, 10),
        y: ids.slice(0, 10),
        text: labels.slice(0, 10),

    };

    var data1 = [trace1];

    // var layout1 = {
    //     title:

    // };

    Plotly.newPlot('bar', data1)


    var trace2 = {
        x: ids,
        y: values,
        // text = labels,
        mode: 'markers',
        marker: {
            color: ids,
            size: values

        }
    }

    var data2 = [trace2];



    // };

    // // var layout = {

    // // }


    // Plotly.newPlot('bubble', data2)

}

init()

const dataPromise = d3.json("url")
console.log('Data promise:', dataPromise);





// function buildPlot(name){
//     //build plots here
//     bar = d3.select("#bar");
// };
// function buildMetaData(name){
//     //build MetaData here
//     meta = d3.select("#sample-metadata")
// };