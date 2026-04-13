from django.urls import path
from .views import (
    ProductListAPIView,
    ProductDetailAPIView,
    ActiveProductListAPIView,
    ExpensiveProductListAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView,
)

urlpatterns = [
    path('products/', ProductListAPIView.as_view(), name='products-list'),
    path('products/active/', ActiveProductListAPIView.as_view(), name='products-active'),
    path('products/expensive/', ExpensiveProductListAPIView.as_view(), name='products-expensive'),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view(), name='product-detail'),

    path('categories/', CategoryListAPIView.as_view(), name='categories-list'),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view(), name='category-detail'),
    path('categories/<int:category_id>/products/', CategoryProductsAPIView.as_view(), name='category-products'),
]

# #fbvsdf
# from django.urls import path
# from .views import (
#     products_list,
#     product_detail,
#     active_products,
#     expensive_products,
# )
#
# urlpatterns = [
#     path('products/', products_list, name='products-list'),
#     path('products/<int:product_id>/', product_detail, name='product-detail'),
#     path('products/active/', active_products, name='products-active'),
#     path('products/expensive/', expensive_products, name='products-expensive'),
# ]

# cbv and mixins
# from django.urls import path
# from .views import (
#     ProductListAPIView,
#     ProductDetailAPIView,
#     ActiveProductListAPIView,
#     ExpensiveProductListAPIView,
# )
#
# urlpatterns = [
#     path('products/', ProductListAPIView.as_view(), name='products-list'),
#     path('products/<int:product_id>/', ProductDetailAPIView.as_view(), name='product-detail'),
#     path('products/active/', ActiveProductListAPIView.as_view(), name='products-active'),
#     path('products/expensive/', ExpensiveProductListAPIView.as_view(), name='products-expensive'),
# ]