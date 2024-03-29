---
layout: post
title:  "Early COVID-19 model to predict the number of cases"
date:   2020-05-03 14:00:02 -0500
categories: [Blog]
tags: [ml]
math: false
mermaid: false
image:
  path: https://phil.cdc.gov//PHIL_Images/23311/23311_lores.jpg
  alt: Coronavirus morphology depiction by the CDC.
---

***Note:*** *This page is my final project for the Machine Learning class at IU (CSCI-B 455) in Spring at 2020, when the COVID-19 pandemic had just started. It has only been edited for grammar and spelling.*

## Introduction

COVID-19 is a world wide pandemic effecting almost everyone around the world in someway.  The United States of America has been hit hard with 1,237,633 cases at the time of submission [worldometer](https://www.worldometers.info/coronavirus/country/us/).  No one knows when the pandemic will end, what ever that looks like (no more social distancing, for example).  Some think that the virus will only end when we get a vaccination.  Regardless, it is useful to be able to predict the number of coronavirus cases in a state.

The number of cases will obviously be increasing (or at least not decreasing), and the rate of increase is quite easy to see.  However, putting an exact number on this is more difficult.  This number can be estimated quite well by using the number of deaths, which lag the number of cases as discussed in a [Khan Academy](https://www.youtube.com/watch?v=mCa0JXEwDEk) video.

Testing capability is also likely related to the number of cases.  If you can't test then you can't confirm a coronavirus case.  The date that a state first had a corona virus case is likely important.  Lastly, the population of the state is important for estimating the current number of cases in a state.

## Datasets

The five features I used is number of deaths, number of days since first death, population of state, days since first case, and the testing rate.  Each data point is from a particular state on a particular day.  To create this dataset I assembled data from three sources.

The data primarily came from "COVID-19 Data Repository" by the Center for Systems Science and Engineering (CSSE) at Johns Hopkins University hosted on GitHub at <https://github.com/CSSEGISandData/COVID-19>.  I'm using the `csse_covid_19_daily_reports_us` folder which contains data about each state collected each day from 4/14/2020 till today 5/4/2020.  There is a lot of useful data but I'm using the confirmed cases, deaths, and the testing rate.  To find the first test date, I used the New York Times county data to find the first date that a state recorded a coronavirus case.  I then find the number of days from that when creating the dataset.  The dataset can be found here: <https://github.com/nytimes/covid-19-data/blob/master/us-counties.csv>.  I needed to use this data because it goes back all the way to when the virus entered the USA.  The last dataset I used was was the state population from 2019 found here <https://www.census.gov/data/tables/time-series/demo/popest/2010s-state-total.html>.


## Data preparation

Some of the datasets were uploaded to a GitHub Gist to make it easier to load into Google CodeLabs.  Once downloading the data I found the first day COVID-19 was found in a particular state.  Then for each day in the Johns Hopkins data, I extracted the total cases, total deaths, and testing rate for that day.  I calculated the days since first seeing coronavirus and added that to the data point.  Finally, I calculated the number of new COVID cases and deaths (using the previous day as a base) and added this to the dataset.
  
## Models and analysis

Scikit Learn was used to construct the models.  I built two different regression models.  Both models were evaluated using 5-fold cross validation.  I chose to use regression as my output attribute is continuous.  Additionally, it is quick to train models.

The first model used Linear Regression and total number of cases as the output attribute.  I didn't have great hope for this model, as I only had 1,173 observations.  I initially normalized the data and got a result of around 73% with a standard deviation of around 10%.  When I tried the model without normalization, I got an accuracy of 98% with a standard deviation of 1%.  I didn't think I could get a better accuracy than this, but I was curious how the model would train with number of new cases as the output feature.

The second model used the same regression model but number of new cases as the output attribute.  I thought this model would be better as predicting the number of new cases seems more difficult to me.  Giving the change seems like it would be easier.  When I trained the model, using the `Linear_Regression` moduel, and didn't normalize the data.  I got an accuracy of 63% with a standard deviation of 30%.  This model doesn't perform well at all.  

## Discussion

I was surprised by a lot of parts of this project.  The data collection and processing definitely took me the longest amount of time.  It was hard to find a good source of COVID-19 data that was large enough to train a model with.  Initially, I wanted to look at county data, however, there was no where near enough data for that.  I settled on using the States which likely helped me because outlier county with high cases were removed.

I'm surprised that Model 1 worked as well as it did.  This might have been from incorporating death as one of the features.  I don't think this is bad, but the numbers are very much related.  Still, 98% accuracy seems too good to be true.  However, I think that you can predict the number of cases in a state, for a certain day, using deaths, number of new deaths, population, testing ratio, and days from first test.  My method seems to be very successful in predicting the number of new cases.  The number of new cases cannot be accurately predicted, however, using the same features.

## Code

The project code can be found [here](https://github.com/BenSDuggan/weekend-projects/blob/master/covid_models/B455_final_project.ipynb).
