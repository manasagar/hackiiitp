from typing import List, Optional
import pandas as pd
from Nutrition.model import recommend, output_recommended_recipes
import os
current_dir = os.path.dirname(__file__) 
dataset_path = os.path.join(current_dir, 'Data', 'dataset1.csv')
dataset = pd.read_csv(dataset_path)
# Nutrition/nutri.py
# Nutrition/Data/dataset.csv
class params:
    def __init__(self, n_neighbors: int = 5, return_distance: bool = False):
        self.n_neighbors = n_neighbors
        self.return_distance = return_distance


class PredictionIn:
    def __init__(self, nutrition_input: List[float], ingredients: List[str], params: Optional[params]):
        self.nutrition_input = nutrition_input
        self.ingredients = ingredients
        self.params = params


class Recipe:
    def __init__(self, Name: str, CookTime: str, PrepTime: str, TotalTime: str,
                 RecipeIngredientParts: List[str], Calories: float, FatContent: float,
                 SaturatedFatContent: float, CholesterolContent: float, SodiumContent: float,
                 CarbohydrateContent: float, FiberContent: float, SugarContent: float,
                 ProteinContent: float):
        self.Name = Name
        self.CookTime = CookTime
        self.PrepTime = PrepTime
        self.TotalTime = TotalTime
        self.RecipeIngredientParts = RecipeIngredientParts
        self.Calories = Calories
        self.FatContent = FatContent
        self.SaturatedFatContent = SaturatedFatContent
        self.CholesterolContent = CholesterolContent
        self.SodiumContent = SodiumContent
        self.CarbohydrateContent = CarbohydrateContent
        self.FiberContent = FiberContent
        self.SugarContent = SugarContent
        self.ProteinContent = ProteinContent



class PredictionOut:
    def __init__(self, output: Optional[List[Recipe]]):
        self.output = output


def nutripred(request):
    # 'nutrition_input':self.nutrition_input,
    # 'ingredients':self.ingredients,
    # 'params':self.params
    
    nutrition_input = request.get('nutrition_input')
    ingredients=request.get('ingredients')
    n_neighbors=(request.get('params')).get('n_neighbors')
    # ingredients = input("Enter list of ingredients (comma-separated): ").split(',')
    # n_neighbors = int(input("Enter the number of neighbors: "))
    return recommend(nutrition_input)

    
        


