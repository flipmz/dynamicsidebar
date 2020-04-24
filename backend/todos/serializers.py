# todos/serializers.py

from rest_framework import serializers
from rest_framework_recursive.fields import RecursiveField
from .models import Todo

class TodoSerializer(serializers.ModelSerializer):
    children = RecursiveField(many=True)
    class Meta:
        model = Todo
        fields = ('id', 'name', 'parent', 'children')