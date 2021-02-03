from django.http                    import HttpResponse, JsonResponse
from django.shortcuts               import render
from django.utils.decorators        import method_decorator
from django.views.decorators.csrf   import csrf_exempt

from rest_framework                 import status
from rest_framework.parsers         import JSONParser
from rest_framework.response        import Response
from rest_framework.views           import APIView
# Create your views here.

class VictoryViews(APIView): 

    def get(self, request): 
        response = {"msg" : "success"}
        return Response(response, 200)

    def post(self, request):
        print("request.data : ", request.data)
        json_obj = request.data #note : dump > encode | loads > decode
        code = json_obj["victoryCode"]
        response = {
            'msg': f"Pour gagner il faut utiliser ce code : {code}",
        }
        return Response(response, 201)
