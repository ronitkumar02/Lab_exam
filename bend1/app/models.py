from django.db import models
from django.contrib.auth.models import AbstractBaseUser


class Student(models.Model):
    usn = models.CharField(max_length=20)
    dob = models.DateField()
    question_number = models.IntegerField(blank=True, null=True)


class Faculty(AbstractBaseUser):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
   
class QuestionBank(models.Model):
    question_number = models.IntegerField()
    question = models.TextField()


class Instruction(models.Model):
    exam_name = models.CharField(max_length=100)
    date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    