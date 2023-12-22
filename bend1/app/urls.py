from django.urls import path
from .views import (
    student_list_create,
    faculty_list_create,
    question_bank_list_create,
    instruction_list_create,
)

urlpatterns = [
    
    path('students/', student_list_create, name='student-list-create'),
    path('faculties/', faculty_list_create, name='faculty-list-create'),
    path('questions/', question_bank_list_create, name='question-bank-list-create'),
    path('instructions/', instruction_list_create, name='instruction-list-create'),
]
