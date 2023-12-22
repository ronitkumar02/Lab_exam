from rest_framework import serializers
from .models import Student, Faculty, QuestionBank, Instruction

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('id', 'usn', 'dob', 'question_number')

class FacultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = ('id', 'email', 'password')  

class QuestionBankSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionBank
        fields = ('id', 'question_number', 'question')

class InstructionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instruction
        fields = ('id', 'exam_name', 'date', 'start_time', 'end_time')
