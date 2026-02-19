from django.shortcuts import render
from .models import PortfolioItem

def home(request):
    items = PortfolioItem.objects.filter(is_active=True)

    context = {
        'hero': items.filter(section='hero').first(),
        'about': items.filter(section='about').first(),
        'skills': items.filter(section='skill'),
        'projects': items.filter(section='project'),
        'testimonials': items.filter(section='testimonial'),
        'contact': items.filter(section='contact').first(),
        'socials': items.filter(section='social'),
    }

    return render(request, 'portfolio/index.html', context)
