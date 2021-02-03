from rest_framework import serializers

from .models import Code


class CodeSerializer(serializers.Serializer):
    code = serializers.CharField(max_length=70)
    size = serializers.IntegerField()

class CodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Code
        fields = ['code', 'size']