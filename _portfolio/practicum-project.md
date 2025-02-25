---
title: "QMSS Practicum Project"
excerpt: "Cloudburst Prediction Model"
collection: portfolio
date: 2025-5
---

## Project Overview
The project aims to develop a prototype predictive software system for early warning of cloudbursts in urban areas. The system will analyze multiple data sources to predict the frequency and intensity of  cloudbursts within a 6-hour window, helping improve disaster preparedness for residents and businesses.

## Problem State
Every year, some regions face severe, unpredictable flooding due to the combination of intense cloudbursts and high tide events. These extreme weather patterns result in flooding within a short 4-hour window, causing widespread property damage, disrupting critical infrastructure, and leaving thousands of residents stranded. HOWEVER, current early warning systems are insufficient, often failing to provide timely alerts that allow for an effective response (Some regions that were impacted last year: UAE, Spain, Colombia, India).

## Role & Responsibilities
- Project Management
- User Experience
- Data Scientists

## Technologies Used
- Python
- GitHub
- SPSS
- Modeling
- Data Visualization (plotly)

## 2025/2/19 Literature Research Summary
### Paper 1 ###
Citation: Shaiba, H., Marzouk, R., Nour, M. K., Negm, N., Hilal, A. M., Mohamed, A., ... & Rizwanullah, M. (2022). Weather Forecasting Prediction Using Ensemble Machine Learning for Big Data Applications. Computers, Materials & Continua, 73(2), 3367-3382.

Main Objective: To develop an enhanced and reliable weather forecasting technique using ensemble machine learning methods that improves accuracy while reducing prediction time.
Methods and Approaches:

### Paper 2 ###
Citation: Khalifeh, A. F., AlQammaz, A. Y., Abualigah, L., Khasawneh, A. M., & Darabkh, K. A. (2022). A machine learning-based weather prediction model and its application on smart irrigation. Journal of Intelligent & Fuzzy Systems, 43(1), 1835-1842.

Main Objective: To develop an enhanced weather forecasting model using Social Spider Algorithm-Least Square-Support Vector Machine (SSA-LS-SVM) for optimizing irrigation water usage in agriculture.


### Models Used ###
Paper 1 ("A machine learning-based weather prediction model and its application on smart irrigation"):
- Main Model: SSA-LS-SVM (Social Spider Algorithm-Least Square-Support Vector Machine)
  - SSA: optimization algorithm to tune LS-SVM parameters
  - LS-SVM: improved version of traditional SVM using least squares
- Performance: Tested for 24h, 48h, and 72h predictions
- Variables: temperature, pressure, soil humidity

Paper 2 ("Weather Forecasting Prediction Using Ensemble Machine Learning for Big Data Applications"):
- Ensemble combining:
  - Random Forest
  - Gradient Boosting Decision Tree (GBDT)
  - Naive Bayes Bernoulli (NBB)
  - KNN (K-Nearest Neighbors)
- Performance: Achieved 95% prediction accuracy
- Variables: rainfall, wind speed, humidity, wind direction, cloud cover, temperature

### Key ideas ###
- Gradient Boosting: https://en.wikipedia.org/wiki/Gradient_boosting
- Suggested pipline:
  -  INDRA prediction pipeline:
     -  Data Sources
        -  Satellite Imagery (cloud top temperatures, water vapor)
        -  Weather Sensors (humidity, pressure, temperature, wind speed)
        -  Terrain Data (elevation, land use, urban topology)
        -  Historical Records (past cloudburst events, rainfall patterns)
     -  Pre-processing
        -  Normalization (standardize different data scales)
        -  Missing Value Handling (interpolation, padding)
        -  Feature Engineering (derived weather indicators, temporal features)
     -  Feature Selection
        -  Gradient Boosting Feature Ranking
        -  Importance Score Calculation
        -  Dimension Reduction (reduce computational overhead)
     -  Ensemble Model
        -  Random Forest (handles non-linear relationships)
        -  Gradient Boosting Trees (learns from residuals)
        -  Support Vector Machine (for pattern recognition)
        -  KNN (for local pattern matching)
     -  Output
        -  6-hour Prediction Window
        -  Cloudburst Intensity Estimation
        -  Risk Level Assessment (for emergency response)
        -  Confidence Score (prediction reliability)

### Summary for two papers ###
Paper one uses multiple machine learning techniques (Random Forest (RF), Gradient Boosting Decision Tree (GBDT), Naive Bayes Bernoulli (NBB), K-Nearest Neighbors (KNN)), and paper two uses a hybrid algorithm. Paper 1 tested different sizes of training sets and nodes.

The papers demonstrate successful approaches for combining multiple machine learning algorithms to improve weather prediction accuracy. The ensemble method from Shaiba et al. achieved 95% accuracy by combining Random Forest, Gradient Boosting, Naive Bayes, and KNN, while Khalifeh et al.'s hybrid SSA-LS-SVM approach showed strong performance for multi-parameter prediction.

The ensemble approach from Shaiba et al. is particularly relevant as cloudbursts involve multiple interacting parameters. Their combination of Random Forest, Gradient Boosting, KNN, and Naive Bayes could be adapted for your 6-hour prediction window.

Khalifeh et al.'s windowing approach for different prediction timeframes could be valuable for your 4-6 hour warning window requirement. Their success with multi-parameter prediction (temperature, humidity, pressure) aligns with cloudburst prediction needs.

As suggested by Claude, we can use these data:
- High-frequency weather station data
- Radar imagery for cloud formation
- Tide and water level sensors
- Historical cloudburst records
- Real-time precipitation data
- Satellite imagery
- Ground-based sensor networks in urban areas

And we will be facing issues like:
- Data quality and missing values requiring robust preprocessing
- Computational complexity, especially for ensemble methods
- Balancing accuracy vs. prediction time
- Model performance varying across different weather parameters (e.g., pressure being harder to predict than temperature)
- Need for sufficient historical data to train models effectively
