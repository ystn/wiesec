# Generated by Django 5.1 on 2024-10-07 18:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profile_mod', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='phone',
            field=models.CharField(default='', max_length=20),
            preserve_default=False,
        ),
    ]
