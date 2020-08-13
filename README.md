# plotyly
15- Interactive Dashboard

In this assignment, I built an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

1: Plotly
- Used the D3 library to read in samples.json.
- Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
- Used sample_values as the values for the bar chart.
- Used otu_ids as the labels for the bar chart.
- Used otu_labels as the hovertext for the chart.

2. Created a bubble chart that displays each sample.
- Used otu_ids for the x values.
- Used sample_values for the y values.
- Used sample_values for the marker size.
- Used otu_ids for the marker colors.
- Used otu_labels for the text values.

3.
- Displayed the sample metadata, i.e., an individual's demographic information.
- Displayed each key-value pair from the metadata JSON object somewhere on the page.
- Updated all of the plots any time that a new sample is selected.

Tools used: D3.json, HTML, JavaScript
