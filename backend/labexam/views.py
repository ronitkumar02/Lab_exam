from rest_framework import viewsets,status
from .models import Exam, Instruction, Question
from .serializers import ExamSerializer, InstructionSerializer, QuestionSerializer
from rest_framework.decorators import action

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Student, Faculty
from .serializers import StudentSerializer, FacultySerializer

class ExamViewSet(viewsets.ModelViewSet):
    queryset = Exam.objects.all()
    serializer_class = ExamSerializer

class InstructionViewSet(viewsets.ModelViewSet):
    queryset = Instruction.objects.all()
    serializer_class = InstructionSerializer

class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    

class LoginViewSet(viewsets.ViewSet):
    @action(detail=False, methods=['post'])
    def login(self, request):
        data = request.data
        selected_option = data.get('selectedOption')
        username = data.get('username')
        password = data.get('password')

        if selected_option == 'student':
            student = Student.objects.filter(usn=username).first()
            if student and student.password == password:
                serializer = StudentSerializer(student)
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        
        elif selected_option == 'faculty':
            faculty = Faculty.objects.filter(email=username).first()
            if faculty and faculty.password == password:
                serializer = FacultySerializer(faculty)
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        
        return Response({'message': 'Invalid request'}, status=status.HTTP_400_BAD_REQUEST)