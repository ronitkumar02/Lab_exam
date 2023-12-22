from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Student, Faculty, QuestionBank, Instruction
from .serializers import StudentSerializer, FacultySerializer, QuestionBankSerializer, InstructionSerializer

# Student Views
@api_view(['GET', 'POST'])
def student_list_create(request):
    if request.method == 'GET':
        students = Student.objects.all()
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Faculty Views
@api_view(['GET', 'POST'])
def faculty_list_create(request):
    if request.method == 'GET':
        faculties = Faculty.objects.all()
        serializer = FacultySerializer(faculties, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = FacultySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Question Bank Views
@api_view(['GET', 'POST'])
def question_bank_list_create(request):
    if request.method == 'GET':
        questions = QuestionBank.objects.all()
        serializer = QuestionBankSerializer(questions, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = QuestionBankSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Instruction Views
@api_view(['GET', 'POST'])
def instruction_list_create(request):
    if request.method == 'GET':
        instructions = Instruction.objects.all()
        serializer = InstructionSerializer(instructions, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = InstructionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
