---
title: Building a model to predict Heart Disease using Scikit-Learn
description: todo
pubDate: May 16 2026
---
The dataset we are going to be using is coming from the [UC Irvine Machine Learning Repository](https://archive.ics.uci.edu/dataset/45/heart+disease). This dataset contains approximately 76 features but for the classification problem we will be dealing with we will only be using 14 of them. Examples of these features would include: (age, sex, chol: serum cholestoral in mg/dl, and thalach: maximum heart rate achieved). A full list of the features being used can be seen within the Kaggle dataset description.
<br>Here is the link to the Kaggle dataset:
<https://www.kaggle.com/datasets/sumaiyatasmeem/heart-disease-classification-dataset>.

_If you want to follow along you can download the dataset from either of the two links provided above and import it into your notebook using pandas._

```python
df = pd.read_csv("heart-disease.csv")
```
