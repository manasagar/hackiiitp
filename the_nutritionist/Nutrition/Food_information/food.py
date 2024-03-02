import requests
import json
aut="deuCAaJrIGtkRWbz0f9VabHDreCrdSiT4r2Q0UXA"
def food_code(food):
    url=f"https://api.nal.usda.gov/fdc/v1/foods/search?api_key={aut}"
   
    payload= {
"query": food,
  "dataType": [
    "Foundation",
    "SR Legacy"
  ],
  "pageSize": 1,
  "pageNumber": 0,
  "sortBy": "dataType.keyword",
  "sortOrder": "desc",
}
    
    


# Make the POST request
    response = requests.post(url,json=payload)
    print("Response Status Code:", response.status_code)
    foods=response.json()
    x = {i['nutrientName']:{"unitName":i['unitName'],"value":i['value']} for i in foods['foods'][0]['foodNutrients'] if (i['nutrientName'] == 'Total lipid (fat)') or (i['nutrientName'] == 'Carbohydrate, by difference') or (i['nutrientName'] == 'Energy') or (i['nutrientName'] == 'Total Sugars')}
    return x





    
    
    
        
    
    
