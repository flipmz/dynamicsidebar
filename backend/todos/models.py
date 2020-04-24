# todos/models.py
from django.db import models


class Todo(models.Model):

    name = models.CharField(max_length=200)
    parent = models.ForeignKey('self', null=True, blank=True, related_name='children', on_delete=models.PROTECT)

    def __str__(self):
        return self.name
