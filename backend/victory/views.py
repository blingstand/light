from django.http                    import HttpResponse, JsonResponse
from django.shortcuts               import render
from django.utils.decorators        import method_decorator
from django.views.decorators.csrf   import csrf_exempt

from rest_framework                 import status
from rest_framework.parsers         import JSONParser
from rest_framework.response        import Response
from rest_framework.views           import APIView

from victory.models                 import Code
from victory.serializers            import CodeSerializer

from victory.services               import Services
# from rest_framework.renderers import JSONRenderer
# from rest_framework.parsers import JSONParser
# Create your views here.

class VictoryViews(APIView): 

    service = Services()

    def post(self, request):
        """I want to add a new code in db only if it does not exists"""
        data = request.data 
        cs = CodeSerializer(data=data)
        if cs.is_valid(): 
            input(f"verif {data['code']} - {self.service.search_existing_code(data['code'])}")
            if not self.service.search_existing_code(data['code']):
                cs.save()
                print(f"code {data['code']} est ajouté dans la base.")
                response = {
                    'msg': f"Le code {data['code']} est ajouté dans la base."
                }
            else: 
                print(f"Pas de nouvel ajout.")
                response = {
                    'msg': f"Pas de nouvel ajout."
                }
            return Response(response, 201)
        else: 
            response = {
                'msg': f"Une erreur a été rencontrée {cs.errors}."
            }
        return Response(response)
