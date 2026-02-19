from django.contrib import admin
from .models import PortfolioItem

@admin.register(PortfolioItem)
class PortfolioItemAdmin(admin.ModelAdmin):
    list_display = ('title', 'section', 'order', 'is_active')
    list_filter = ('section', 'is_active')
    ordering = ('section', 'order')
