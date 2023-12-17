# urls.py
from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'exams', views.ExamViewSet)
router.register(r'instructions', views.InstructionViewSet)
router.register(r'questions', views.QuestionViewSet)
router.register(r'login', views.LoginViewSet, basename='login')

urlpatterns = [
    path('', include(router.urls)),
]

