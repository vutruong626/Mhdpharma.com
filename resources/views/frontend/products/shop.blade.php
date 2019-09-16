@extends('frontend.master')
@section('content')
<div id="page-title-bar" class="page-title-bar">
    <div class="container">
        <div class="wrap w-100 d-flex align-items-center">
            <div class="page-title-bar-inner d-flex flex-column w-100">
                <div class="page-header">
                    <h1 class="page-title typo-heading color-vt">Sản Phẩm</h1>
                </div>
                <div class="breadcrumb">
                    <!-- Breadcrumb NavXT 6.3.0 -->
                    <span property="itemListElement" typeof="ListItem"><a property="item" typeof="WebPage"
                            title="Go to Medicor." href="/" class="home" aria-current="page"><span property="name">Trang
                                chủ</span></a>
                        <meta property="position" content="1"></span> </div>
            </div>
        </div>
    </div>
</div>
<div class="site-content-contain" style="margin-top: 100px;">
    <div id="content" class="site-content">
        <div class="wrap">
            <div data-elementor-type="post" data-elementor-id="2180" class="elementor elementor-2180"
                        data-elementor-settings="[]">
                <aside id="secondary" class="widget-area" role="complementary">
                    <div class="inner">
                        <section id="woocommerce_product_categories-2" class="widget woocommerce widget_product_categories">
                            <h2 class="widget-title">Danh mục sản phẩm</h2>
                            <ul class="product-categories  " >
                                
                                @foreach($category as $vt_category)
                                @if($vt_category->parent_id == null)
                                <li class="cat-item cat-item-111 elementor-element elementor-element-4207434 elementor-widget elementor-widget-accordion" data-id="{{$vt_category->id}}" data-id="4207434" data-element_type="widget" data-widget_type="accordion.default" style="    margin-bottom: 0px;padding: 5px 0px 0px 0px;">
                                    <div class="elementor-accordion" role="tablist">
                                        <div class="elementor-accordion-item">
                                            <div id="elementor-tab-title-6921" class="elementor-tab-title crop-vt" tabindex="6921"
                                            data-tab="3" role="tab" aria-controls="elementor-tab-content-6921">
                                                    <span class="elementor-accordion-icon" aria-hidden="true" style="margin: 0px 6px 0px 6px;">
                                                        <i class="elementor-accordion-icon-closed fas fa-plus-circle" style="padding: 0px 10px;"></i>
                                                        <i class="elementor-accordion-icon-opened fas fa-minus-circle" style="padding: 0px 10px;"></i>
                                                    </span>
                                                    {{$vt_category->name}}
                                            </div>
                                            <ul class="children " >
                                                @foreach($category as $vt_category_child)
                                                    @if($vt_category_child->parent_id == $vt_category->id)
                                                    <li  class="cat-item cat-item-104 item-click elementor-tab-content elementor-clearfix" data-id="{{$vt_category_child->id}}" id="elementor-tab-content-6921" data-tab="3" role="tabpanel" aria-labelledby="elementor-tab-title-6921" style="border-top: 0;padding: 0px 30px;">
                                                        <span style="cursor: pointer;">{{$vt_category_child->name}}</span>
                                                        <span class="count">( {{$vt_category_child->order}} )</span>
                                                    </li>
                                                    @endif
                                                @endforeach
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                @endif
                                @endforeach
                               
                            </ul>
                        </section>
                    </div>
                </aside><!-- #secondary -->
            </div>
            <div id="primary" class="content-area">
                <main id="main" class="site-main" role="main" >
                    
                        <header class="woocommerce-products-header">
                        </header>
                        <div class="osf-sorting-wrapper" >
                            <div class="osf-sorting">
                                <div class="osf-sorting-group col-lg-6 col-sm-12"><a href="{{route('shop')}}" style="font-size: 20px;"><i class="fas fa-bars" style="color: #f6b823;"></i> Tất cả</a>
                                </div>

                            </div>
                        </div>
                        <div class="woocommerce-notices-wrapper"></div>
                        <div class="columns-3">
                            <ul class="products columns-3 ajax-showdata" >

                                @foreach($shop as $vt_shop)
                                <li
                                    class="list_product product type-product post-2840 status-publish first instock product_cat-cough-cold-flu has-post-thumbnail shipping-taxable purchasable product-type-simple">
                                    <div class="product-block">
                                        <!-- <div class="posted_in"><a href="{{route('shop_detail',$vt_shop->slug)}}"
                                                rel="tag"></a></div> -->
                                        <div class="product-transition">
                                            <div class="product-image">
                                                <img width="400" height="534" src="{{asset('storage/'.$vt_shop->image)}}"
                                                    class="attachment-shop_catalog size-shop_catalog wp-post-image"
                                                    alt="" />
                                            </div><a href="{{route('shop_detail',$vt_shop->slug)}}"
                                                class="woocommerce-LoopProduct-link woocommerce-loop-product__link"></a>
                                        </div>
                                        <h3 class="woocommerce-loop-product__title"><a
                                                href="{{route('shop_detail',$vt_shop->slug)}}">{{$vt_shop->seo_title}}</a></h3>

                                        <div class="woocommerce-product-details__short-description" style="font-size: 12px;line-height: 15px;">
                                            <p >{!! $vt_shop->excerpt !!}</p>
                                        </div>
                                        <div class="woocommerce-product-details__short-description" style="font-size: 12px;"></div>
                                        <div class="posted_in">{{$vt_shop->title}}</div>
                                    </div>
                                </li>
                                @endforeach
                            </ul>

                        </div>
                    
                </main><!-- #main -->
            </div><!-- #primary -->
            
        </div>
    </div><!-- #content -->
</div><!-- .site-content-contain -->
<script>

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}
</script>
<style type="text/css">

@media screen and (min-width:1200px) {

    .container,
    #content,
    .single-product .related.products,
    .single-product .up-sells.products,
    ul.elementor-nav-menu--dropdown.mega-containerwidth>li.mega-menu-item>.elementor {
        max-width: 1200px;
    }
}

@media screen and (min-width:1400px) {
    body.opal-layout-boxed {
        margin: 0px auto;
        width: 1400px;
    }

    body.opal-layout-boxed .elementor-section.elementor-section-stretched {
        max-width: 1400px;
    }
}

@media screen and (max-width: 1024px) {
    .elementor-1217 .elementor-element.elementor-element-e28060e>.elementor-element-populated {
        padding: 0px 0px 0px 0px;
    }
}

@media (min-width: 769px) {

    body.tax-product_cat.opal-content-layout-2cl #secondary,
    body.tax-product_cat.opal-content-layout-2cr #secondary,
    body.post-type-archive-product.opal-content-layout-2cl #secondary,
    body.post-type-archive-product.opal-content-layout-2cr #secondary {
        flex: 0 0 300px;
        max-width: 300px;
    }
}

body.custom-background {
    background-color: #a9cedf;
    background-image: url("{{asset('images/Lee/Background-nen.jpg')}}");
    background-position: center top;
    background-size: auto;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
/* Style the buttons */
.btn {
  border: none;
  outline: none;
  padding: 10px 16px;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 18px;
}

/* Style the active class, and buttons on mouse-over */
.active, .btn:hover, .active-menu {
  background-color: #fff;
  color: #f6b823;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<script>

    
    $(document).on('click', '.item-click', function () {
        //active or remove menu
        $(".item-click").removeClass("active-menu");
        $(this).addClass( "active-menu" );
        var id = $(this).attr('data-id');
        $.ajax({
            url: '/getCategoryProduct/' + id,
            type: "GET",
            dataType: 'html',
            async: false,
            data: {

            },
            success: function(res) {
                data = JSON.parse(res);
                console.log(data);
                var element = '';
                if (data.length > 0) {
                    for (var i = 0; i < data.length; i++) {
                        var slug = data[i].slug;
                        element +=
                            '<li class="list_product product type-product post-2840 status-publish first instock product_cat-cough-cold-flu has-post-thumbnail shipping-taxable purchasable product-type-simple">' +
                            '<div class="product-block">' +
                                '<div class="product-transition">' +
                                    '<div class="product-image">' +
                                        '<img width="400" height="534" src="storage/' + data[i].image +
                                        '" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="" />' +
                                    '</div>' +
                                    '<a href="{{ route('shop_detail','') }}/'+ slug +'" class="woocommerce-LoopProduct-link woocommerce-loop-product__link">' +
                                    '</a>' +
                                '</div>' +

                                '<h3 class="woocommerce-loop-product__title">' +
                                    '<a href="{{ route('shop_detail','') }}/'+ slug +'">' + data[i].seo_title +
                                    '</a>' +
                                '</h3>' +
                                '<div class="woocommerce-product-details__short-description" style="font-size: 12px;line-height: 15px;">' +
                                    '<p >' + data[i].excerpt + 
                                    '</p>' +
                                '</div>' +
                                '<div class="woocommerce-product-details__short-description" style="font-size: 12px;">' +
                                '</div>' +
                                '<div class="posted_in">' + data[i].title +

                                '</div>' +
                            '</div>' +
                            '</li>';
                    }
                    $('.ajax-showdata').html(element);

                }

            }

        });
        console.log($(this).attr('data-id'));
    });
     
    </script>
@endsection