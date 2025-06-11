---
title: "QMSS Practicum Project"
excerpt: "Cloudburst Prediction Model"
collection: portfolio
date: 2025-5-1
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



## Final Report

### Problem Statement

As part of the QMSS Practicum, I am contributing to Project INDRA, sponsored by Alt Surya Inc., which aims to build a machine learning–powered early warning system for urban cloudbursts. The project addresses the urgent need for accurate, short-term flood predictions, especially in Asia-Pacific regions where over 35% of global flood events occur annually. Our team is developing a prototype that predicts cloudbursts within a 6-hour window using multiple public datasets, including NOAA and FEMA, and satellite and radar imaging data. We are leveraging time series analysis, convolutional neural networks, and precision-recall metrics to improve prediction accuracy beyond the current 50% threshold. The model is intended to inform city planners, emergency responders, and residents, contributing to UN SDGs related to climate resilience, infrastructure, and sustainable communities.

### Literature Review

Our cloudburst prediction model draws from recent advancements in ensemble and hybrid machine learning approaches for weather forecasting. Inspired by Shaiba et al. (2022), we employ ensemble learning techniques such as Random Forest, Gradient Boosting Decision Trees, Naive Bayes, and K-Nearest Neighbors, combined through a max voting mechanism. This method has demonstrated high predictive accuracy (up to 95%) and efficient processing even with large datasets, making it suitable for high-frequency urban weather data.

Additionally, we incorporate lessons from Khalifeh et al. (2022), who introduced a hybrid SSA-LS-SVM model that optimized prediction performance across 24–72-hour windows using atmospheric parameters like temperature, humidity, and pressure. These approaches support our goal of identifying cloudburst events within a tight 6-hour window, handling multi-parameter interactions, and maintaining model performance across diverse meteorological conditions.

### Data Processing and Feature Engineering

In our group’s data exploration for the INDRA cloudburst prediction project, we focused on reviewing 6–7 publicly available data sources, prioritizing those that offered time series of atmospheric measurements and weather imagery relevant to the Asia Pacific region. We assessed each portal's accessibility, data types (e.g., satellite, radar, precipitation), API support, and documentation quality, recording our findings in the shared spreadsheet. We then selected the most promising source and initiated a shared Colab notebook, where we began loading weather data for targeted locations and timeframes.

Our initial focus was on identifying cloudburst events—defined as precipitation rates exceeding 100mm/hour—within the last five years. We successfully extracted and visualized weather data for short periods, noting any data quality issues such as missing values or gaps in coverage. Through this process, we began assembling a small, structured dataset of cloudburst events and associated pre-event measurements, which will be foundational for training and evaluating our predictive model.

### Model Implementation and Evaluation

For our cloudburst prediction model, we implemented a Random Forest classifier due to its robustness against noise and its ability to handle high-dimensional data with nonlinear interactions. The model parameters were carefully tuned, using 200 estimators and a maximum depth of 10, with class weighting set to "balanced" to address class imbalance. This approach allowed us to assess feature importance and achieved a strong ROC AUC score of 0.8551, although precision remained low, indicating the need for better handling of false positives.

We also experimented with an Autoencoder, primarily for its capacity in unsupervised anomaly detection. Autoencoders are particularly suited to high-dimensional meteorological data and were used to capture deviations from normal weather patterns that might indicate a cloudburst. While it performed less effectively than Random Forest in terms of recall and F1 score, the autoencoder provided useful insights into outlier behavior and helped complement our supervised learning approach.

Our feature engineering process was critical in enhancing model performance. We extracted time-based features (e.g., hour, month, day-of-year), transformed wind data into U/V components, and derived precipitation statistics such as cumulative and maximum rainfall. Additionally, we created lag features (1h/3h/6h change rates) to capture temporal dynamics. Scaling and time-based train-validation-test splits were applied, and we addressed class imbalance by exploring techniques such as SMOTE and undersampling. These engineered features were essential for capturing the rapid, localized shifts in weather conditions characteristic of cloudburst events.

### Ethical Consideration

An important ethical consideration in developing our cloudburst prediction model is the risk of misinformation due to false positives or missed events. Inaccurate predictions—whether overestimating or underestimating risk—could lead to unnecessary public panic, erosion of trust in early warning systems, or a failure to act in time during real emergencies. Given the high stakes in disaster response, it is crucial to communicate model uncertainty transparently and ensure that any deployment is accompanied by clear disclaimers, continuous validation, and collaboration with domain experts and local authorities.

### AI Assistants Use and Process Reflection

During the project, we used AI for both paper reading and coding. When searching for papers, we used AI to summarize them. After summarizing, we asked AI to classify whether the paper was relevant to our situation. AI was able to compare our data and parameters and provide helpful feedback.  
We use Claude for the majority of coding. The good thing about Claude is that it saves time. However, to better optimize the code and the model, we need to understand the code and fine-tune it ourselves to ensure it aligns with our specific data structure, performance goals, and interpretability needs.

### Conclusion and Future Directions

Looking ahead, our future work will focus on enhancing model performance by incorporating higher-resolution datasets, such as satellite and radar imagery, to capture localized weather patterns more effectively. We also plan to address the current class imbalance issue through advanced resampling techniques like SMOTE and refine our feature set by engineering additional meteorological indicators. Exploring neural network and deep learning architectures, including convolutional models, will help capture spatial and temporal dependencies more robustly. Finally, we aim to develop a user-friendly interface for stakeholders and consult climate science experts to ensure our model aligns with real-world forecasting needs and deployment scenarios.
