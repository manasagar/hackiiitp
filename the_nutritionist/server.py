
from Nutrition import person
from process import pre
from flask import request

# from chatbot.chat import bot
from Nutrition.Food_information.food import food_code
from flask import Flask
app = Flask(__name__)
import json
# @app.route("/chatbot",methods=['POST'])
# def api_call():
#     print(request)
#     if request.method == 'POST':
#         data = request.json
#         text = data.get('chat')
#         response=bot(text)
#         return response

@app.route("/nutrition",methods=['POST'])
def nutrition_details():
    if request.method == 'POST':
        data=request.json
        #print(data)
        data=data.get('details')
        age=int(data[0])
        height=int(data[1])
        weight=int(data[2])
        gender=data[3]
        activity=data[4]
        meals_calories_perc=int(data[5])
        weight_loss=int(data[6])
        if meals_calories_perc==1:
            meals_calories_perc={'breakfast':1.0}
        elif meals_calories_perc==2:
            meals_calories_perc={'breakfast':0.5,'lunch':0.50}
        elif meals_calories_perc==3:
            meals_calories_perc={'breakfast':0.35,'lunch':0.40,'dinner':0.25}
        elif meals_calories_perc==4:
            meals_calories_perc={'breakfast':0.30,'morning snack':0.05,'lunch':0.40,'dinner':0.25}
        else:
            meals_calories_perc={'breakfast':0.30,'morning snack':0.05,'lunch':0.40,'afternoon snack':0.05,'dinner':0.20}

        recommendations=person.Person(age,height,weight,gender,activity,meals_calories_perc,weight_loss)
        data=recommendations.generate_recommendations()
        data= json.dumps(data)
        data = json.loads(data)
        return data
        

@app.route("/food_info",methods=['POST'])
def nutrition_info():
    if request.method=='POST':
        data=request.json
        data=data.get('food')
        lis={i:food_code(i) for i in data}
        return lis

