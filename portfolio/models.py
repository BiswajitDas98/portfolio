from django.db import models

class PortfolioItem(models.Model):

    SECTION_CHOICES = [
        ('hero', 'Hero'),
        ('about', 'About'),
        ('skill', 'Skill'),
        ('project', 'Project'),
        ('contact', 'Contact'),
        ('testimonial', 'Testimonial'),
        ('social', 'Social'),
    ]

    section = models.CharField(max_length=20, choices=SECTION_CHOICES)
    title = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='portfolio/', blank=True, null=True)
    extra_data = models.JSONField(blank=True, null=True)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.section} - {self.title}"
