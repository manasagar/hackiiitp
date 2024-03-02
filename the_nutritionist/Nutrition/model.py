import numpy as np
import re
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import NearestNeighbors
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import FunctionTransformer
import os
current_dir = os.path.dirname(__file__) 
dataset_path = os.path.join(current_dir, 'Data', 'dataset1.csv')
dataset = pd.read_csv(dataset_path)

def scaling(dataframe):
    scaler=StandardScaler()
    rows_to_access = [ 5, 6, 7, 10, 12, 13, 15]

    prep_data=scaler.fit_transform(dataframe.iloc[:,[5,6,7,10,12,13,15]].to_numpy())
    return prep_data,scaler

def nn_predictor(prep_data):
    neigh = NearestNeighbors(metric='cosine',algorithm='brute')
    neigh.fit(prep_data)
    return neigh

def build_pipeline(neigh,scaler,params):
    transformer = FunctionTransformer(neigh.kneighbors,kw_args=params)
    pipeline=Pipeline([('std_scaler',scaler),('NN',transformer)])
    return pipeline

def extract_data(dataframe,ingredients):
    extracted_data=dataframe.copy()
   # extracted_data=extract_ingredient_filtered_data(extracted_data,ingredients)
    return extracted_data
    
def extract_ingredient_filtered_data(dataframe,ingredients):
    extracted_data=dataframe.copy()
    regex_string=''.join(map(lambda x:f'(?=.*{x})',ingredients))
    extracted_data=extracted_data[extracted_data['RecipeIngredientParts'].str.contains(regex_string,regex=True,flags=re.IGNORECASE)]
    return extracted_data

def apply_pipeline(pipeline,_input,extracted_data):
    _input=np.array(_input).reshape(1,-1)
    return extracted_data.iloc[pipeline.transform(_input)[0]]

def recommend(dataframe,params={'n_neighbors':5,'return_distance':False}):
        extracted_data=dataframe
        dataframe=np.array(dataframe)

        if len(extracted_data)>=params['n_neighbors']:
            prep_data,scaler=scaling(dataset.copy())
            neigh=nn_predictor(prep_data)
            prep_data=scaler.fit_transform(dataframe.reshape(-1, 1))
            numpy_array = np.array(prep_data)
            reshaped_array = np.squeeze(numpy_array)
            y=neigh.kneighbors([reshaped_array], return_distance=False)
            y=y[0]
            recommendation=[]
            cd=dataset.iloc[y]
            my_dict = {}
            for index, row in cd.iterrows():
                key = row.iloc[0]
                row_dict = dict(row.iloc[1:])
                my_dict[key] = row_dict

            return my_dict
        else:
            return None

def extract_quoted_strings(s):
    # Find all the strings inside double quotes
    strings = re.findall(r'"([^"]*)"', s)
    # Join the strings with 'and'
    return strings

def output_recommended_recipes(dataframe):
    if dataframe is not None:
        output=dataframe.copy()
        output=output.to_dict("records")
        for recipe in output:
            recipe['RecipeIngredientParts']=extract_quoted_strings(recipe['RecipeIngredientParts'])
            recipe['RecipeInstructions']=extract_quoted_strings(recipe['RecipeInstructions'])
    else:
        output=None
    return output

