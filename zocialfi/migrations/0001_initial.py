# Generated by Django 4.1.7 on 2024-04-10 14:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ResponseLog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('datetime', models.DateTimeField(auto_now=True)),
                ('type', models.CharField(max_length=500)),
                ('value', models.CharField(max_length=500)),
            ],
        ),
    ]
