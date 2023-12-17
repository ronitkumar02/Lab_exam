# models.py

from django.db import models

class Exam(models.Model):
    name = models.CharField(max_length=255)
    date = models.DateField()
    time_from = models.TimeField()
    time_to = models.TimeField()

class Instruction(models.Model):
    exam = models.ForeignKey(Exam, on_delete=models.CASCADE)
    content = models.TextField()

class Question(models.Model):
    exam = models.ForeignKey(Exam, on_delete=models.CASCADE)
    content = models.TextField()
    image = models.ImageField(upload_to='question_images/', null=True, blank=True)

class Student(models.Model):
    usn = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=100)

class Faculty(models.Model):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)