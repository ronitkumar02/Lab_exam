# Generated by Django 4.2.5 on 2023-12-16 20:05

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("labexam", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Questionbank",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("question_number", models.IntegerField()),
                ("ques", models.CharField(max_length=100)),
            ],
        ),
        migrations.AlterField(
            model_name="studentdetails",
            name="question_number",
            field=models.PositiveIntegerField(blank=True),
        ),
    ]
