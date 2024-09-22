# AI-Powered-Size-Chart-Generator
Clothing-Size-Recommendation
The Problem
In recent years, with emphasis during the pandemic, ecommerce has increased dramatically. During the lockdown, consumers who wanted to go shopping were forced to do it online in most countries. It is difficult for users to not only find something they like on online platforms but also to find correct sizing and fit. It’s more likely that they will order the wrong size and have to return the item. Therefore, the company would have to handle returns and therefore an increase in costs and decrease in revenue. Through the project we hope to analyze the different attributes of a person and associate it to a particular item and size in order to subsequently give the consumers recommendations on something that are potentially more accurate than the consumer attempting to make an educated guess.

Moreover, as more people get vaccinated and more places remove their quarantine policies, the demand for attending social events will increase dramatically. In order to satisfy people’s increasing need to attend social events, we also want to recommend items in our inventory that potentially fit their social occasions.

Finally, We can increase revenue based on these recommendations as a user will order more.

The Data
https://www.kaggle.com/rmisra/clothing-fit-dataset-for-size-recommendation?select=modcloth_final_data.json

We have chosen a dataset on Kaggle provided by Rent The Runway. It has 192,544 rows and 15 features. The features encompass various body measurements as well as age and body type. The dataset also includes information on what item was ordered and the size that the user ordered. Therefore, we will use the features regarding the body measurements, age, and body type to cluster the consumers in a meaningful group. Later, we will use the item ids and sizes to profile the clusters and recommend what size and what item users may want.

We chose this dataset because Rent The Runway is a new popular ecommerce website that would benefit from being able to recommend sizes and clothing items to users beyond simple categories like event type.
