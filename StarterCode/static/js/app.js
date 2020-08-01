// const url = "./StarterCode/samples.json"

// function buildPlot(name){
//     //build plots here
//     bar = d3.select("#bar");
// };
// function buildMetaData(name){
//     //build MetaData here
//     meta = d3.select("#sample-metadata")
// };
function init() {
    //initialize the two above functions with a starter value
    d3.json("samples.json").then(function(data) {
        console.log(data);
        var names = data.names;
        names.forEach(name =>
            initDropdown = d3.selectall("#selDataset")
            .append("option")
            .text(name)
            .property("value")
        )
        var name = names[0];
        var values = (data.samples[0].sample_value)
        var ids = (data.samples[0].otu_ids)
        var labels = (data.samples[0].otu_labels)

        var metaId = data.metadata[0].id
        var metaEthni = data.metadata[0].ethnicity
        var metaGender = data.metadata[0].gender
        var metaAge = data.metadata[0].age
        var metaLocation = data.metadata[0].location
        var metaBbtype = data.metadata[0].bbtype
        var metaWfreq = data.metadata[0].wfreq
        buildPlot(name, values, ids, labels, metaId, metaEthni, metaGender, metaAge, metaLocation, metaBbtype, metaWfreq);
        // buildMetaData(whatever);
    })
};
// function optionChanged(something) {
//     buildPlot(something);
//     buildMetaData(something);
// }
// init();