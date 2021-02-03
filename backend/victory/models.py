from django.db import models

# Create your models here.
class Code(models.Model): 
    created = models.DateTimeField(auto_now_add=True)
    code = models.CharField(max_length=100)
    size = models.IntegerField()

    class Meta:
        ordering = ['size']

    def __str__(self): 
        return f'Code({self.code}, {self.size})'